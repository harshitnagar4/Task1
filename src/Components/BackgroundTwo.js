import React from "react";
import "./BackgroundTwo.css";
import ln from "../assets/image/ln.svg"
export default function BackgroundTwo() {
  return (
    <>
      <div className="row" style={{ backgroundColor: "rgb(245, 245, 245)" }}>
        <div
          className="col-md-6"
          style={{ padding: "0rem", backgroundColor: "rgb(245, 245, 245)" }}
        >
          <div
            className="card"
            id="cardFirst"
            style={{ padding: "0rem", backgroundColor: "rgb(245, 245, 245)",border:"none"}}
          >
            <iframe
              width="80%"
              height="350"
              src="https://www.youtube.com/embed/F8gj4D20Zcc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{
                maxWidth: "100%",
                minWidth: "80%",
                margin: "-0.5rem auto 0.5rem",
              }}
            ></iframe>
            {/* <iframe src="https://www.youtube.com/embed/F8gj4D20Zcc"></iframe> */}
          </div>
        </div>

        <div className="col-md-6" style={{ padding: "0.5rem" }}>
          <div className="card text-center" style={{border:"none"}}>
            <div
              className="card-body"
              id="cardSecond"
              style={{ backgroundColor: "rgb(245, 245, 245)" }}
            >
              <div
                className="card-title"
                style={{ overflowY: "hidden", marginTop: "0.5rem" ,fontWeight: "500",lineHeight: "1.2"}}
              >
                <h1>Krishna Vamsi</h1>
              </div>
              <h2><li style={{listStyleType: "none"}}><a href="https://www.linkedin.com/in/krishna-vamsi-yendamuri-2516651aa/" target="_blank">
                <img src={ln} alt="" />
                </a></li></h2>
              <p
                className="card-text"
                id="pText"
                style={{
                  marginTop: "1rem",
                  overflowY: "hidden",
                  fontSize: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                }}
              >
                Let’s hear from Krishna Vamsi, who completed the Data Analyst
                Program and was hired by TCS..
              </p>
              <button
                id="enrollBtn"
                style={{ marginLeft: "4%", marginTop: "2rem" }}
                type="button"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
    //   <div className="card-title h5" style="overflow-y: hidden; margin-top: 0.5rem;">
    //   <h1><b>Krishna Vamsi</b></h1>
  );
}
