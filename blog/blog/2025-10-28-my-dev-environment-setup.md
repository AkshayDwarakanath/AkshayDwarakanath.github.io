---
title: My macOS Dev Environment Setup
description: A walkthrough of my terminal setup with iTerm2, Zsh, Powerlevel10k, and useful plugins that make development smoother
slug: dev-environment-setup
authors: [akshay]
tags: [terminal, zsh, macos, development, productivity]
date: 2025-10-28
---

Been putting off documenting this for a while now, but figured it's time to share my terminal setup. Not claiming this is the best configuration out there, but it works well for me and might give you some ideas for your own setup.

<!--truncate-->

## Why iTerm2 and Zsh?

**iTerm2** is pretty much the standard terminal replacement on macOS. Sure, the default Terminal.app works fine, but iTerm2 gives you split panes, better search, and customization options that make life easier. Download it from [iterm2.com](https://iterm2.com) and you're good to go.

As for **Zsh**, macOS comes with it as the default shell now, so you probably already have it. If you're still on bash for some reason, just run `chsh -s /bin/zsh` to switch over. The best part about Zsh? Commands are contextual - you can type `..` instead of `cd ..` to go back a directory, or `...` to go back three levels. Small things, but they add up over time.

## Oh My Zsh Installation

Oh My Zsh is basically the framework that makes Zsh configuration much simpler. Installing it is straightforward:

```bash

sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

This creates a `~/.zshrc` file where all your configuration lives. You can edit it with any text editor - I usually just use `code ~/.zshrc` to open it in VS Code.

## Powerlevel10k Theme

The theme I use is **Powerlevel10k**. It's fast, looks clean, and has a configuration wizard that walks you through setup. Installation is simple - clone the repo into your Oh My Zsh themes directory:

```bash

git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

```

Then update your `~/.zshrc` to use the theme:

```bash

ZSH_THEME="powerlevel10k/powerlevel10k"

```

After restarting your terminal, the configuration wizard automatically launches. It asks about your preferences - prompt style, icons, colors, etc. The wizard is interactive and shows you previews as you make choices:

![Powerlevel10k Configuration Wizard](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif)

If the p10k configuration wizard does not start automatically, you can run the configuration wizard the powerlevel10k theme with this command

```bash

p10k configure

```

If you ever want to reconfigure it, just run `p10k configure` again.

## Plugins That Actually Matter

Here are the plugins I have in my `~/.zshrc`:

```bash

plugins=(
git
zsh-syntax-highlighting
zsh-autosuggestions
autojump
zsh-bat
)

```

### Git Plugin

**Git plugin** comes with Oh My Zsh and adds useful git aliases. Nothing fancy but saves typing.

### Syntax Highlighting

**zsh-syntax-highlighting** highlights commands as you type them. If something's wrong or a command doesn't exist, it shows up in red. Install it by cloning the repo:

```bash

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

```

### Autosuggestions

**zsh-autosuggestions** shows you previously typed commands as you start typing. Hit the right arrow key to accept the suggestion. Really helpful when you're running the same commands over and over:

```bash

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

```

### Autojump

**autojump** is a game-changer for navigation. Instead of typing out full paths, you can jump to directories you've visited before by typing `j <partial-name>`. For example, after visiting `/Users/username/projects/my-app` a few times, you can just type `j my-app` from anywhere. Install via Homebrew:

```bash

brew install autojump

```

### Zsh-bat

**zsh-bat** enhances the `bat` command (a better `cat` with syntax highlighting). Makes reading code files in the terminal much more pleasant.

After installing these plugins, add them to the `plugins` array in your `~/.zshrc` and run `source ~/.zshrc` to reload your configuration.

### FZF - Fuzzy Finder

**fzf** is probably one of the most powerful additions to this setup. It's a command-line fuzzy finder that gives you interactive filtering for pretty much anything - files, command history, processes, you name it.

_**This plugin is so good that I use it for everything. I use it to find files, navigate directories, search through git history, and even to find commands in my shell history.**_

_**I may write a dedicated blog post about it in the future.**_ :wink:

Install it via Homebrew:

```bash

brew install fzf

```

To set up shell integration (key bindings and fuzzy completion), add this to your `~/.zshrc`:

```bash

# Set up fzf key bindings and fuzzy completion
source <(fzf --zsh)

```

## Vim

**Vim** comes pre-installed on macOS. I mainly use it for quick edits in the terminal - changing config files, editing commit messages, that sort of thing. Not doing anything fancy with my vim config at the moment, just using the defaults.

## TheFuck - Because Typos Happen

**TheFuck** is one of those tools that makes you laugh and actually saves time. You know when you mistype a command and the terminal suggests what you probably meant? Instead of retyping everything, just type `fuck` and it runs the corrected command.

![TheFuck](https://raw.githubusercontent.com/nvbn/thefuck/master/example.gif)

Install it via pip or Homebrew:

```bash

brew install thefuck

```

Then add this to your `~/.zshrc`:

```bash

eval $(thefuck --alias)

```

Example - you type `git psuh` instead of `git push`, and git tells you "did you mean push?". Just type `fuck` and it runs `git push` for you. Works with tons of different commands and has pretty good matching logic.

## Wrapping Up

This setup has evolved over time based on what actually helps my workflow. The key is starting simple and adding tools as you find gaps in your process. Powerlevel10k makes things look good, the plugins save keystrokes, and thefuck fixes those frustrating typos.

Your `.zshrc` file is your personal config - don't be afraid to experiment with it. If something breaks, just revert the changes and reload with `source ~/.zshrc`. That's the beauty of it being version-controlled text files.
