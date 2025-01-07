import React, { useEffect } from 'react'
import styles from './Contact.module.css'
import StarLine from './../Starline/StarLine';

export default function Contact() {
  useEffect(()=>{
    document.title = 'Contact'
  },[])
  let locationS = window.location.pathname
  return (<>
  <section className={`${styles.contact} pt-5 mt-5`}>
          <div className="container pt-4">
            <div className=" d-flex flex-column justify-content-center align-items-center">
              <h2 className={`${styles.title}`}>CONTACT SECTION</h2>
              <StarLine loc={locationS} />
            </div>
            <div className={`${styles.form} mt-5 pb-5`}>
              <input type="text" className={`${styles.input} form-control  mx-auto my-4 border-0`} placeholder='UserName' />
              <input type="number" className={`${styles.input} form-control  mx-auto my-4 border-0`} placeholder='UserAge' />
              <input type="email" className={`${styles.input} form-control  mx-auto my-4 border-0`} placeholder='UserEmail' />
              <input type="password" className={`${styles.input} form-control  mx-auto my-4 border-0`} placeholder='UserPassword' />
              <button className={`${styles.btn}`}>Send message</button>
            </div>
            
          </div>
        </section>
  </>
    
  )
}
