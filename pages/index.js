import AboutSection from '@/components/sections/AboutSection'
import HeaderSection from '@/components/sections/HeaderSection'
import ProductSection from '@/components/sections/ProductSection'
import ProjectSection from '@/components/sections/ProjectSection'
import QuotationSection from '@/components/sections/QuotationSection'
import ServiceSection from '@/components/sections/ServiceSection'
import TeamSection from '@/components/sections/TeamSection'
import Layout from '@/layout/Layout'

import { getCollection } from '../content/useContent'

export default function Home({ projects }) {
  return (
    <Layout title="Home">
      {/* Header Section */}
      <HeaderSection />
      {/* Service Section */}
      <ServiceSection />
      {/* About Section */}
      <AboutSection />
      {/* Product Section */}
      <ProductSection />
      {/* Project Section */}
      <ProjectSection projects={projects} />
      {/* Team Section */}
      <TeamSection />
      {/* Quotation Section */}
      <QuotationSection />
    </Layout>
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
