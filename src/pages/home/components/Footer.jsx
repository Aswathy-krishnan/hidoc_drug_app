import React from "react";
import logo from "../../../images/logo.jpeg";
import FooterCards from "./FooterCards";

function Footer() {
  const socialMedia = [
    "bi-facebook",
    "bi-instagram",
    "bi-youtube",
    "bi-linkedin",
  ];
  const year = new Date();
  const footerCard = [
    {
      title: "Drug Database",
      icon: "bi-file-earmark",
      color: "pink",
    },
    {
      title: "Webinars",
      icon: "bi-camera-reels",
      color: "orange",
    },
    {
      title: "Drug Intractions",
      icon: "bi-file-earmark-text",
      color: "brown",
    },
    {
      title: "Medical Calculators",
      icon: "bi-calculator",
      color: "yellow",
    },
    {
      title: "Articles",
      icon: "bi-file-earmark-text",
      color: "green",
    },
    {
      title: "Quizes",
      icon: "bi-trophy",
      color: "red",
    },
    {
      title: "Diseases Databases",
      icon: "bi-file-earmark-text",
      color: "yellow",
    },
    {
      title: "Surveys",
      icon: "bi-bag",
      color: "blue",
    },
  ];
  return (
    <div>
      <div className="footer-main-section px-5 footer-bg-color white-t-color">
        <div className="footer-sec-1">
          <div>
            <img src={logo} alt="" className="footer-image" />
          </div>
          <div>Fast growing platform for doctors</div>
          <div className="social-media ">
            {socialMedia.map((x,i) => (
              // `bi ${x}`
              <i key={i} className={`bi ${x}`}></i>
            ))}
            {/* <i className={`bi ${socialMedia}`}></i> */}
          </div>
        </div>
        <div className="footer-sec-2 py-5 px-5">
          <h5>REACH US</h5>
          <p className="f-14">
            Please contact the below details for any other information.
          </p>
          <p className="m-0 p-0">
            <span className="primary-color ">Email:</span>
          </p>
          <p className="mt-n1">info@hidoc.co</p>
          <p className="m-0 p-0">
            <span className="primary-color ">Address:</span>
          </p>
          <p className="m-0 p-0">Hidoc Dr.Inc,2055 Limestone Rd,STE 200-C,</p>
          <p className="mt-n1">Wilmington ,DE,19808,United States.</p>
        </div>

        <div className="footer-sec-3 py-5 px-5">
          <h4>HIDOC DR FEATURES</h4>
          <div className="footer-card-main-section">
            {footerCard.map((card, i) => (
              <FooterCards details={card} key={i} />
            ))}
          </div>
        </div>

        {/* </div> */}

        {/* </div> */}
      </div>
      <div className="text-center copy-bg-color py-3">
        <p className="m-0 ">
          &copy; Copyright {year.getFullYear()} <span className="f-w-7 ">Hidoc Dr. Inc</span>
        </p>
        <p className="m-0">Terms & Conditions | Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
