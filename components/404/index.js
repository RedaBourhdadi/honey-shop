import React from "react";
import Link from "next/link";

const Error = (props) => {
  return (
    <section className="error-404-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="content clearfix">
              <div className="error">
                <img
                  src="https://raw.githubusercontent.com/RedaBourhdadi/honey-shop/refs/heads/main/public/Images/error-404.png"
                  alt=""
                />
              </div>
              <div className="error-message">
                <h3>Oops! Page Not Found!</h3>
                <p>
                  We’re sorry but we can’t seem to find the page you requested.
                  This might be because you have typed the web address
                  incorrectly.
                </p>
                <Link href="/home" className="theme-btn">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
