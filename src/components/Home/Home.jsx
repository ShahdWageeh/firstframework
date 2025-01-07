import React, { useEffect } from "react";
import avatar from "../../assets/images/avataaars.svg";
import styles from "./Home.module.css";
import Navbar from "../Navbar/Navbar";
import StarLine from "../Starline/StarLine";

export default function Home() {
  useEffect(()=>{
    document.title = 'Home'
  },[])
  let locationS = window.location.pathname
  return (
    <>
      <div className={`${styles.home} w-100 d-flex justify-content-center align-items-center pt-5 mt-5`}>
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <img className={`${styles.avatar} my-5`} src={avatar} alt="" />
          <h1 className="text-white fw-bold">START FRAMEWORK</h1>
            <StarLine loc={locationS}/>
          <p className=" text-white pb-5 mt-3">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
