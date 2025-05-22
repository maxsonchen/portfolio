"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface MobileMenuProps {
  currentPath: string
}

export default function MobileMenu({ currentPath }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-white hover:text-yellow-400 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center">
          <button
            onClick={closeMenu}
            className="absolute top-8 right-4 text-white hover:text-yellow-400 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col items-center space-y-8">
            <Link
              href="/"
              onClick={closeMenu}
              className={`text-2xl ${
                currentPath === "/" ? "text-yellow-400" : "text-white hover:text-yellow-400"
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`text-2xl ${
                currentPath === "/about" ? "text-yellow-400" : "text-white hover:text-yellow-400"
              } transition-colors`}
            >
              About
            </Link>
            <Link
              href="/portfolio"
              onClick={closeMenu}
              className={`text-2xl ${
                currentPath === "/portfolio" ? "text-yellow-400" : "text-white hover:text-yellow-400"
              } transition-colors`}
            >
              Portfolio / Projects
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
