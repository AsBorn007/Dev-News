import { Link } from "react-router-dom"
import HocCard from "./Common/HocCard"

const NewsCard = ({itemDetails}) => {
  return (
    <>
  <Link to={itemDetails?.url} target="_blank" className="group relative block max-w-sm overflow-hidden rounded-2xl border border-[#1f2a48] bg-[#0f1629] p-3 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1.5 hover:border-[#e37af9]/60 hover:shadow-2xl hover:shadow-[#e37af9]/20">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#151d36] ring-1 ring-white/5">
          <img className="h-full w-full object-cover transition duration-500 group-hover:scale-110" src={itemDetails?.image} alt={itemDetails?.title} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1629]/70 via-transparent to-transparent" />
      </div>
      <div className="px-2">
          <h5 className="mt-5 mb-2 line-clamp-2 text-lg font-bold leading-snug tracking-tight text-white transition group-hover:text-[#e37af9]">{itemDetails?.title}</h5>
      </div>
      <p className="mb-5 line-clamp-3 px-2 text-sm leading-relaxed text-slate-400">{itemDetails?.content}</p>
      <Link to="/" className="mx-2 mb-2 inline-flex items-center rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#e37af9] px-5 py-2.5 text-sm font-semibold leading-5 text-white shadow-lg shadow-[#8b5cf6]/30 transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-[#e37af9]/30">
          Read more
          <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5 transition group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
      </Link>
  </Link>


  
    </>
  )
}
const CardWraper =  HocCard(NewsCard)
export default CardWraper