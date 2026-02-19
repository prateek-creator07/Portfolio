export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Alex Chen</h3>
            <p className="text-sm opacity-90">Mechanical Engineer & Product Designer</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:opacity-80 transition-opacity">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:opacity-80 transition-opacity">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-80 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2025 Alex Chen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
