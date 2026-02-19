export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-balance">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a mechanical engineer with 8+ years of experience designing and developing innovative products. My
              passion lies at the intersection of engineering excellence and user-centered design.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I specialize in CAD modeling, finite element analysis, and bringing concepts from ideation to production.
              I've worked with startups and Fortune 500 companies to deliver solutions that are both technically sound
              and commercially viable.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
            <ul className="space-y-3">
              {[
                "SOLIDWORKS & CAD Design",
                "Finite Element Analysis (FEA)",
                "Product Development",
                "Manufacturing Optimization",
                "Technical Documentation",
                "Project Management",
              ].map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
