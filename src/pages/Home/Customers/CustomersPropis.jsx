import React from "react";
import customersImg from "../../../assets/images/customers.svg";

export const CustomersPropis = (item) => {
  return (
    <div>
      <div className="customers_block">
        <div className="block_left_right">
          <div className="block_left">
            <div className="block_profil">
              <div className="block_left_logo"></div>
              <h2 className="block_left_text">{item.name}</h2>
            </div>
            <p className="block_text">{item.text}</p>
          </div>
          <div className="block_right">
            <img src={customersImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
