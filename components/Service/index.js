import React from "react";

const Service = (props) => {
  return (
    <div className="service-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="service-item">
              <div className="service-icon">
                <span>
                  <img
                    draggable="false"
                    src="https://raw.githubusercontent.com/RedaBourhdadi/honey-shop/refs/heads/main/public/Images/support/1.png"
                    alt=""
                  />
                </span>
              </div>
              <div className="service-icon-text">
                <h2>Free Shipping</h2>
                <span>Order Over $560</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="service-item">
              <div className="service-icon">
                <span>
                  <img
                    draggable="false"
                    src="https://raw.githubusercontent.com/RedaBourhdadi/honey-shop/refs/heads/main/public/Images/support/2.png"
                    alt=""
                  />
                </span>
              </div>
              <div className="service-icon-text">
                <h2>Easy Payment</h2>
                <span>100% Secure Payment</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="service-item">
              <div className="service-icon">
                <span>
                  <img
                    draggable="false"
                    src="https://raw.githubusercontent.com/RedaBourhdadi/honey-shop/refs/heads/main/public/Images/support/3.png"
                    alt=""
                  />
                </span>
              </div>
              <div className="service-icon-text">
                <h2>20/07 Support</h2>
                <span>Any time Support </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
