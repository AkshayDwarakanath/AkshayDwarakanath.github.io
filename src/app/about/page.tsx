export default function About() {
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
              akshay@dev:~/about
            </span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm space-y-6">
            {/* Terminal Command */}
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="text-[#6c757d] dark:text-gray-400 transition-colors">
                $
              </span>
              <span className="text-[#212529] dark:text-white transition-colors">
                cat me.md
              </span>
            </div>

            {/* Introduction */}
            <div className="pl-4">
              <div>
                <p className="text-[#212529] dark:text-white mb-4 transition-colors">
                  Hey there! 👋 I&apos;m{" "}
                  <span className="text-[#66a4de] font-semibold">Akshay D</span>
                </p>
                <p className="text-[#6c757d] dark:text-gray-300 leading-relaxed mb-4 transition-colors">
                  I am a Software Engineer with over 9 years of experience
                  specializing in building scalable, secure, and
                  high-performance cloud-native applications. I have strong
                  expertise in Golang, Node.js, Kubernetes, and IAM solutions,
                  including OAuth 2.0, OIDC, and RBAC. I have led teams in
                  developing multi-tenant SaaS platforms, automated CI/CD
                  pipelines, and workflow orchestration with Temporal.
                  Passionate about mentoring and delivering reliable software, I
                  hold a Certified Kubernetes Administrator (CKA) certification.
                  Fluent in multiple languages, I thrive in collaborative and
                  innovative environments.
                </p>
                <div className="text-[#6c757d] dark:text-gray-300 space-y-1 ml-4 transition-colors">
                  <div className="text-[#66a4de] font-semibold">
                    → CISCO DUO Security{" "}
                    <span className="text-[#28a745] text-xs">[Current]</span>
                  </div>
                  <div>→ Bootlabs </div>
                  <div>→ Falabella India</div>
                  <div>→ Terrace Tech Labs</div>
                  <div>→ Hexwhale Technologies</div>
                </div>
                <p className="text-[#6c757d] dark:text-gray-300 leading-relaxed mt-4 transition-colors">
                  It&apos;s been an interesting journey that&apos;s for sure.
                  I&apos;m super passionate about staying on top of changes in
                  the industry and I&apos;m always trying to learn new skills
                  and enhance my expertise. I&apos;m totally self-motivated and
                  love pushing myself to learn things mainly for the sake of
                  learning.
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#dee2e6] dark:border-gray-600 my-4 transition-colors"></div>

              {/* Personal Interests Section */}
              <div className="border-l-4 border-[#66a4de] pl-4">
                <h3 className="text-[#66a4de] font-semibold mb-3">
                  Personal Interests
                </h3>
                <p className="text-[#6c757d] dark:text-gray-300 leading-relaxed transition-colors">
                  In my free time, I love tinkering around my home automation
                  systems leveraging IoT technologies to make my life easier.
                  I’m also passionate about exploring hydroponics—using
                  soilless, nutrient-rich water systems to grow plants
                  efficiently and sustainably, often integrating automation to
                  optimize growth and resource use.
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#dee2e6] dark:border-gray-600 my-4 transition-colors"></div>

              {/* Technical Expertise Section */}
              <div className="border-l-4 border-[#66a4de] pl-4">
                <h3 className="text-[#66a4de] font-semibold mb-3">
                  Technical Expertise
                </h3>
                <div className="text-[#6c757d] dark:text-gray-300 transition-colors">
                  <p className="my-2">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-square-code-icon lucide-square-code"
                      >
                        <path d="m10 9-3 3 3 3" />
                        <path d="m14 15 3-3-3-3" />
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                      </svg>{" "}
                      <strong>Programming Languages & Frameworks</strong>
                    </div>
                  </p>
                  <div className="ml-4 space-y-1 text-sm">
                    <div>
                      • GO, JavaScript/TypeScript,Python, React, Next.js,
                      Node.js
                    </div>
                  </div>

                  <p className="my-2 mt-4">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-database-icon lucide-database"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                        <path d="M3 12A9 3 0 0 0 21 12" />
                      </svg>{" "}
                      <strong>Databases & Messaging</strong>
                    </div>
                  </p>
                  <div className="ml-4 space-y-1 text-sm">
                    <div>
                      • PostgreSQL, MongoDB, Redis, Firestore, GRPC, Temporal
                    </div>
                  </div>

                  <p className="my-2 mt-4">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shield-icon lucide-shield"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      </svg>{" "}
                      <strong>Security & Identity</strong>
                    </div>
                  </p>
                  <div className="ml-4 space-y-1 text-sm">
                    <div>
                      • OAuth 2.0, OIDC, RBAC, CASBIN, Auth0, Duo Security
                    </div>
                  </div>

                  <p className="my-2 mt-4">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-cloud-check-icon lucide-cloud-check"
                      >
                        <path d="m17 15-5.5 5.5L9 18" />
                        <path d="M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742" />
                      </svg>{" "}
                      <strong>Cloud & DevOps</strong>
                    </div>
                  </p>
                  <div className="ml-4 space-y-1 text-sm">
                    <div>• AWS, Docker, Kubernetes</div>
                    <div>• CI/CD, Infrastructure as Code</div>
                    <div>• Microservices Architecture</div>
                    <div>• Monitoring & Observability</div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#dee2e6] dark:border-gray-600 my-4 transition-colors"></div>

              {/* Current Focus */}
              <div className="border-l-4 border-[#28a745] pl-4">
                <h3 className="text-[#28a745] font-semibold mb-3">
                  Currently Working On
                </h3>
                <div className="text-[#6c757d] dark:text-gray-300 space-y-1 transition-colors">
                  <p className="my-2 mt-4">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shield-icon lucide-shield"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                      </svg>{" "}
                      <strong>At Cisco Duo (Security Engineer)</strong>
                    </div>
                  </p>
                  <div>
                    • Focusing on authentication (AuthN), authorization (AuthZ),
                    and robust Role-Based Access Control (RBAC) for scalable
                    security.
                  </div>
                  <div>
                    • Working with the Model Context Protocol (MCP) for
                    context-aware authentication and advanced access controls.
                  </div>
                  <div>
                    • Working with Managed Service Provider (MSP) team to build
                    tools and integrations that enable broader adoption,
                    automation, and efficiency for MSP partners.
                  </div>
                  <div>
                    • Developing integrations and platform enhancements to
                    streamline security operations and empower large-scale
                    service provider environments.
                  </div>
                  <p className="my-2 mt-4">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-sprout-icon lucide-sprout"
                      >
                        <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
                        <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
                        <path d="M5 21h14" />
                      </svg>{" "}
                      <strong>Personal Projects – Hydroponics & IoT</strong>
                    </div>
                  </p>
                  <div>
                    • Building automated hydroponics systems that use IoT
                    sensors and controllers to manage water, nutrients, and
                    environmental factors for optimal plant growth.
                  </div>
                  <div>
                    • Developing custom dashboards and real-time alerts for
                    remote monitoring of hydroponics setups.
                  </div>
                  <div>
                    • Experimenting with automation, data analytics, and
                    sustainable food production via smart agriculture
                    technologies.
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#dee2e6] dark:border-gray-600 my-4 transition-colors"></div>
            </div>
            {/* Terminal Prompt */}
            <div className="text-[#6c757d] dark:text-gray-400 pt-1 transition-colors">
              $ <span className="animate-pulse">█</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
