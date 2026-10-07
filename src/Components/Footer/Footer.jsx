import { Link } from "react-router-dom"
import Logo from "../Logo.jsx"
import Wrapper from "../Common/Wrapper.jsx"

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-[#1f2a48] bg-[#0a0f1f] text-slate-400">
      {/* Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[#8b5cf6]/20 blur-3xl" />

      <Wrapper >
        <div className="grid gap-10 md:grid-cols-4 pt-10 pb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Latest updates on programming, web development and tech trends. Built for developers, by developers.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1f2a48] bg-[#0f1629] text-slate-300 transition hover:-translate-y-0.5 hover:border-[#e37af9]/60 hover:text-[#e37af9] hover:shadow-lg hover:shadow-[#e37af9]/20">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>
              </a>
              <a href="#" aria-label="X" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1f2a48] bg-[#0f1629] text-slate-300 transition hover:-translate-y-0.5 hover:border-[#e37af9]/60 hover:text-[#e37af9] hover:shadow-lg hover:shadow-[#e37af9]/20">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21.5l-7.12 8.14L22.75 22h-6.55l-5.13-6.71L5.2 22H1.94l7.62-8.71L1.5 2h6.72l4.64 6.13L18.244 2zm-1.15 18h1.8L7.0 3.9H5.07L17.094 20z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1f2a48] bg-[#0f1629] text-slate-300 transition hover:-translate-y-0.5 hover:border-[#e37af9]/60 hover:text-[#e37af9] hover:shadow-lg hover:shadow-[#e37af9]/20">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3V9.75zm6.5 0h3.83v1.57h.05c.53-1 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.13v5.87h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="transition hover:text-[#e37af9]">Home</Link></li>
              <li><Link to="/" className="transition hover:text-[#e37af9]">Newdetails</Link></li>
              <li><Link to="/" className="transition hover:text-[#e37af9]">Blog</Link></li>
              <li><Link to="/" className="transition hover:text-[#e37af9]">Category</Link></li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Topics</h4>
            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "JavaScript", "Node.js", "Python", "AI", "Cloud"].map((t) => (
                <span key={t} className="rounded-full border border-[#1f2a48] bg-[#0f1629] px-3 py-1 text-xs font-medium text-slate-300 transition hover:border-[#e37af9]/60 hover:text-[#e37af9]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#1f2a48] pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} DevNews. All rights reserved.</p>
          <p>Made with <span className="text-[#e37af9]">♥</span> for developers</p>
        </div>
      </Wrapper>
    </footer>
  )
}

export default Footer