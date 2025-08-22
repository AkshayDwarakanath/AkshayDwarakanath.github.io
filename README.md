# Akshay Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components. Inspired by clean, professional design patterns.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Built-in theme support with shadcn/ui
- **Smooth Scrolling**: Seamless navigation between sections
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized with Next.js App Router

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Prerequisites

Before running this project, make sure you have:

- **Node.js**: Version 18.18.0 or higher
- **npm**: Version 8.0.0 or higher

### Updating Node.js

If you're using Node.js 16.x, you'll need to upgrade:

```bash
# Using nvm (recommended)
nvm install 18
nvm use 18

# Or using Homebrew on macOS
brew install node@18

# Or download from nodejs.org
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd akshay-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information

Update the following in `src/app/page.tsx`:

- **Name**: Change "Akshay Dwarak" to your name
- **Bio**: Update the hero section description
- **Location**: Modify the "Based in India" text
- **Technologies**: Update the tech stack badges
- **Social Links**: Add your GitHub, LinkedIn, and email links

### Projects

Replace the placeholder projects in the Projects section with your actual work:

```typescript
// Add your real projects here
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    technologies: ["React", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://yourproject.com"
  }
];
```

### Experience

Update the experience timeline with your work history in the Experience section.

### Styling

- **Colors**: Modify the color scheme in `src/app/globals.css`
- **Fonts**: Update font preferences in `src/app/layout.tsx`
- **Components**: Customize shadcn/ui components in `src/components/ui/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **Railway**: Direct deployment from GitHub
- **DigitalOcean**: App Platform with Node.js

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main portfolio page
├── components/
│   ├── ui/              # shadcn/ui components
│   └── smooth-scroll.tsx # Smooth scrolling functionality
└── lib/
    └── utils.ts         # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
