# Docusaurus Blog Setup Guide

## ✅ Implementation Complete!

Your portfolio now uses **actual Docusaurus** for the blog, running at `/blog/`.

## Architecture

```
akshaydwarakanath.github.io/
├── /                    # Next.js Portfolio
├── /about              # Portfolio pages
├── /projects
└── /blog/              # Docusaurus Blog ✨
    ├── /blog/
    ├── /blog/tags/
    └── /blog/archive/
```

## Directory Structure

```
akshay-portfolio/
├── src/                # Next.js Portfolio
├── public/
├── blog/              # Docusaurus Blog
│   ├── blog/          # Blog posts go here
│   ├── src/
│   ├── static/
│   └── docusaurus.config.ts
├── scripts/
│   └── combine-builds.js
└── package.json
```

## Development

### Start Portfolio (Next.js)
```bash
npm run dev
```
Visit: `http://localhost:3000`

### Start Blog (Docusaurus)
```bash
npm run dev:blog
```
Visit: `http://localhost:3000/blog/`

## Creating Blog Posts

### 1. Create a new file in `/blog/blog/`

```bash
cd blog/blog
touch 2025-01-27-my-new-post.md
```

### 2. Add frontmatter and content

```markdown
---
slug: my-new-post
title: My New Blog Post
authors: [akshay]
tags: [tutorial, nextjs]
---

Your intro paragraph goes here. This will be shown in the blog list.

<!--truncate-->

## Main Content

Everything after `<!--truncate-->` is only shown on the full post page.

### Code Examples

\`\`\`typescript
const greeting: string = "Hello, World!"
console.log(greeting)
\`\`\`

### Lists and More

- Bullet points
- More bullets

1. Numbered lists
2. Work too!
```

### 3. Preview locally

```bash
npm run dev:blog
```

## Docusaurus Features

### ✅ Built-in Features

- **Blog** - Full-featured blog system
- **Tags** - Automatic tag pages
- **Archive** - Posts organized by date
- **RSS Feeds** - Auto-generated
- **Search** - Built-in search (Algolia)
- **Dark Mode** - Automatic dark mode
- **Authors** - Multi-author support
- **Reading Time** - Auto-calculated
- **Pagination** - Automatic pagination
- **SEO** - Built-in SEO optimization

### Author Configuration

Edit `/blog/blog/authors.yml`:

```yaml
akshay:
  name: Akshay Dwarakanath
  title: Software Engineer
  url: https://github.com/AkshayDwarakanath
  image_url: https://github.com/AkshayDwarakanath.png
  socials:
    github: AkshayDwarakanath
    linkedin: akshaydwarakanath
```

### Frontmatter Options

```yaml
---
slug: post-url-slug
title: Post Title
authors: [akshay]  # or multiple: [akshay, other]
tags: [tag1, tag2]
date: 2025-01-27   # Optional, defaults to filename
draft: false       # Set true to hide
image: /img/hero.png  # Hero image
---
```

## Building for Production

### Build Both Portfolio and Blog

```bash
npm run build
```

This will:
1. Build Next.js portfolio → `/out`
2. Build Docusaurus blog → `/blog/build`
3. Combine both → `/out/blog`

### Build Separately

```bash
# Build portfolio only
npm run build:portfolio

# Build blog only
npm run build:blog

# Combine builds
npm run combine
```

## Deployment

The GitHub Actions workflow automatically:
1. Installs dependencies for both
2. Builds portfolio (Next.js)
3. Builds blog (Docusaurus)
4. Combines outputs
5. Deploys to GitHub Pages

### Manual Deployment

```bash
npm run build
# Then deploy /out folder to GitHub Pages
```

## Customization

### Blog Theme

Edit `/blog/src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #66a4de;
  --ifm-color-primary-dark: #4d94d8;
  /* Add more custom colors */
}
```

### Blog Configuration

Edit `/blog/docusaurus.config.ts`:

- Site title and tagline
- Navbar items
- Footer links
- Social links
- Theme settings

### Adding Plugins

```bash
cd blog
npm install @docusaurus/plugin-name
```

Then add to `docusaurus.config.ts`:

```typescript
plugins: [
  '@docusaurus/plugin-name',
],
```

## Navigation

### From Portfolio to Blog

The portfolio `/blog` route automatically redirects to `/blog/`.

### From Blog to Portfolio

Click "← Back to Portfolio" in the blog navbar.

## RSS Feeds

Docusaurus automatically generates:
- `/blog/rss.xml` - RSS 2.0
- `/blog/atom.xml` - Atom feed

## Tips & Best Practices

### Writing Posts

1. **Use descriptive slugs** - Makes URLs readable
2. **Add truncate marker** - `<!--truncate-->` for excerpts
3. **Use tags consistently** - Helps readers find related content
4. **Add images** - Place in `/blog/static/img/`
5. **Code highlighting** - Specify language in code blocks

### File Naming

Docusaurus supports:
- `2025-01-27-post-name.md` - Date in filename
- `post-name.md` - Date in frontmatter

### Images

Place images in `/blog/static/img/`:

```markdown
![Alt text](/img/my-image.png)
```

### Internal Links

```markdown
[Link to another post](/blog/other-post)
[Link to portfolio](/)
```

## Troubleshooting

### Blog not showing in dev?

Make sure you're running:
```bash
npm run dev:blog
```

### Build fails?

Check:
1. Node.js version is 20+
2. All dependencies installed: `cd blog && npm install`
3. No syntax errors in blog posts

### Posts not appearing?

- Check frontmatter is valid YAML
- Ensure `draft: false` or omit draft field
- Verify file is in `/blog/blog/` directory

## Documentation

- **Docusaurus Docs**: https://docusaurus.io/docs
- **Blog Guide**: https://docusaurus.io/docs/blog
- **Markdown Features**: https://docusaurus.io/docs/markdown-features

## Next Steps

1. ✅ Create your first blog post
2. ✅ Customize the theme colors
3. ✅ Add your social links
4. ✅ Configure SEO metadata
5. ✅ Set up Algolia search (optional)
6. ✅ Add Google Analytics (optional)

---

**Status**: ✅ Docusaurus blog fully integrated!  
**Last Updated**: January 27, 2025
