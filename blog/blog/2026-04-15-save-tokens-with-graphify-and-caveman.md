---
title: "Graphify & Caveman — Two Tools That Cut My AI Token Usage"
description: How I use Graphify (knowledge graphs for codebase context) and Caveman (terse AI responses) to spend fewer tokens with Codex, Claude Code, and other AI coding assistants.
slug: save-tokens-graphify-caveman
authors: [akshay]
tags: [ai, developer-tools, productivity, llm, token-optimization]
date: 2026-04-15
---

I've been using Codex and Claude Code pretty heavily for the last few months, and the token usage started getting noticeable. Not catastrophic, but enough that I started paying attention to *where* the tokens were actually going.

This got worse recently — Anthropic [silently reduced Claude Code's session limits](https://www.reddit.com/r/ClaudeCode/comments/1s2lye7/claude_code_limits_were_silently_reduced_and_its/) during peak hours. If you use Claude Code on weekdays between 5am–11am PT, you now burn through your 5-hour session limit much faster than before. Your weekly limit hasn't changed, but in practice you're hitting the wall way sooner. A lot of people on r/ClaudeCode were caught off guard by this since there was no announcement — Anthropic only confirmed it after the backlash. Some folks have already started shifting to Codex because of this.

So between rising costs and tighter limits, I started looking into ways to waste fewer tokens. Turns out, most of the waste happens in two places: the assistant re-reading the same files every session, and the assistant writing three paragraphs when one sentence would do.

I found two open-source tools that help with this — **Graphify** for the input side and **Caveman** for the output side. Here's what I've learned using them.

<!--truncate-->

## Where the tokens actually go

If you haven't thought about this before, here's the rough breakdown. AI coding assistants read your files into their context window (input tokens) and then generate a response (output tokens). Both cost money.

- **Input**: Every time you start a new session or ask about a different file, the assistant has to read raw source code. A medium-sized project eats tens of thousands of tokens just for context.
- **Output**: LLMs are verbose by default. You ask for a one-line fix and get an essay about why the fix works, what else you might consider, and a polite closing.

I noticed I was skimming past most of the output anyway, and the assistant was re-reading the same project structure every conversation. That felt wasteful.

## Graphify — building a knowledge graph instead of reading raw files

[Graphify](https://github.com/safishamsi/graphify) is the more interesting of the two tools. Instead of letting your assistant grep through raw files every time, it builds a **knowledge graph** of your project upfront — code, docs, papers, images, even video — and then your assistant queries the graph.

### How it works

It runs three passes:

1. **AST pass (no LLM)**: Uses tree-sitter to extract structure from code — classes, functions, imports, call graphs. Supports 25 languages. This is fully local, nothing leaves your machine.
2. **Transcription pass (local)**: If you have video or audio files, it transcribes them locally with Whisper.
3. **Semantic pass (LLM)**: This is the one that costs tokens — Claude subagents run in parallel over docs, papers, and images to extract concepts and relationships.

The output is a NetworkX graph that gets exported as:

- `graph.html` — interactive visualization you can explore in a browser
- `GRAPH_REPORT.md` — highlights the important nodes, surprising connections, and suggested questions
- `graph.json` — the persistent graph your assistant reads instead of raw files

### Does the math actually work out?

According to Graphify's benchmarks, you get about **71x fewer tokens per query** vs reading raw files on a mixed corpus. The catch is the first run costs tokens to build the graph. After that, queries hit the cached graph, and a SHA256 check means re-runs only process files that changed.

For small projects (6 files or so), the graph doesn't save you much on tokens — those files fit in a context window anyway. But it still gives you a nice structural overview. The real savings kick in around 50+ files.

### Getting started

```bash
pip install graphifyy && graphify install
```

Then in your AI assistant:

```
/graphify .              # build graph of current directory
/graphify ./src --watch  # auto-rebuild as files change
```

Querying the graph:

```
/graphify query "show the auth flow"
/graphify query "what connects attention to the optimizer?" --budget 1500
/graphify path "DigestAuth" "Response"
/graphify explain "SwinTransformer"
```

You can also do an "always-on" install (`graphify claude install`, `graphify codex install`, etc.) that hooks into your assistant so it reads the graph report before searching raw files. Basically gives your assistant a map instead of making it wander through every file.

### What it can ingest

It handles code, PDFs, markdown, screenshots, diagrams, whiteboard photos, and video. Code extraction is entirely local (tree-sitter AST). Audio transcription is local too (faster-whisper). The only network calls go to your model API for the semantic extraction of docs and images.

## Caveman — make the AI shut up (nicely)

[Caveman](https://github.com/JuliusBrussee/caveman) does the opposite thing — it doesn't touch the input, it just makes the AI respond in fewer words. The concept is funny but it actually works: you tell your AI assistant to talk like a caveman.

Instead of getting a three-paragraph explanation for a one-line fix, you get just the fix. 75% fewer output tokens on average, and honestly the shorter version is often easier to scan when you're in the middle of coding.

### There's actually a paper on this

This isn't just a novelty trick. A March 2026 paper — ["Brevity Constraints Reverse Performance Hierarchies in Language Models"](https://arxiv.org/abs/2604.00025) — found that forcing large models to be brief **improved accuracy by 26 percentage points** on certain benchmarks. Turns out verbose doesn't always mean better.

### Intensity levels

Caveman has four levels, from mild to aggressive:

- **Lite**: Clean, terse English — strips filler but keeps sentence structure
- **Full**: Classic caveman — drops articles, shortens aggressively
- **Ultra**: Telegram-style compression
- **文言文 (Wenyan)**: Classical Chinese literary compression — most token-efficient - if you know Chinese 😝

Here's the same React re-render fix at each level:

**Normal (69 tokens):**
> "The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle. When you pass an inline object as a prop, React's shallow comparison sees it as a different object every time, which triggers a re-render. I'd recommend using useMemo to memoize the object."

**Full (19 tokens):**
> "New object ref each render. Inline object prop = new ref = re-render. Wrap in useMemo."

**Ultra (10 tokens):**
> "inline obj prop → new ref → rerender. useMemo."

Ultra strips it down to almost nothing. You get the fix, but if you didn't already know what the problem was, you might have to think for a second. I mostly use Lite or Full day-to-day. Ultra is fun to try but can get cryptic on longer answers.

### Installation

```bash
# Claude Code
claude plugin marketplace add JuliusBrussee/caveman && claude plugin install caveman@caveman

# Codex — use /plugins inside Codex, search "Caveman", and install from there

# Gemini CLI
gemini extensions install https://github.com/JuliusBrussee/caveman

# Cursor / Windsurf / Copilot / Cline
npx skills add JuliusBrussee/caveman -a cursor
npx skills add JuliusBrussee/caveman -a windsurf
npx skills add JuliusBrussee/caveman -a github-copilot
npx skills add JuliusBrussee/caveman -a cline
```

Note: Codex uses `$caveman` instead of `/caveman` for skill calling.

Trigger with `/caveman`, switch levels with `/caveman ultra`, stop with `"normal mode"`.

### Bonus: compress your memory files too

Caveman ships a `caveman-compress` command that rewrites your `CLAUDE.md` and other memory files into caveman-speak, so the AI reads fewer input tokens every session:

```
/caveman:compress CLAUDE.md
```

It keeps the human-readable original as a backup. Code blocks, URLs, file paths, and commands pass through untouched — only the prose gets compressed.

## Using them together

I've been running both at the same time. Graphify handles the input side (assistant reads a compact graph instead of raw files), Caveman handles the output side (terse responses instead of essays).

| | **What it reduces** | **How** | **Savings** |
|---|---|---|---|
| **Graphify** | Input tokens | Knowledge graph replaces raw file reads | ~71x per query |
| **Caveman** | Output tokens | Terse responses, no filler | ~75% reduction |

Both are open-source and both install in one command. If you're noticing your token usage creeping up, they're worth a try.

## Links

- [Graphify on GitHub](https://github.com/safishamsi/graphify)
- [Caveman on GitHub](https://github.com/JuliusBrussee/caveman)
- [Paper: "Brevity Constraints Reverse Performance Hierarchies in Language Models"](https://arxiv.org/abs/2604.00025)
