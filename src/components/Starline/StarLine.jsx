import React from "react";
import styles from './StarLine.module.css'

export default function StarLine({loc}) {
  return (
    <>
      <div className={`${styles.line} ${loc == '/' ||  loc =='/about' ? styles.white :styles.blue}  position-relative`}>
        <i className="fa-solid fa-star mx-3"></i>
      </div>
    </>
  );
}
