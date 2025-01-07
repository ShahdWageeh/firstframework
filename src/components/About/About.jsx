import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import StarLine from "../Starline/StarLine";
import styles from "./About.module.css";

export default function About() {
  useEffect(()=>{
    document.title='About'
  },[])
  let locationS = window.location.pathname;
  return (
    <>
      <section className={`${styles.About}`}>
        <div className="container py-5 mt-5 text-center d-flex flex-column justify-content-center align-items-center">
          <h1 className=" pt-5 mt-5 text-white fw-bold">ABOUT COMPONENT</h1>
          <StarLine loc={locationS} />
          <div className="row text-white text-start mt-5 pb-5">
            <div className="col-lg-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
