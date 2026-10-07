import currentData from "../Api/footerContectSection.json"
import Wrapper from "./Common/Wrapper"
import { Mail , Phone , MapPin  } from 'lucide-react';
const FooterContect = () => {
    const lucidIcons =  {
       Email:  <Mail/>,
       Contect:  <Phone/>,
       Location : <MapPin />
    }

  return (
    <div className="relative overflow-hidden border-t border-[#1f2a48] bg-[#0a0f1f] py-12">
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-[30rem] -translate-x-1/2 rounded-full bg-[#8b5cf6]/15 blur-3xl" />
        <Wrapper>
       <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
       {currentData.map((currItem, i )=>{
         const {title,icon,details} =  currItem
        return(
            <>
            <div key={i} className="group flex flex-row gap-5 items-start rounded-2xl border border-[#1f2a48] bg-[#0f1629] p-4 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1.5 hover:border-[#e37af9]/60 hover:shadow-2xl hover:shadow-[#e37af9]/20">
            <div><span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#e37af9] text-xl text-white shadow-lg shadow-[#8b5cf6]/30 transition group-hover:scale-110">{lucidIcons[icon]}</span></div>
            <div>
            <h4 className="mb-2 text-lg font-bold tracking-tight text-white transition group-hover:text-[#e37af9]">{title}</h4>
            <p className="text-sm leading-relaxed text-slate-400">{details}</p></div>
            </div>
            </>
        )
       })}
       </div>
       </Wrapper>
    </div>
  )
}

export default FooterContect