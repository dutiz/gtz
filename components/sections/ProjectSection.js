import Image from 'next/image'
import Link from 'next/link'

export default function ProjectSection({ projects }) {
  return (
    <div className="bg-gray-300">
      <div className="container">
        <div className="row py-12">
          <h2 className="uppercase font-bold text-4xl">Project</h2>
        </div>
        <div className="row g-0 pb-12">
          {projects.slice(0, 3).map((project) => (
            <div className="md:col-4 relative" key={project.index}>
              <Link href={`/projects/${project.slug}`}>
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black hover:bg-transparent  text-white hover:text-transparent bg-opacity-75
                transition-all duration-100 ease-in"
                >
                  <p className="text-xl">{project.title}</p>
                </div>
                <Image
                  src={project.image1}
                  width={438}
                  height={400}
                  className="w-full h-full object-cover"
                  alt={project.alt1}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
