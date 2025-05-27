import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"
import MobileMenu from "@/components/mobile-menu"

// Define skill types with proficiency levels
type Skill = {
  name: string
  icon: React.ReactNode | string
  color: string
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  isImage?: boolean
}

export default function About() {
  // Skills data with proficiency levels
  const skills: Skill[] = [
    {
      name: "HTML",
      color: "text-orange-500",
      proficiency: "Beginner",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
        </svg>
      ),
    },
    {
      name: "CSS",
      color: "text-blue-500",
      proficiency: "Beginner",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z" />
        </svg>
      ),
    },
    {
      name: "Python",
      color: "text-blue-500",
      proficiency: "Beginner",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      color: "text-yellow-400",
      proficiency: "Beginner",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
        </svg>
      ),
    },
    {
      name: "React.js",
      color: "text-blue-400",
      proficiency: "Beginner",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 00-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 00-3.107-.534A23.892 23.892 0 0012.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 00-3.113.538 15.02 15.02 0 01-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 01-4.412.005 26.64 26.64 0 01-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 011.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0112 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 00-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 00-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 00-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 001.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 01-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 01-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
        </svg>
      ),
    },
    {
      name: "C",
      color: "text-blue-600",
      proficiency: "Intermediate",
      icon: (
        <svg viewBox="0 0 128 128" fill="currentColor" height="1em" width="1em">
          <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-3.4 3.5-3.4 5.6v55.7c0 .8.4 1.8 1 2.6l.1.1c.5.8 1.3 1.5 2.1 2l48.3 27.9c.8.5 2 .7 3.2.7 1.2 0 2.3-.3 3.1-.7l47.5-27.9c1.7-1 3.4-3.5 3.4-5.6V36.1c.1-.8-.3-1.7-.8-2.6zM82 66v-4h5v-5h5v5h5v4h-5v5h-5v-5h-5zm3.3-14C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5z" />
        </svg>
      ),
    },
    {
      name: "R",
      color: "",
      proficiency: "Intermediate",
      isImage: true,
      icon: "/r-logo.png",
    },
    {
      name: "Excel",
      color: "text-green-600",
      proficiency: "Advanced",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-10 md:mb-20">
          <div className="text-yellow-400 font-semibold">MaxsonChen();</div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li className="relative">
                <Link href="/about" className="text-white hover:text-yellow-400">
                  About
                </Link>
                <div className="absolute bottom-[-10px] left-0 w-full h-1 bg-yellow-400 rounded-full"></div>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-yellow-400">
                  Portfolio / Projects
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="https://github.com" className="text-white hover:text-yellow-400">
              <Github size={24} />
            </Link>
            <MobileMenu currentPath="/about" />
          </div>
        </header>

        <main>
          <div className="bg-zinc-900 rounded-lg p-6 md:p-8 mb-10 md:mb-16">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
              <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0">
                <Image
                  src="/profile-image.png"
                  alt="Profile Image"
                  width={300}
                  height={300}
                  className="rounded-full object-cover"
                  priority
                />
              </div>

              <div className="space-y-4">
                <p className="text-base md:text-lg">
                  Hi everyone! My name is Maxson Chen. I'm a student pursuing degrees in Actuarial Studies and Computer
                  Science. I'm based in Sydney, Australia. I have a passion for technology and data analysis, combining
                  mathematical precision with creative problem-solving.
                </p>

                <p className="text-base md:text-lg">
                  My goal is to bridge the gap between complex data analysis and user-friendly applications. In addition
                  to my academic pursuits, I enjoy developing web applications that make data more accessible and
                  meaningful. I believe that creating programs is not just a technical task, but also an art that
                  requires aesthetic sensibility.
                </p>

                <p className="text-base md:text-lg">
                  When I'm not coding or studying, I explore new technologies and contribute to open-source projects. If
                  you're interested in collaborating or have any questions, please feel free to reach out through the
                  contact information provided.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center">
              <span className="w-6 md:w-8 h-1 bg-yellow-400 mr-3 md:mr-4"></span>
              Skills
            </h2>

            <div className="mb-6">
              <div className="inline-flex mb-6 md:mb-8">
                <button className="px-4 md:px-6 py-2 bg-yellow-400 bg-opacity-20 text-yellow-400 rounded-md mr-3 md:mr-4 text-sm md:text-base">
                  Tech Stack
                </button>
                <button className="px-4 md:px-6 py-2 text-gray-400 hover:text-white rounded-md text-sm md:text-base">
                  Tools
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="border border-zinc-800 rounded-lg p-3 md:p-4 flex items-center space-x-3 md:space-x-4 group"
                >
                  <div className={`${skill.color} text-3xl md:text-4xl`}>
                    {skill.isImage ? (
                      <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
                        <Image
                          src={(skill.icon as string) || "/placeholder.svg"}
                          alt={skill.name}
                          width={32}
                          height={32}
                        />
                      </span>
                    ) : (
                      <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12">{skill.icon}</span>
                    )}
                  </div>
                  <div>
                    <div className="text-base md:text-lg">{skill.name}</div>
                    <div className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm md:text-base">
                      {skill.proficiency}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
