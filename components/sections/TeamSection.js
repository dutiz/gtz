import TeamCart from '../TeamCart'

export default function TeamSection() {
  return (
    <div className="container py-24">
      <div className="row">
        <div className="col-12">
          <h2 className="uppercase font-semibold text-4xl">Our team</h2>
        </div>
      </div>
      <div className="row mt-12">
        <TeamCart avatar="avatar.png" position="Founder & CEO">
          H. Zaimi
        </TeamCart>
        <TeamCart avatar="woman-avatar.jpg" position="CEO">
          F. Zaimi
        </TeamCart>
        <TeamCart avatar="avatar.png" position="IT Support">
          D. Zaimi
        </TeamCart>
        <TeamCart avatar="avatar.png" position="Product Manager">
          Z. Xhaferi
        </TeamCart>
        <TeamCart avatar="avatar.png" position="Accountant">
          Z. Manevski
        </TeamCart>
      </div>
    </div>
  )
}
