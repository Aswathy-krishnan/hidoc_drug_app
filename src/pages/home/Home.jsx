import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import DrugDetails from "./components/DrugDetails";
import Explore from "./components/Explore";
import axios from "axios";
import Footer from "./components/Footer";

function Home() {
  const [drugData, setDrugData] = useState([]);
  const [exploreMore, setExploreMore] = useState({});

  useEffect(() => {
    getHidocDetails();
  }, []);
  const getHidocDetails = () => {
    axios
      .post("https://hidocdr.com/api/hidoc-us/drug/getDrugList")
      .then((data) => {
        console.log("data 1 success", data.data.success);
        // console.log("data 1", data.data.data.drugData);
        if (data?.data?.success) {
          let drug = data.data?.data?.drugData || [];
          let explorMore = data.data?.data?.exploreMore || {};
          setDrugData(drug);
          setExploreMore(explorMore);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Header />
      <DrugDetails drugData={drugData} />
      <Explore exploreMore={exploreMore} />
      <Footer/>
    </div>
  );
}

export default Home;
