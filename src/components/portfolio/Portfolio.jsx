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
  const [ShowModal, setShowModal] = useState(false)
  const [ModalImg, setModalImg] = useState('')
  function openModal(img){
    setShowModal(true)
    setModalImg(img)
  }
  function closeModal(){
    setShowModal(false)
    setModalImg('')
  }
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
            {[pic1, pic2, pic3, pic1, pic2, pic3].map((pic, index)=>(
            <div className="col-md-6 col-lg-4" key={index}>
              <div onClick={()=>openModal(pic)} className={`${styles.inner} position-relative`}>
                <img src={pic} alt="" className=" img-fluid rounded-2" />
                <div
                  className={`${styles.layer} d-flex justify-content-center align-items-center`}
                >
                  <i className="fa-solid fa-plus fa-8x text-white"></i>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      {ShowModal && (
        <div className={`${styles.modal}`} onClick={closeModal}>
          <div className={`${styles.modalContent} w-50 pt-5 mt-5`} onClick={(e) => e.stopPropagation()}>
            <img src={ModalImg} alt="selected" className="img-fluid" />
            {/* <button className="btn-close" onClick={closeModal}></button> */}
          </div>
        </div>
      )}
    </>
  );
}
