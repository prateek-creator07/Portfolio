import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "Automated Assembly System",
    description:
      "Designed and engineered a fully automated assembly line for precision components, reducing production time by 40% and improving quality consistency.",
    tags: ["SOLIDWORKS", "Automation", "Manufacturing"],
    image: "/automated-assembly-system-mechanical-engineering.jpg",
  },
  {
    title: "Thermal Management Solution",
    description:
      "Developed an innovative cooling system for high-performance electronics using advanced heat dissipation techniques and CFD analysis.",
    tags: ["FEA", "Thermal Analysis", "Product Design"],
    image: "/thermal-management-cooling-system.jpg",
  },
  {
    title: "Precision Robotics Arm",
    description:
      "Engineered a 6-axis robotic arm with sub-millimeter accuracy for industrial applications. Optimized for speed, precision, and reliability.",
    tags: ["Robotics", "CAD", "Control Systems"],
    image: "/precision-robotics-arm-mechanical.jpg",
  },
  {
    title: "Sustainable Packaging Design",
    description:
      "Created an eco-friendly packaging solution that reduced material waste by 35% while maintaining structural integrity and product protection.",
    tags: ["Sustainability", "Design", "Manufacturing"],
    image: "/sustainable-packaging.png",
  },
  {
    title: "Medical Device Prototype",
    description:
      "Developed a prototype for a portable medical diagnostic device, focusing on ergonomics, durability, and ease of use in clinical settings.",
    tags: ["Medical Device", "Prototyping", "User Research"],
    image: "/medical-device-prototype.jpg",
  },
  {
    title: "Hydraulic System Optimization",
    description:
      "Optimized hydraulic systems for heavy machinery, improving efficiency by 25% and reducing maintenance costs through advanced modeling.",
    tags: ["Hydraulics", "Optimization", "Analysis"],
    image: "/hydraulic-system-machinery.jpg",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
