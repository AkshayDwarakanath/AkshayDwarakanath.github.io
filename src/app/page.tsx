import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full px-12 py-12 bg-white dark:bg-gray-900 transition-colors">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Terminal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg">
                <span className="text-[#6c757d] dark:text-gray-400">$</span>
                <span className="text-[#212529] dark:text-white">
                  echo &quot;Hello Dev&quot;
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-tight text-[#212529] dark:text-white">
                Software Engineer and Tech Advisor
              </h1>

              <p className="text-[#6c757d] dark:text-gray-300 leading-relaxed">
                With over 9 years of extensive experience in Software
                Engineering, I collaborate with teams to develop
                production-ready web applications and scalable systems, with a
                focus on secure IAM, authorization, and building resilient
                architectures.
              </p>

              <div className="inline-block py-1 rounded-lg italic sm:text-lg text-[#212529] dark:text-gray-300">
                Learn, Build, Tech, Repeat -{" "}
                <span className="font-bold text-blue-600 dark:text-[#66a4de]">
                  #LBTR
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="bg-[#66a4de] hover:bg-[#5a94d1] rounded-none h-12 px-6">
                <Link href="/blog">Recent Posts</Link>
              </Button>
              <Button className="bg-[#66a4de] hover:bg-[#5a94d1] rounded-none h-12 px-6">
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Terminal Window */}
          <div className="bg-white dark:bg-gray-800 border border-[#dee2e6] dark:border-gray-700 rounded-lg overflow-hidden shadow-sm">
            {/* Terminal Header */}
            <div className="bg-[#f8f9fa] dark:bg-gray-700 px-4 py-2 flex items-center gap-2 border-b border-[#dee2e6] dark:border-gray-600">
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-[#6c757d] dark:text-gray-300 ml-2">
                akshay@dev:~
              </span>
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm space-y-1">
              <div className="text-[#6c757d] dark:text-gray-400">$ whoami</div>
              <div className="text-[#212529] dark:text-white">
                Akshay Dwarakanath
              </div>
              <div className="text-[#6c757d] dark:text-gray-400">
                $ cat /etc/about
              </div>
              <div className="text-[#66a4de]">
                | Software Engineer | Security & IAM Specialist | Cloud-Native
                Systems Architect
              </div>
              <div className="text-[#66a4de]">
                | Building scalable applications and sharing knowledge with the
                community
              </div>
              <div className="text-[#6c757d] dark:text-gray-400">
                $ ls ~/skills
              </div>
              <div className="space-y-0 text-sm">
                <div className="text-[#6c757d] dark:text-gray-400">
                  <span className="text-[#66a4de]">golang | </span>
                  <span className="text-[#66a4de]">typescript | </span>
                  <span className="text-[#66a4de]">react | </span>
                  <span className="text-[#66a4de]">node.js | </span>
                  <span className="text-[#66a4de]">python | </span>
                  <span className="text-[#66a4de]">oauth 2.0 | </span>
                  <span className="text-[#66a4de]">iam-security | </span>
                  <span className="text-[#66a4de]">rbac | </span>
                  <span className="text-[#66a4de]">aws | </span>
                  <span className="text-[#66a4de]">docker | </span>
                  <span className="text-[#66a4de]">kubernetes | </span>
                  <span className="text-[#66a4de]">microservices ....</span>
                </div>
              </div>
              <div className="text-[#6c757d] dark:text-gray-400">total 10</div>

              <div className="text-[#6c757d] dark:text-gray-400">
                $ ls -la ~/posts
              </div>
              <div className="space-y-0 text-xs">
                <div className="text-[#6c757d] dark:text-gray-400">
                  drwxr-xr-x akshay dev 4.0K 10 Aug 2025{" "}
                  <span className="text-[#66a4de]">coming soon../</span>
                </div>
              </div>
              <div className="text-[#6c757d] dark:text-gray-400">total 1</div>
              <div className="text-[#6c757d] dark:text-gray-400">
                $ <span className="animate-pulse">█</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#dee2e6] dark:bg-gray-700" />

      {/* What I'm Up To Section */}
      <div className="w-full px-12 py-12 bg-white dark:bg-gray-800 transition-colors">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg">
              <span className="text-[#6c757d] dark:text-gray-400">$</span>
              <span className="text-[#212529] dark:text-white">
                cat ~/current-focus
              </span>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-[#212529] dark:text-white">
              What I&apos;m Up To
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-[#f8f9fa] dark:bg-gray-700 border-l-4 border-l-[#66a4de] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-xl mt-1">🚀</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#212529] dark:text-white mb-3">
                    Building Scalable Cloud-Native Systems
                  </h3>
                  <p className="text-[#6c757d] dark:text-gray-300 leading-relaxed">
                    Architecting and developing scalable microservices and
                    distributed systems using Golang, Node.js, Next.js,
                    Kubernetes, Temporal workflow orchestration, and multi-cloud
                    strategies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f9fa] dark:bg-gray-700 border-l-4 border-l-[#66a4de] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-xl mt-1">🛡️</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#212529] dark:text-white mb-3">
                    IAM & Security Engineering
                  </h3>
                  <p className="text-[#6c757d] dark:text-gray-300 leading-relaxed">
                    Driving secure identity and access management solutions with
                    OAuth 2.0, OIDC, RBAC, and multi-tenant SSO implementations
                    that enable seamless and safe user authentication.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f9fa] dark:bg-gray-700 border-l-4 border-l-[#66a4de] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-xl mt-1">✍️</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#212529] dark:text-white mb-3">
                    Writing & Sharing
                  </h3>
                  <p className="text-[#6c757d] dark:text-gray-300 leading-relaxed">
                    Regularly writing technical articles about web development,
                    best practices, and lessons learned. I believe in sharing
                    knowledge to help the developer community grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
