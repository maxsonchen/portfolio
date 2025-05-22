import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"
import TypeWriter from "@/components/type-writer"
import MobileMenu from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-10 md:mb-20">
          <div className="text-yellow-400 font-semibold">MaxsonChen();</div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li className="relative">
                <Link href="/" className="text-white hover:text-yellow-400">
                  Home
                </Link>
                <div className="absolute bottom-[-10px] left-0 w-full h-1 bg-yellow-400 rounded-full"></div>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-yellow-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-yellow-400">
                  Portfolio / Projects
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="https://github.com/maxsonchen" className="text-white hover:text-yellow-400">
              <Github size={24} />
            </Link>
            <MobileMenu currentPath="/" />
          </div>
        </header>

        <main className="flex flex-col md:flex-row items-center justify-between mt-10 md:mt-20">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <p className="text-gray-300 mb-2">Hello World, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Maxson Chen</h1>
            <p className="text-xl md:text-2xl text-yellow-400 mb-4 min-h-[2rem]">
              <TypeWriter
                words={["Actuarial Studies Student", "Tech Enthusiast", "Computer Science Student"]}
                typingSpeed={100}
                deletingSpeed={50}
                delayBetweenWords={1500}
              />
            </p>
            <p className="text-gray-300">
              Welcome to My personal website. <span className="ml-1">👋</span>
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-20 blur-xl"></div>
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400"></div>
              <Image
                src="/profile-image.png"
                alt="Profile Image"
                width={400}
                height={400}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
