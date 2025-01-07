import React, { useEffect, useState } from "react";
import pic1 from "../../assets/images/poert1.png";
import pic2 from "../../assets/images/port2.png";
import pic3 from "../../assets/images/port3.png";
import styles from "./Portfolio.module.css";
import StarLine from "../Starline/StarLine";

export default function Portfolio() {
  useEffect(()=>{
    document.title = 'Portfolio'
  },[])
  let locationS = window.location.pathname;
  return (
    <>
      <section className={`${styles.port} pt-5 mt-5`}>
        <div className="container pt-4">
          <div className=" d-flex flex-column justify-content-center align-items-center">
            <h2 className={`${styles.title}`}>PORTFOLIO COMPONENT</h2>
            <StarLine loc={locationS} />
          </div>
          <div className="row gy-4 mt-3 pb-4">
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.inner} position-relative`}>
                <img src={pic1} alt="" className=" img-fluid rounded-2" />
                <div
                  className={`${styles.layer} d-flex justify-content-center align-items-center`}
                >
                  <i className="fa-solid fa-plus fa-8x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.inner} position-relative`}>
                <img src={pic2} alt="" className=" img-fluid rounded-2" />
                <div
                  className={`${styles.layer} d-flex justify-content-center align-items-center`}
                >
                  <i className="fa-solid fa-plus fa-8x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.inner} position-relative`}>
                <img src={pic3} alt="" className=" img-fluid rounded-2" />
                <div
                  className={`${styles.layer} d-flex justify-content-center align-items-center`}
                >
                  <i className="fa-solid fa-plus fa-8x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.inner} position-relative`}>
                <img src={pic1} alt="" className=" img-fluid rounded-2" />
                <div
                  className={`${styles.layer} d-flex justify-content-center align-items-center`}
                >
                  <i className="fa-solid fa-plus fa-8x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.inner} position-relative`}>
                <img src={pic2} alt="" className=" img-fluid rounded-2" />
                <div
                  className={`${styles.layer} d-flex justify-content-center align-items-center`}
                >
                  <i className="fa-solid fa-plus fa-8x text-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${styles.inner} position-relative`}>
                <img src={pic3} alt="" className=" img-fluid rounded-2" />
                <div
                  className={`${styles.layer} d-flex justify-content-center align-items-center`}
                >
                  <i className="fa-solid fa-plus fa-8x text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
