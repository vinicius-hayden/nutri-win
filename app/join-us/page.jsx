import SiteNav from '../../src/components/SiteNav'

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-neutral-950">
      <div className="relative h-28 bg-[#f5f0e8]">
        <SiteNav theme="light" />
      </div>

      <main className="mx-auto w-full max-w-4xl px-4 pb-20 pt-10 md:px-6 lg:px-8">
        <section className="rounded-3xl border border-neutral-200 bg-[linear-gradient(145deg,#f9fbf9_0%,#f5f0e8_65%,#f2f7f2_100%)] p-8 sm:p-10 md:p-12">
          <p className="display-face text-xs tracking-[0.2em] text-[#4c8c51]">Join Us</p>
          <h1 className="display-face mt-4 text-4xl text-neutral-950 sm:text-5xl">Let&apos;s Work Together</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-700">
            For partnerships, distribution opportunities, media requests, or general inquiries, reach out by email and our team will respond as soon as possible.
          </p>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-[#f5f0e8] p-6 sm:p-7">
            <p className="text-sm uppercase tracking-[0.15em] text-neutral-500">Email Inquiry</p>
            <a
              href="mailto:inquiries@nutri-win.com"
              className="mt-3 inline-block text-2xl font-semibold text-neutral-900 underline decoration-[#4c8c51] underline-offset-4 transition hover:text-[#4c8c51]"
            >
              inquiries@nutri-win.com
            </a>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Include your name, organization, and a short message so we can route your inquiry quickly.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
