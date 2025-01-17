import React from "react";
import Link from "next/link";

const PageTitle = (props) => {
  return (
    <div className="tp-breadcumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-breadcumb-wrap">
              <h2>{props.pageTitle}</h2>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span>{props.pagesub}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape-img-1">
        <img
          src="https://raw.githubusercontent.com/RedaBourhdadi/honey-shop/refs/heads/main/public/Images/slider/img-2.png"
          alt=""
        />
      </div>
      <div className="hero-shape-img-2">
        <img
          src="https://raw.githubusercontent.com/RedaBourhdadi/honey-shop/refs/heads/main/public/Images/slider/img-3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default PageTitle;
