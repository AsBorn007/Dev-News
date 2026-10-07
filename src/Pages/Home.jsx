import { Suspense, useState } from "react";
import Banner from "../Components/Banner";
import NewsData from "../Components/NewsData";
import { Loader } from "lucide-react";
import FooterContect from "../Components/FooterContect";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Suspense fallback={<Loader />}>
        <NewsData />
      </Suspense> */}
      <FooterContect/>
    </div>
  );
};

export default Home;
