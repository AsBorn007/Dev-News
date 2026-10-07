import Wrapper from "./Common/Wrapper";
import { BannerData, bannerImage, buttonTags } from "../Data/StaticData.js";
import SearchBar from "./Search.jsx";
const Banner = () => {
  const { h1_title, h1_title_span,banner_paragraph } = BannerData;
  return (
    <div>
      <div
        className="h-[650px] bg-blue-500 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="p-20 relative z-10">
          <Wrapper>
            <div className="w-2/3 mx-auto flex flex-col gap-3 justify-center items-center">
              <h1 className="text-7xl  text-white font-body   font-bold text-center">
                {h1_title} <span className="bg-gradient-to-r from-[#d37ffa] to-purple-600 bg-clip-text text-transparent">{h1_title_span}</span>
              </h1>
              <p className="text-xl text-white text-center line-clamp-2 ">{banner_paragraph}</p>
              <SearchBar />
              <div className="buttonTags ">
                <ul className="flex gap-2 ">
                  {buttonTags.map((btnTags, i) => (
                    <li
                      className="px-2.5 py-1 capitalize text-[12px] rounded-full bg-[#000] text-white  bg-gradient-to-r from-[#9338e1] to-[#73beef]"
                      key={i}
                    >
                      {btnTags}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
