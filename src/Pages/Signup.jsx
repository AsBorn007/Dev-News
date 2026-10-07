import { Link } from "react-router-dom"
import Wrapper from "../Components/Common/Wrapper"
import Logo from "../Components/Logo"
import { bannerImage } from "../Data/StaticData"

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#e37af9] focus:bg-white focus:ring-4 focus:ring-[#e37af9]/20"

const Register = () => {
  return (
    <div
      className="relative min-h-screen bg-slate-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-[#e37af9]/30" />

      <Wrapper>
        <main className="relative flex min-h-screen items-center justify-center px-4 py-10">
          <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/40 md:grid-cols-5">
            {/* Left brand panel */}
            <div className="relative flex flex-col justify-between gap-10 overflow-hidden bg-slate-950 p-8 text-white max-md:order-2 md:col-span-2 md:p-10">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#e37af9]/30 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />

              <div className="relative">
                <Logo />
              </div>

              <div className="relative space-y-8">
                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <svg className="h-5 w-5 text-[#e37af9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M19 8v6M22 11h-6" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-base font-semibold">Create your account</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                      Welcome! Get started by creating your account in a few seconds.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <svg className="h-5 w-5 text-[#e37af9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-base font-semibold">Simple &amp; secure</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                      Our registration is straightforward and secure. Your privacy and data come first.
                    </p>
                  </div>
                </div>
              </div>

              <p className="relative text-xs text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
            </div>

            {/* Form */}
            <div className="w-full p-8 max-md:order-1 md:col-span-3 md:p-12">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">Create an account</h1>
              <p className="mt-1 text-sm text-slate-500">Fill in your details to get started.</p>

              <form className="mt-8 space-y-5">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" id="email" name="email" placeholder="name@company.com" required className={inputCls} />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
                    <input type="password" id="password" name="password" placeholder="••••••••" required className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="mb-1.5 block text-sm font-medium text-slate-700">Confirm password</label>
                    <input type="password" id="confirm-password" name="confirm-password" placeholder="••••••••" required className={inputCls} />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                  <label className="group flex cursor-pointer items-center">
                    <input id="tmc" name="tmc" type="checkbox" required className="sr-only" />
                    {/* Custom box */}
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-slate-300 bg-white transition group-has-[input:checked]:border-[#e37af9] group-has-[input:checked]:bg-[#e37af9] group-focus-within:ring-4 group-focus-within:ring-[#e37af9]/20"
                      aria-hidden="true"
                    >
                      {/* Checkmark */}
                      <svg className="h-3 w-3 text-white opacity-0 group-has-[input:checked]:opacity-100" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 5l3 3 7-7" />
                      </svg>
                    </span>
                    <span className="ml-2.5 text-sm text-slate-600">I accept the</span>
                  </label>
                  <a href="#" className="rounded text-sm font-semibold text-[#c653e0] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e37af9]">
                    Terms and Conditions
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#e37af9] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e37af9]/30 transition hover:bg-[#d65cf2] focus:outline-none focus:ring-4 focus:ring-[#e37af9]/30"
                >
                  Create an account
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link to="/login" className="rounded font-semibold text-[#c653e0] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e37af9]">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </main>
      </Wrapper>
    </div>
  )
}

export default Register