import Image from 'next/image'
import Link from 'next/link'

import Layout2 from '@/components/layout/Layout2'

import { getCollection } from '../../content/useContent'

export default function index({ projects }) {
  return (
    <Layout2 title="Projects">
      <div className="container my-20">
        <div className="row g-0">
          {projects.map((project) => (
            <div className="md:col-3 relative" key={project.index}>
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
    </Layout2>
  )
}

export async function getStaticProps() {
  let projects = getCollection('projects', true)
  return {
    props: {
      projects,
    },
  }
}
