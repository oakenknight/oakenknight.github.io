import ThemeToggle from "@/components/ThemeToggle";
import WorkItem from "@/components/WorkItem";
import ProjectItem from "@/components/ProjectItem";
import BlogItem from "@/components/BlogItem";
import { getRecentPosts } from "@/lib/blog";
import Link from 'next/link';

export default function Home() {
  const blogPosts = getRecentPosts(3); // Get 3 most recent posts

  const projects = [
    {
      title: "Construstor",
      projectUrl: "https://github.com/oakenknight/construstor",
      year: "2025",
      description: "A tool for analyzing Solidity smart contracts to detect zero address validation patterns in constructors and initialize functions.",
      technologies: ["Rust", "Solidity", "Security"]
    },
    {
      title: "OpenRev",
      projectUrl: "https://github.com/oakenknight/open-rev",
      year: "2023",
      description: "Distributed system for for managing and grading student works. Implemented using Hyperledger Fabric, deployed on bare-metal cluster with K8.",
      technologies: ["Golang", "Hyperledger Fabric", "Kubernetes"]
    },
  ];

  return (
    <>
      <div className="fixed top-6 right-6 z-10 flex items-center gap-6">
        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="link-subtle">About</a>
          <a href="#projects" className="link-subtle">Projects</a>
          <a href="#blog" className="link-subtle">Writing</a>
          <a href="#contact" className="link-subtle">Contact</a>
        </nav>
        <ThemeToggle />
      </div>
      <main className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <section id="about" className="mb-16">
        <header className="mb-16">
          <h1 className="text-2xl font-bold mono mb-4">Aleksandar Ignjatijevic</h1>
          <p className="text-lg text-gray-600 mb-6">
            Security Engineer & Software Engineer
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Hi! I'm a security engineer at Informal Systems who loves building things that actually work — and stay secure while doing it.
            <br /><br />
            I spend my days working with Go, Rust, and Solidity, helping teams audit smart contracts and strengthen blockchain protocols. Much of my work happens in the Cosmos and Ethereum ecosystems, where I hunt for vulnerabilities, write formal specifications, and think deeply about how protocols should be designed.
            <br /><br />
            I have worked with many of our partners including Neutron, dYdX, Stride and clients such as Apex and Left Curve, and more, performing audits as well writing formal specifications and performing model-based testing on their protocols. Public audit reports I've worked on can be found under <a href="https://github.com/informalsystems/audits" className="link-subtle">Informal Systems' GitHub organization</a>.
            <br /><br />
            When I'm not breaking things (intentionally), you'll find me building internal tools and learning cool new stuff. Whether it's a Rust consensus engine, a Solidity smart contract, or diving into formal methods, I'm driven by one goal: creating secure-by-design systems that can scale across chains.
            <br /><br />
            My journey into blockchain started during my Master's in High Performance Computing at the Faculty of Technical Sciences, University of Novi Sad, where I developed a blockchain-based distributed system for grading assignments. Before diving full-time into security engineering, I spent a couple of years teaching Computer Architecture and Compilers at my alma mater — mentoring students through systems programming and compiler construction.
            <br /><br />
            I believe the best security comes from understanding systems inside and out — and I love sharing what I learn along the way.
          </p>
        </header>
        </section>

        {/* Projects Section - Hidden */}
        
        <section id="projects" className="prose mb-16">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
          <div className="text-sm text-gray-600 mt-8">
            <a href="https://github.com/oakenknight" className="link-subtle">View all projects on GitHub →</a>
          </div>
        </section>
       
        {/* Blog Section */}
        <section id="blog" className="prose mb-16">
          <h2 className="text-2xl font-semibold mb-6">Recent Writing</h2>
          {blogPosts.map((post) => (
            <BlogItem key={post.id} {...post} />
          ))}
          <div className="text-sm text-gray-600 mt-8">
            <Link href="/blog" className="link-subtle">View all posts →</Link>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="prose mb-16">
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          <p className="text-gray-700 mb-6">
            I'm always interested in discussing tech, interesting projects, 
            or just connecting with fellow developers.
          </p>
          
          <div className="space-y-2 text-gray-600">
            <div>

            </div>
            <div className="flex space-x-6 text-sm mt-4">
              <a href="https://farcaster.xyz/oakenknight" className="link-subtle">Farcaster</a>
              <a href="https://x.com/aleksandarignj" className="link-subtle">X</a>
              <a href="https://linkedin.com/in/aleksandar-ignjatijevic" className="link-subtle">LinkedIn</a>
              <a href="https://github.com/oakenknight" className="link-subtle">Github</a>
              <a href="mailto:a.ignjatijevic@gmail.com" className="link-subtle">
                a.ignjatijevic@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 pt-8 mt-16">
          <div className="text-sm text-gray-500 text-center">
            <p>&copy; 2025 Aleksandar Ignjatijevic. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
