import React, { Fragment, useState } from "react";
import { Dialog, Grid, Button } from "@mui/material";
import Link from "next/link";

const DefaultModal = ({
  maxWidth,
  open,
  onClose,
  addToCartProduct,
  product,
}) => {
  const [qty, setQty] = useState(1);

  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <Grid className="modalBody modal-body">
          <div className="modal-close-btn">
            <button onClick={onClose}>
              <i className="fa fa-close"></i>
            </button>
          </div>
          <div className="product-details">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="product-single-img">
                  <div className="modal-product">
                    <div className="item">
                      <img src={product && product.proImg} alt="proImg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="product-single-content">
                  <h5>{product && product.title}</h5>
                  <h6>{product && product.price} USD</h6>
                  <ul className="rating">
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc quis ultrices lectus lobortis, dolor et tempus porta,
                    leo mi efficitur ante, in varius felis sem ut mauris. Proin
                    volutpat lorem inorci sed vestibulum tempus. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Aliquam
                    hendrerit.
                  </p>
                  <div className="product-filter-item color">
                    <div className="color-name">
                      <span>Color :</span>
                      <ul>
                        <li className="color1">
                          <input id="1" type="radio" name="color" value="30" />
                          <label htmlFor="1"></label>
                        </li>
                        <li className="color2">
                          <input id="2" type="radio" name="color" value="30" />
                          <label htmlFor="2"></label>
                        </li>
                        <li className="color3">
                          <input id="3" type="radio" name="color" value="30" />
                          <label htmlFor="3"></label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-filter-item color filter-size">
                    <div className="color-name">
                      <span>Weight :</span>
                      <ul>
                        <li className="color">
                          <input id="w1" type="radio" name="size" value="30" />
                          <label htmlFor="w1">4L</label>
                        </li>
                        <li className="color">
                          <input id="w2" type="radio" name="size" value="30" />
                          <label htmlFor="w2">2L</label>
                        </li>
                        <li className="color">
                          <input id="w3" type="radio" name="size" value="30" />
                          <label htmlFor="w3">500ML</label>
                        </li>
                        <li className="color">
                          <input id="w4" type="radio" name="size" value="30" />
                          <label htmlFor="w4">200ML</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pro-single-btn">
                    <Grid className="quantity cart-plus-minus">
                      <Button
                        className="dec qtybutton"
                        onClick={() => setQty(qty <= 1 ? 1 : qty - 1)}
                      >
                        -
                      </Button>
                      <input
                        value={qty}
                        onChange={() => setQty(qty)}
                        type="text"
                      />
                      <Button
                        className="inc qtybutton"
                        onClick={() => setQty(qty + 1)}
                      >
                        +
                      </Button>
                    </Grid>
                    <Button
                      onClick={() => addToCartProduct(product, qty)}
                      className="theme-btn"
                    >
                      Add to cart
                    </Button>
                  </div>
                  <div className="social-share">
                    <span>Share with : </span>
                    <ul className="socialLinks">
                      <li>
                        <Link href="/">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="fa fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <i className="fa fa-youtube-play"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="m-shape">
                    <img
                      src="https://raw.githubusercontent.com/RedaBourhdadi/honey-shop/refs/heads/main/public/Images/bee2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default DefaultModal;
