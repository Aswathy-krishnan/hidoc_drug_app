import React, { useEffect, useState } from "react";
import NewsCriticalCard from "./NewsCriticalCard";

function Explore({ exploreMore }) {
  const { news = {} } = exploreMore;
  //   const [news, setNews] = useState({});
  //   useEffect(() => {
  //     console.log("use ex",exploreMore);
  //     if (exploreMore) {
  //       setNews(exploreMore.news);
  //     }
  //   }, [exploreMore]);
  return (
    <div>
      <div className="title-section">
        <div className="title-sec-1">
          <h4 className="text-right">Explore more on Hidoc Dr</h4>
          <div className="news-img-div">
            <img src={news.urlToImage} alt="" />
            <div>
              <p className="primary-text-color f-14 o-7">News</p>
              <h4 className="f-w-7">{news.title}</h4>
              <p className="o-7 f-11">{news.description}</p>
              <p className="o-7 f-11">Posted on {news.publishedAt}</p>
            </div>
          </div>
        </div>
        {/* <div className="title-sec-2">
          <div>
            <p className="primary-text-color f-14 o-7">CRITICAL CARE  10 Mar 2023</p>
            <h4 className="f-w-6">Discovering Arthrogyposis:Understanding  the Causes,Symptoms and Diagonis</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil fugiat, excepturi ut atque hic consequatur distinctio ratione voluptatum, labore porro ducimus sint ea sequi neque consequuntur, modi vero facere ad?</p>
          </div>
        </div> */}
        <div className="title-sec-2">
          <NewsCriticalCard  noDiscription={true} />
          <NewsCriticalCard />
          <NewsCriticalCard />
        
        </div>
      </div>
    </div>
  );
}

export default Explore;
