export default function SiteFooter() {
  return (
    <footer className="bg-[#0f2811]">
      {/* Hero band — product image + big title */}
      <div className="grid min-h-80 md:grid-cols-2">
        <div
          className="relative min-h-64 bg-cover bg-center md:min-h-0"
          style={{ backgroundImage: "url('/imgs/product_png.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundColor: '#1a3a1e' }}
        />
        <div className="flex items-center bg-[#1a3a1e] px-8 py-12 sm:px-12 lg:px-16">
          <h2 className="display-face text-7xl leading-none text-white sm:text-8xl lg:text-9xl">
            NUTRI-WIN
          </h2>
        </div>
      </div>

      <div className="border-t border-white/8" />

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4 lg:gap-8">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <p className="display-face text-2xl text-white">NUTRI-WIN</p>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Indigenous foods, research, and community impact across West Africa - nourishing families for over 22 years.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Instagram" className="text-white transition hover:text-white">
                <svg className="h-5 w-5 fill-white text-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.205 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" /></svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-white transition hover:text-white">
                <svg className="h-5 w-5 fill-white text-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" aria-label="X / Twitter" className="text-white transition hover:text-white">
                <svg className="h-5 w-5 fill-white text-white" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-3.44 9.86 9.86 0 01-2.836.776 4.958 4.958 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white transition hover:text-white">
                <svg className="h-5 w-5 fill-white text-white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.437-.103.25-.129.599-.129.948v5.42h-3.554s.047-8.733 0-9.646h3.554v1.364c.429-.662 1.196-1.604 2.906-1.604 2.121 0 3.71 1.388 3.71 4.37v5.516zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.959.768-1.718 1.959-1.718 1.14 0 1.914.759 1.942 1.718 0 .953-.802 1.715-1.986 1.715zm1.581 11.597H3.715V9.505h3.203v10.947zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="display-face text-xs tracking-[0.2em] text-[#7fbc83]">NAVIGATE</p>
            <ul className="mt-5 space-y-3" style={{ color: '#ffffff' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'Our Mission', href: '/our-mission' },
                { label: 'Our Farmers', href: '/our-farmers' },
                { label: 'Our Founder', href: '/founder' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition hover:text-white" style={{ color: '#ffffff' }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="display-face text-xs tracking-[0.2em] text-[#7fbc83]">COMPANY</p>
            <ul className="mt-5 space-y-3" style={{ color: '#ffffff' }}>
              {[
                { label: 'About Us', href: '#' },
                { label: 'Research & Impact', href: '#' },
                { label: 'SDG Commitments', href: '#' },
                { label: 'Press & Media', href: '#' },
                { label: 'Contact Us', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition hover:text-white" style={{ color: '#ffffff' }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="display-face text-xs tracking-[0.2em] text-[#7fbc83]">JOIN THE MISSION</p>
            <p className="mt-5 text-sm leading-6 text-white/80">Get updates on our impact, new recipes, and community stories.</p>
            <form className="mt-5" action="#" method="post">
              <div className="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="min-w-0 flex-1 rounded-sm border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none focus:border-[#7fbc83] focus:ring-0"
                />
                <button
                  type="submit"
                  className="display-face rounded-sm bg-[#7fbc83] px-5 py-2.5 text-xs tracking-widest text-[#0f2811] transition hover:bg-[#6aad72]"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>
            <p className="mt-6 text-sm text-white/80">
              Want to partner with us?{' '}
              <a href="#" className="text-[#7fbc83] underline underline-offset-2 transition hover:text-white">
                Get in touch
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-white/60 sm:flex-row lg:px-8">
          <p>© 2025 Nutri-Win. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Terms of Use</a>
            <a href="#" className="transition hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
