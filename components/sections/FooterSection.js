export default function FooterSection() {
  return (
    <div
      style={{
        background: `url('./images/footer-bg.png') no-repeat center center / cover`,
      }}
    >
      <div className="container">
        <div className="row my-20">
          <div className="lg:col-4">
            <p className="mt-6 text-white">
              &copy; 2022 GTZ MK. Made with ❤️{' '}
              <a href="https://instagram.com/duti_z" target="_blank" rel="noreferrer">
                Daut Zaimi
              </a>
            </p>
          </div>
          <div className="lg:col-4">
            <h3 className="text-2xl text-white">Contact</h3>
            <p className="mt-9 text-gray-700">Gostivar , 1230 , North Macedonia</p>
            <p className="mt-5 text-gray-700">T. +389 70 848 843</p>
            <p className="mt-5 text-gray-700">E. gtz.macedonia@gmail.com</p>
          </div>
          <div className="lg:col-3 lg:offset-1 offset-0">
            <h3 className="text-2xl text-white">Follow Us</h3>
            <a
              href="https://www.facebook.com/profile.php?id=100083262351167"
              target="_blank"
              rel="noreferrer"
              className="mt-9 ml-8 text-gray-700"
            >
              Facebook
            </a>
            <p className="mt-5 ml-8 text-gray-700">Instagram</p>
            <p className="mt-5 ml-8 text-gray-700">Twitter</p>
          </div>
        </div>
      </div>
    </div>
  )
}
