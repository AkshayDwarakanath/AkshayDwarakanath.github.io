"use client";

import Link from "next/link";
import { useState } from "react";

const allTags = [
  "all",
  "analytics",
  "go",
  "htm",
  "javascript",
  "octoverse",
  "reactjs",
  "sql",
  "svelte",
  "typescript",
  "web-dev",
];

const blogPosts = [
  {
    slug: "multi-tenant-sso-iam-golang",
    title: "Building Multi-Tenant SSO & IAM with Golang",
    date: "03/11/2025",
    readTime: "12 min read",
    excerpt:
      "Explore the architectural principles and key design patterns for developing robust multi-tenant SSO and Identity Access Management systems using Golang and Ory Kratos.",
    tags: ["go", "web-dev", "analytics"],
  },
  {
    slug: "temporal-workflows-cloud-automation",
    title: "Orchestrating Cloud Automation with Temporal Workflows",
    date: "02/16/2025",
    readTime: "10 min read",
    excerpt:
      "How Temporal streamlined our distributed orchestration—enabling stateful, resilient, and auditable cloud service workflows at scale.",
    tags: ["go", "typescript", "web-dev"],
  },
  {
    slug: "secure-apis-rbac-casbin",
    title: "Securing Web APIs with RBAC & Casbin",
    date: "01/28/2025",
    readTime: "8 min read",
    excerpt:
      "Learn how to implement and enforce fine-grained authorization controls in Node.js and Go APIs using Casbin and RBAC best practices.",
    tags: ["go", "javascript", "reactjs", "web-dev"],
  },
  {
    slug: "modern-cloud-ci-cd",
    title: "Modern CI/CD With GitHub Actions & Terraform",
    date: "12/05/2024",
    readTime: "7 min read",
    excerpt:
      "A walkthrough of building high-velocity pipelines for cloud-native applications—automating testing, linting, and multi-cloud deployments with GitHub Actions and Terraform.",
    tags: ["web-dev", "typescript", "reactjs"],
  },
];

export default function Blog() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredPosts =
    selectedFilter === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.tags.includes(selectedFilter));

  return (
    <div className="w-full px-12 py-12 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w mx-auto px-12">
        {/* Main Terminal Window */}
        <div className="bg-white dark:bg-gray-800 border border-[#dee2e6] dark:border-gray-700 rounded-lg overflow-hidden shadow-sm transition-colors">
          {/* Terminal Header */}
          <div className="bg-[#f8f9fa] dark:bg-gray-700 px-4 py-2 flex items-center gap-2 border-b border-[#dee2e6] dark:border-gray-600 transition-colors">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-[#6c757d] dark:text-gray-300 ml-2 transition-colors">
              akshay@dev:~/blog
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm mb-4">
                <span className="text-[#6c757d] dark:text-gray-400 transition-colors">
                  $
                </span>
                <span className="text-[#212529] dark:text-white transition-colors">
                  ls recent_posts
                </span>
              </div>
              <h1 className="text-2xl font-bold text-[#66a4de] mb-2">
                📝 Recent Posts
              </h1>
            </div>

            {/* Filter Tags */}
            <div className="mb-6">
              <div className="text-[#6c757d] dark:text-gray-400 text-xs mb-2 transition-colors">
                filter:
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedFilter(tag)}
                    className={`px-2 py-1 text-xs rounded border transition-colors ${
                      selectedFilter === tag
                        ? "bg-[#66a4de] text-white border-[#66a4de]"
                        : "bg-[#f8f9fa] dark:bg-gray-600 text-[#6c757d] dark:text-gray-300 border-[#dee2e6] dark:border-gray-500 hover:bg-[#e9ecef] dark:hover:bg-gray-500"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <div className="bg-[#f8f9fa] dark:bg-gray-700 border border-[#dee2e6] dark:border-gray-600 rounded p-4 hover:bg-[#e9ecef] dark:hover:bg-gray-600 transition-colors cursor-pointer">
                    {/* Post Header */}
                    <div className="flex items-center justify-between text-xs text-[#6c757d] dark:text-gray-400 mb-2 transition-colors">
                      <span>~/{post.slug}</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Post Title */}
                    <h2 className="text-[#66a4de] font-semibold mb-2 hover:underline">
                      {post.title}
                    </h2>

                    {/* Post Date */}
                    <div className="text-xs text-[#6c757d] dark:text-gray-400 mb-2 transition-colors">
                      {post.date}
                    </div>

                    {/* Post Excerpt */}
                    <p className="text-xs text-[#212529] dark:text-gray-200 leading-relaxed mb-3 transition-colors">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-white dark:bg-gray-600 border border-[#dee2e6] dark:border-gray-500 rounded text-[#6c757d] dark:text-gray-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div className="mt-3 text-xs">
                      <span className="text-[#66a4de] hover:underline">
                        cat {post.slug}.md →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Terminal Prompt */}
            <div className="text-[#6c757d] dark:text-gray-400 mt-6 transition-colors">
              $ <span className="animate-pulse">█</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
