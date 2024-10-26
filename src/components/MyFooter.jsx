import React from "react";
import "./style/style.css";
import "./style/all.min.css";

export default function MyFooter() {
  return (
    <footer className="footer mt-auto bg-footer text-white p-5">
      <div className="container">
        <div className="row gy-4 gx-sm-4">
          <div className="col-sm-6 col-lg-5">
            <section>
              <h3 className="text-capitalize mb-4 fs-4">about me</h3>
              <p className="text-sm text-black-50-dark lh-lg">
                We have tested a number of registry fix and clean utilities and
                present our top 3 list on our site for your convenience.
              </p>
              <p className="text-sm text-black-50-dark lh-lg">
                Copyright ©2024 All rights reserved | made by
                <span className="text-red fs-6"> ♥ </span>
                <span className="color-primary "> Koot Magdy </span>
              </p>
            </section>
          </div>

          <div className="col-sm-6 col-lg-5">
            <section>
              <h3 className="text-capitalize mb-4 fs-4">news letter</h3>
              <p className="text-sm text-black-50-dark lh-lg">
                Stay updated with our latest trends
              </p>
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Email Address"
                  />
                  <button
                    type="submit"
                    className="input-group-text background-primary text-white border-0"
                    id="basic-addon2"
                  >
                    GO
                  </button>
                </div>
              </form>
            </section>
          </div>

          <div className="col-lg-2">
            <h3 className="text-capitalize mb-4 fs-4">follow me</h3>
            <p className="text-sm text-black-50-dark lh-lg">Let us be social</p>
            <section className="hstack gap-4 text-sm">
              <a href="#" className="transition-colors fs-5 text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="transition-colors fs-5 text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="transition-colors fs-5 text-white">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="transition-colors fs-5 text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}
