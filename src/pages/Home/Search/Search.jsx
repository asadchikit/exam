import React from "react";
import { TfiSearch } from "react-icons/tfi";

export const Search = ({ setInputVal }) => {
  const inputHandle = (evt) => {
    if (evt.key === "Enter") {
      setInputVal(evt.target.value);
    }
  };

  return (
    <section className="search">
      <div className="container">
        <center>
          <input className="search_input" type="text"  placeholder="Search for products"onKeyUp={inputHandle} />
          <button className="search_btn">
            <TfiSearch className="tfiSearch" />
          </button>
        </center>
      </div>
    </section>
  );
};
