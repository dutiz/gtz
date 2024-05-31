import Image from 'next/image'
import Video from 'next-video'

import Layout2 from '@/components/layout/Layout2'

import { getCollection } from '../../content/useContent'

export default function SingleProject({ project }) {
  return (
    <Layout2 title={project.title}>
      <div
        style={{
          background: `linear-gradient(0deg, rgba(17, 17, 17, 0.75), rgba(17, 17, 17, 0.75)), url(${project.image2}) no-repeat center center / cover`,
        }}
      >
        <div className="container">
          <div className="row my-24">
            <div className="col-12">
              <h2 className="lg:text-6xl text-3xl font-bold text-center text-white">
                {project.title}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-20">
        <div className="row">
          <div className="md:col-4">
            <p className="text-gray-400">Client</p>
            <h1 className="mt-5 ml-2 md:text-3xl text-xl font-semibold">{project.title}</h1>
            <p className="mt-8 text-gray-400">Sector</p>
            <h1 className="mt-5 ml-2 md:text-3xl text-xl font-semibold">{project.sector}</h1>
            <p className="mt-8 text-gray-400">Location</p>
            <h1 className="mt-5 ml-2 md:text-3xl text-xl font-semibold">{project.location}</h1>
          </div>
          <div className="md:col-8 mt-8">
            <h1 className="md:text-3xl text-xl font-bold">About Project</h1>
            <p className="mt-5 text-xl">{project.description}</p>
          </div>
        </div>
        <div className="row justify-center mt-10">
          <div className="col-10">
            <div className="row">
              <div className="md:col-6">
                {project.image4 === '' ? (
                  <Image
                    src={project.image4}
                    width={446}
                    height={594}
                    className="w-full hidden h-auto"
                    alt={project.alt4}
                  />
                ) : (
                  <Image
                    src={project.image4}
                    width={446}
                    height={594}
                    className="w-full h-auto"
                    alt={project.alt4}
                  />
                )}
                <Image
                  src={project.image1}
                  width={446}
                  height={594}
                  className="w-full h-auto mt-8"
                  alt={project.alt1}
                />
                <Image
                  src={project.image2}
                  width={446}
                  height={594}
                  className="w-full h-auto mt-8"
                  alt={project.alt2}
                />
                {project.image7 === '' ? (
                  <Image
                    src={project.image7}
                    width={446}
                    height={594}
                    className="w-full mt-8 hidden h-auto"
                    alt={project.alt7}
                  />
                ) : (
                  <Image
                    src={project.image7}
                    width={446}
                    height={594}
                    className="w-full mt-8 h-auto"
                    alt={project.alt7}
                  />
                )}
                {project.image9 === '' ? (
                  <Image
                    src={project.image9}
                    width={446}
                    height={594}
                    className="w-full mt-8 hidden h-auto"
                    alt={project.alt9}
                  />
                ) : (
                  <Image
                    src={project.image9}
                    width={446}
                    height={594}
                    className="w-full mt-8 h-auto"
                    alt={project.alt9}
                  />
                )}
                {project.image10 === '' ? (
                  <Image
                    src={project.image10}
                    width={446}
                    height={594}
                    className="w-full mt-8 hidden h-auto"
                    alt={project.alt10}
                  />
                ) : (
                  <Image
                    src={project.image10}
                    width={446}
                    height={594}
                    className="w-full mt-8 h-auto"
                    alt={project.alt10}
                  />
                )}
              </div>
              <div className="md:col-6 mt-10">
                <Image
                  src={project.image3}
                  width={446}
                  height={594}
                  className="w-full mt-8 h-auto"
                  alt={project.alt3}
                />
                {project.image5 === '' ? (
                  <Image
                    src={project.image4}
                    width={446}
                    height={594}
                    className="w-full mt-8 hidden h-auto"
                    alt={project.alt5}
                  />
                ) : (
                  <Image
                    src={project.image5}
                    width={446}
                    height={594}
                    className="w-full mt-8 h-auto"
                    alt={project.alt5}
                  />
                )}
                {project.image6 === '' ? (
                  <Image
                    src={project.image6}
                    width={446}
                    height={594}
                    className="w-full mt-8 hidden h-auto"
                    alt={project.alt6}
                  />
                ) : (
                  <Image
                    src={project.image6}
                    width={446}
                    height={594}
                    className="w-full mt-8 h-auto"
                    alt={project.alt6}
                  />
                )}
                {project.image8 === '' ? (
                  <Image
                    src={project.image8}
                    width={446}
                    height={594}
                    className="w-full mt-8 hidden h-auto"
                    alt={project.alt8}
                  />
                ) : (
                  <Image
                    src={project.image8}
                    width={446}
                    height={594}
                    className="w-full mt-8 h-auto"
                    alt={project.alt8}
                  />
                )}
                {project.image11 === '' ? (
                  <Image
                    src={project.image11}
                    width={446}
                    height={594}
                    className="w-full mt-8 hidden h-auto"
                    alt={project.alt11}
                  />
                ) : (
                  <Image
                    src={project.image11}
                    width={446}
                    height={594}
                    className="w-full mt-8 h-auto"
                    alt={project.alt11}
                  />
                )}
                {project.image12 === '' ? (
                  <Image
                    src={project.image12}
                    width={446}
                    height={594}
                    className="w-full mt-8 hidden h-auto"
                    alt={project.alt12}
                  />
                ) : (
                  <Image
                    src={project.image12}
                    width={446}
                    height={594}
                    className="w-full mt-8 h-auto"
                    alt={project.alt12}
                  />
                )}
                {project.vid == '' ? (
                  <Video className="w-full mt-8 hidden h-auto" src={project.vid} muted />
                ) : (
                  <Video className="w-full mt-8 h-auto" src={project.vid} muted />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  )
}

export async function getStaticPaths() {
  const projects = getCollection('projects', true)

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  let items = getCollection('projects', true)

  let data = items.find((item) => item.slug === slug)

  return {
    props: {
      project: data,
    },
  }
}
