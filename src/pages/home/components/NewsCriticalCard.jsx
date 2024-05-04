import React from "react";

function NewsCriticalCard({ noDiscription }) {
  return (
    <div className="news-critical">
      <p className="primary-text-color f-14 o-7">CRITICAL CARE 10 Mar 2023</p>
      <h4 className="f-w-6">
        Discovering Arthrogyposis:Understanding the Causes,Symptoms and Diagonis
      </h4>
      {noDiscription && (
        <p className="o-7">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          fugiat, excepturi ut atque hic consequatur distinctio ratione
          voluptatum, labore porro ducimus sint ea sequi neque consequuntur,
          modi vero facere ad?
        </p>
      )}
    </div>
  );
}

export default NewsCriticalCard;
