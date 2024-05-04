import React from 'react'
// import "../home/home.css";
import "../../home/home.css"
import Form from "react-bootstrap/Form";
// import logo from "../../images/logo.jpeg"
import logo from "../../../images/logo.jpeg"

function Header() {
    const headerDetails = [
        "Drugs",
        "Calculators",
        "Articles",
        "News",
        "Quizzes",
        "Surveys",
        "Webinars",
        "Guidelines",
      ];
  return (
    <div>
       <div className="header-section">
        <div className="headSec-1">
          <div><img src={logo} alt=""  className="logo" /></div>
          <div className="headSec-1-mid">
            {headerDetails.map((x, i) => (
              <div key={i}>
                {" "}
                {x} {headerDetails.length - 1 === i ? "" : "|"}{" "}
              </div>
            ))}
          </div>
          <div className="headSec-1-end">
            <div><i className="bi bi-list"></i></div>
            <div>
              <div className="trophy">
              <i className="bi bi-trophy"></i>
              <span>257</span>
              </div>
              </div>
            <div><i className="bi bi-1-circle"></i></div>
          </div>
        </div>
        <div className="headSec-2 primary-bg-color">
          <h3>Your One-stop Solution for <span className="primary-color">MEDICAL LEARNING & UPDATES</span></h3>
        </div>
        <div className="headSec-3 secondary-bg-color">
          <h3 className='text-center '>Get knowledge of the <span  className="primary-color">APPROVED DRUGS</span></h3>
          <Form className="d-flex head-search">
            <Form.Control
              type="search"
              placeholder="Enter drug type"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Header
