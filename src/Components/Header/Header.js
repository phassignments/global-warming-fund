import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="header-area">
          <h1 className="title">GLOBAL WARMING FUND</h1>
          <p className="discription">
            To Support The Efforts Of Developing Countries In Responding To The
            Challenge Of Climate Change.
          </p>
          <h3>
            {" "}
            Total Budget : <span className="budget-amount">
              10 Million
            </span>{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
