import { Link } from "react-router-dom"
import Wrapper from "../Components/Common/Wrapper"
import Logo from "../Components/Logo"
import { bannerImage } from "../Data/StaticData"

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#e37af9] focus:bg-white focus:ring-4 focus:ring-[#e37af9]/20"

const Login = () => {
  return (
    <div
      className="relative min-h-screen bg-slate-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-[#e37af9]/30" />

      <Wrapper>
        <section className="relative flex min-h-screen items-center justify-center px-4 py-10">
          <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/40 lg:grid-cols-2">
            <div className="relative hidden flex-col justify-between bg-slate-950 p-10 text-white lg:flex">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#e37af9]/30 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
              <div className="relative">
                <Logo />
              </div>
              <div className="relative space-y-4">
                <h2 className="text-3xl font-bold leading-tight">
                  Welcome back.
                  <br />
                  Pick up right where you left off.
                </h2>
                <p className="max-w-sm text-sm leading-relaxed text-slate-300">
                  Sign in to manage your account and access everything in one place.
                </p>
              </div>
              <p className="relative text-xs text-slate-400">© {new Date().getFullYear()} All rights reserved.</p>
            </div>

            <div className="p-8 sm:p-12">
              <div className="mb-8 lg:hidden">
                <Logo />
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900">Sign in to your account</h1>
              <p className="mt-1 text-sm text-slate-500">Enter your details to continue.</p>

              <form className="mt-8 space-y-5" action="#">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" name="email" id="email" className={inputCls} placeholder="name@company.com" required />
                </div>

                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
                    <a href="#" className="text-xs font-medium text-[#c653e0] hover:underline">Forgot password?</a>
                  </div>
                  <input type="password" name="password" id="password" className={inputCls} placeholder="••••••••" required />
                </div>

                <label htmlFor="remember" className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600">
                  <input id="remember" type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-[#e37af9]" />
                  Remember me
                </label>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#e37af9] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e37af9]/30 transition hover:bg-[#d65cf2] focus:outline-none focus:ring-4 focus:ring-[#e37af9]/30"
                >
                  Sign in
                </button>

                <p className="text-center text-sm text-slate-500">
                  Don’t have an account yet?{" "}
                  <Link to="/signup" className="font-semibold text-[#c653e0] hover:underline">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  )
}

export default Login