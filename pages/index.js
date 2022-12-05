import AboutSection from '@/components/sections/AboutSection'
import HeaderSection from '@/components/sections/HeaderSection'
import ProductSection from '@/components/sections/ProductSection'
import QuotationSection from '@/components/sections/QuotationSection'
import ServiceSection from '@/components/sections/ServiceSection'
import TeamSection from '@/components/sections/TeamSection'
import Layout from '@/layout/Layout'

export default function Home() {
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
      {/* Team Section */}
      <TeamSection />
      {/* Quotation Section */}
      <QuotationSection />
    </Layout>
  )
}
