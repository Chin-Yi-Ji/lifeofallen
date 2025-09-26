import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
             {currentYear} About Allen. All rights reserved.
          </div>

          {/* Contact Info Placeholder */}
          <div className="text-center text-sm text-muted-foreground">
            台北，台灣  allen@example.com
          </div>

          {/* Social Links Placeholder */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:allen@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
