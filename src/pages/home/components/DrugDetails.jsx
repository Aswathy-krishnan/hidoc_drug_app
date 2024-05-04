import axios from "axios";
import React, { useEffect, useState } from "react";

function DrugDetails({ drugData }) {
  const departmentDetails = [
    "Anasthesia",
    "Cardiology",
    "Critical Care",
    "Dentistry",
    "Dermatology",
    "Diabetology",
  ];
  const [selectedDrugId, setSelectedDrugId] = useState(0);
  const [selectedDrugDetails, setSelectedDrugDetails] = useState({});
  const [departmentIndex, setDepartmentIndex] = useState(0);
  useEffect(() => {
    if (!drugData.length) {
      return;
    }
    let id = drugData[0]?.id || 0;
    if (id) {
      setSelectedDrugId(id);
    }
  }, [drugData]);
  useEffect(() => {
    if (selectedDrugId) {
      getSelectedIdDetails();
    }
  }, [selectedDrugId]);
  const getSelectedIdDetails = () => {
    let selectedDetails = drugData.find((x) => x.id === selectedDrugId);
    setSelectedDrugDetails(selectedDetails);
  };
  const showDrugDetails = (id) => {
    setSelectedDrugId(id);
  };
  return (
    <div>
      <div className="drug-section">
        <div className="drug-sec-1">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum illo
            adipisci unde expedita, ducimus saepe! Aperiam laudantium, velit,
            mollitia quis laborum maiores provident doloremque neque placeat,
            fugit esse iure officia.Lorem ipsum dolor sit amet consectetur,
          </p>
        </div>
        <div className="drug-sec-2">
          {departmentDetails.map((x, i) => (
            <div
              key={i}
              className={`${
                i === departmentIndex ? "primary-bg-color" : ""
              } department-card  `}
              onClick={() => setDepartmentIndex(i)}
            >
              <h6>{x}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="table-main-section">
        <div className="drug-table-section text-center">
          <div className="table-sec-1">
            <h4>DRUG DATA</h4>
          </div>
          <div className="table-sec-2">
            {drugData.map((drug) => (
              <h4
                key={drug.id}
                onClick={() => showDrugDetails(drug.id)}
                className={
                  drug.id === selectedDrugId
                    ? "c-pointer selected-bg-color mx-5"
                    : "c-pointer "
                }
              >
                {drug.drugName}
              </h4>
            ))}
          </div>
        </div>
        <div className="drug-table-section text-center">
          <div className="table-sec-1">
            <h4>DRUG DETAILS</h4>
          </div>
          <div className="table-sec-2">
            <h4 className="primary-color">{selectedDrugDetails.drugName}</h4>
            <p>{selectedDrugDetails.drugDetails}</p>
            {/* <h4>DRUG DATA</h4>
            <h4>DRUG DATA</h4>
            <h4>DRUG DATA</h4>
            <h4>DRUG DATA</h4> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrugDetails;
