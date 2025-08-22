import { Github, X, Rss, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#dee2e6] dark:border-gray-700 mt-auto bg-[#e2e9ee] dark:bg-gray-800 transition-colors">
      <div className="w-full px-6 py-8">
        <div className="flex items-center justify-center gap-6 text-[#6c757d] dark:text-gray-300">
          <a
            href="#"
            className="hover:text-[#212529] dark:hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="hover:text-[#212529] dark:hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          {/* <a
            href="#"
            className="hover:text-[#212529] dark:hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </a> */}
          <a
            href="#"
            className="hover:text-[#212529] dark:hover:text-white transition-colors"
          >
            <Rss className="h-5 w-5" />
          </a>
        </div>
        <div className="text-center text-sm text-[#6c757d] dark:text-gray-300 mt-4">
          <p>Made with Next.js & TypeScript • © 2025 akshay.dev</p>
          <p className="font-mono">ls -la ~/.config/akshay</p>
        </div>
      </div>
    </footer>
  );
}
