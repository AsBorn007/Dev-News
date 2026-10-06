import Wrapper from "./Common/Wrapper";
import { BannerData, bannerImage, buttonTags } from "../Data/StaticData.js";
import SearchBar from "./Search.jsx";
const Banner = () => {
  const { h1_title, h1_title_span } = BannerData;
  return (
    <div>
      <div
        className="h-[600px] bg-blue-500 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        {/* <img
          src={bannerImage}
          alt="Banner"
          className="h-full w-full object-cover aspect-square"
        />{" "} */}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="p-12 relative z-10">
          <Wrapper>
            <div className="w-2/3 mr-auto flex flex-col gap-3">
              <h1 className="text-7xl  text-white font-body font-medium">
                {h1_title} <span>{h1_title_span}</span>
              </h1>
              <p>{}</p>
              <SearchBar />
              <div className="buttonTags ">
                <ul className="flex gap-2 ">
                  {buttonTags.map((btnTags, i) => (
                    <li
                      className="px-2.5 py-1 capitalize text-[12px] rounded-full bg-[#000] text-white"
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
