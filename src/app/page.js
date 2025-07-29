import ThemeToggle from "@/components/ThemeToggle";
import WorkItem from "@/components/WorkItem";
import ProjectItem from "@/components/ProjectItem";

export default function Home() {

  const projects = [
    {
      title: "Distributed Task Queue",
      projectUrl: "#",
      year: "2024",
      description: "A fault-tolerant task processing system built with Node.js and Redis. Handles 10k+ tasks per minute with automatic retries and dead letter queues.",
      technologies: ["TypeScript", "Redis", "Docker"]
    },
    {
      title: "Real-time Analytics Dashboard",
      projectUrl: "#",
      year: "2023",
      description: "Interactive dashboard for monitoring application metrics with WebSocket connections and D3.js visualizations.",
      technologies: ["React", "D3.js", "WebSocket"]
    },
    {
      title: "Developer CLI Tool",
      projectUrl: "#",
      year: "2023",
      description: "Command-line utility for automating common development workflows. Published on npm with 500+ weekly downloads.",
      technologies: ["Node.js", "Commander.js", "npm"]
    }
  ];

  return (
    <>
      <div className="fixed top-6 right-6 z-10 flex items-center gap-6">
        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="link-subtle">About</a>
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
I spend my days working with Go, Rust, and Solidity, helping teams audit smart contracts and strengthen blockchain protocols. Much of my work happens in the Cosmos ecosystem, where I hunt for vulnerabilities, write formal specifications, and think deeply about how protocols should be designed.
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
        {/* 
        <section id="projects" className="prose mb-16">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
          <div className="text-sm text-gray-600 mt-8">
            <a href="#" className="link-subtle">View all projects on GitHub →</a>
          </div>
        </section>
        */}


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
              <a href="https://x.com/aleksandarignj" className="link-subtle">X</a>
              <a href="https://farcaster.xyz/oakenknight" className="link-subtle">Farcaster</a>

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
            <p>&copy; 2025 Aleksandar. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
