import React from "react";

function FooterCards({ details }) {
  return (
    <div>
      <div className={` ${details.color} footer-sec-3 `}>
        {/* <div className=""> */}
        <div className="footer-cards">
          <div className="icon-div">
            <i className={`bi ${details.icon} footer-icons-image`}></i>
          </div>
          <p style={{ fontSize: "10px" }}>{details.title}</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default FooterCards;
