import React from "react";
import BrandSwiper from "../components/BrandSwiper";
import ClientSwiper from "../components/ClientSwiper";

export default function AboutUs() {
  return (
    <div>
      <div className="welcome-area pt-100 pb-95">
        <div className="container mt-5">
          <div className="text-center">
            <h5 className="text-warning">Who Are We!</h5>
            <h1 className="color-primary">Welcome To Koot Shop</h1>
            <div className="row text-center align-items-center justify-content-center">
              <div className="col-9">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt labor et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commo consequat irure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <div className="container mt-5 mb-5 p-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-3 col-md-6 text-center gy-4">
              <div className="">
                <i class="fa-solid fa-briefcase fs-1 color-primary"></i>
              </div>
              <h2 className="mt-2 fs-1 fw-bold text-warning">
                <span>360</span>
              </h2>
              <span className="fw-bold fs-4">Project Done</span>
            </div>
            <div className="col-lg-3 col-md-6 text-center gy-4">
              <div>
                <i class="fa-solid fa-trophy fs-1 color-primary"></i>
              </div>
              <h2 className="mt-2 fs-1 fw-bold text-warning">
                <span>690</span>
              </h2>
              <span className="fw-bold fs-4">Cups Of Coffee</span>
            </div>
            <div className="col-lg-3 col-md-6 text-center gy-4">
              <div>
                <i class="fa-solid fa-lightbulb fs-1 color-primary"></i>
              </div>
              <h2 className="mt-2 fs-1 fw-bold text-warning">
                <span>100</span>
              </h2>
              <span className="fw-bold fs-4">Branding</span>
            </div>
            <div className="col-lg-3 col-md-6 text-center gy-4">
              <div>
                <i class="fa-solid fa-face-smile fs-1 color-primary"></i>
              </div>
              <h2 className="mt-2 fs-1 fw-bold text-warning">
                <span>420</span>
              </h2>
              <span className="fw-bold fs-4">Happy Clients</span>
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

      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div>
              <h3 className="color-primary">Our Vision</h3>
              <p className="text-secondary">
                Koot Shop provide how all this mistaken idea of denounc
                pleasure and sing pain was born an will give you a ete account
                of the system, and expound the actual teangs the eat explorer of
                the truth.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div>
              <h3 className="color-primary">Our Mission</h3>
              <p className="text-secondary">
                Koot Shop provide how all this mistaken idea of denounc
                pleasure and sing pain was born an will give you a ete account
                of the system, and expound the actual teangs the eat explorer of
                the truth.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div>
              <h3 className="color-primary">Our Goal</h3>
              <p className="text-secondary">
                Koot Shop provide how all this mistaken idea of denounc
                pleasure and sing pain was born an will give you a ete account
                of the system, and expound the actual teangs the eat explorer of
                the truth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center p-5 bg-light">
        <h1 className="color-primary">Top Brands</h1>
        <div className="mt-5">
          <BrandSwiper />
        </div>
      </div>
    </div>
  );
}
