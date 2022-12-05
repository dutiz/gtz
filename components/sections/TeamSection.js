import TeamCart from '../TeamCart'

export default function TeamSection() {
  return (
    <div className="bg-gray-300">
      <div className="container py-24">
        <div className="row">
          <div className="col-12">
            <h2 className="uppercase font-semibold text-4xl">Our team</h2>
          </div>
        </div>
        <div className="row mt-12">
          <TeamCart avatar="team-1.png" position="Founder & CEO">
            Mildred Reed
          </TeamCart>
          <TeamCart avatar="team-1.png" position="Founder & CEO">
            Mildred Reed
          </TeamCart>
          <TeamCart avatar="team-1.png" position="Founder & CEO">
            Mildred Reed
          </TeamCart>
          <TeamCart avatar="team-1.png" position="Founder & CEO">
            Mildred Reed
          </TeamCart>
        </div>
      </div>
    </div>
  )
}
