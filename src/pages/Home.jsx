import React from "react";
import HomeSwiper from "../components/HomeSwiper";
import ClientSwiper from "../components/ClientSwiper";
import BrandSwiper from "../components/BrandSwiper";
import manpic from "../assets/imgs/man-pic.png";
import womanpic from "../assets/imgs/woman-pic.png";
import "./style/pages.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigateTo = useNavigate();

  let goToProducts = () => {
    navigateTo("/products");
  };
  return (
    <div>
      <HomeSwiper />
      <div className="mt-5 mb-5 p-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="d-flex justify-content-around">
                <div className="support-icon">
                  <img
                    src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png"
                    alt=""
                  />
                </div>
                <div className="support-content">
                  <h5>Free Shipping</h5>
                  <p>Free shipping on all order</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="d-flex justify-content-around">
                <div className="support-icon">
                  <img
                    src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png"
                    alt=""
                  />
                </div>
                <div className="support-content">
                  <h5>Support 24/7</h5>
                  <p>Free shipping on all order</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="d-flex justify-content-around">
                <div className="support-icon">
                  <img
                    src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png"
                    alt=""
                  />
                </div>
                <div className="support-content">
                  <h5>Money Return</h5>
                  <p>Free shipping on all order</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="d-flex justify-content-around">
                <div className="support-icon">
                  <img
                    src="https://flone.jamstacktemplates.dev/assets/img/icon-img/support-4.png"
                    alt=""
                  />
                </div>
                <div className="support-content">
                  <h5>Order Discount</h5>
                  <p>Free shipping on all order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 gx-2 gy-2">
            <div onClick={goToProducts} className="position-relative cr">
              <img
                className="rounded banner-imgs"
                src={manpic}
              alt="offfer"
              />
              <div className="position-absolute cat">
                <p className="banner-txt">Don’t Miss Today’s Featured Deals</p>
                <h3>Need It Now</h3>
              </div>
            </div>
          </div>

          <div className="col-md-6 gx-2 gy-2">
            <div onClick={goToProducts} className="position-relative cr">
              <img
                className="rounded banner-imgs"
                src={womanpic}
                alt="50%"
              />
              <div className="position-absolute cat">
                <p className="banner-txt2">New Personalizable Collection</p>
                <h3>50% OFF</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5 mt-5 text-center p-5">
        <h1 className="color-primary">Our Happy Clients</h1>
        <div className="mt-5">
          <ClientSwiper />
        </div>
      </div>

      <div className=" mt-5 text-center p-5 bg-light">
        <h1 className="color-primary">Top Brands</h1>
        <div className="mt-5">
          <BrandSwiper />
        </div>
      </div>
    </div>
  );
}
