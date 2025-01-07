import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="upperFooter d-flex justify-content-between align-items-center">
          <div className="container text-center py-5">
            <div className="row gy-4">
              <div className="col-md-6 col-lg-4">
                <div className="location text-white">
                  <h2>LOCATION</h2>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 text-white">
                <h2>AROUND THE WEB</h2>
                <div className="social d-flex justify-content-center align-items-center gap-3 fs-5 mt-3">
                  <div>
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div>
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div>
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                  <div>
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="freelance text-white">
                  <h2>ABOUT FREELANCER</h2>
                  <p className=" mt-3">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lowerFooter text-white text-center pt-3 pb-2">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
