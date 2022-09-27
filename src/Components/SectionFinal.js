import React, { Component } from "react";
import "./SectionFinal.css";
import blog1 from "../assets/image/blog1.png";
import blog2 from "../assets/image/blog2.png";
import blog3 from "../assets/image/blog3.png";
import ln from "../assets/image/ln.svg";
import blog4 from "../assets/image/blog4.png";
import blog5 from "../assets/image/blog5.png";
import blog7 from "../assets/image/blog7.png";
import Certificate from "../assets/image/Certificate.png";

export default class SectionFinal extends Component {
  render() {
    return (
      <>
        <div>
          <div
            className="blog-card"
            style={{
              width: "96vw",
              margin: "0.5rem",
              padding: "1rem",
              backgroundColor: "black",
            }}
          >
            <div className="meta row" style={{ backgroundColor: "black" }}>
              <div
                className="photo d-flex col-md-4"
                id="blogimg"
                style={{ backgroundColor: "black" }}
              >
                <img src={blog1} width="88%" alt="" />
              </div>
              <div
                className="description col-md-6 "
                id="trouble"
                style={{
                  margin: "0rem auto",
                  backgroundColor: "black",
                  color: "rgb(233, 233, 234)",
                  fontFamily: "inter sans-serif",
                  fontSize: "43px",
                }}
              >
                Are you a Troublemaker?
                <p className="read-more">
                  <button id="blogbtn" type="button">
                    <a
                      href="https://rzp.io/l/lejhrobootcamp"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      Enroll Now
                    </a>
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ backgroundColor: "rgb(233, 233, 234)" }}
          >
            <div className="col-md-6 ">
              <div className="card border-0">
                <div
                  className="card-body"
                  style={{
                    backgroundColor: "rgb(233, 233, 234)",
                    paddingTop: "15%",
                    paddingLeft: "3%",
                  }}
                >
                  <h3
                    style={{
                      textAlign: "justify",
                      fontWeight: "bolder",
                      marginTop: "-1.8rem",
                      marginBottom: "2rem",
                      marginLeft: "1rem",
                    }}
                  >
                    Are you looking to give your career a boost?
                  </h3>
                  <div
                    style={{
                      fontSize: "20px",
                      textAlign: "justify",
                      marginLeft: "1rem",
                    }}
                  >
                    Then, this Bootcamp is for you. Level up your problem
                    solving, technological and debugging skills through
                    extensive training. Get industry ready in a week’s time.
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6  col-sm-12"
              style={{ padding: "0.5rem", marginTop: "30px" }}
            >
              <div id="secondCard" className="text-center card">
                <img className="card-img-top" src={blog2} />
              </div>
            </div>
          </div>
          <div className="row container my-4" style={{ margin: "auto" }}>
            <div className="col-md-4">
              <img src={blog3} width="100%" height="100%" alt="" />
            </div>
            <div className="col-md-8">
              <div
                className="description"
                id="descrip"
                style={{ backgroundColor: "rgb(233, 233, 234)" }}
              >
                <h1>Jyothi Goswami</h1>
                <h2>
                  <li style={{ listStyleType: "none" }}>
                    <a
                      href="https://www.linkedin.com/in/jyoti-goswami-624811118/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={ln} alt="" />
                    </a>
                  </li>
                </h2>
                <p className="iota">
                  I am Jyoti Goswami, a Data Analyst. Got the opportunity to be
                  a part of the BOOTCAMP and post-completion I joined as an
                  intern in Lejhro Technology and it is a great experience with
                  Lejhro Technology. In training, I got a basic idea about the
                  things which are useful for the data analyst role. We started
                  with Python and also learned Tableau. The mentors were very
                  helpful and friendly.
                </p>
                <p className="read-more">
                  <button className="enrollblog" type="button">
                    <a
                      href="https://rzp.io/l/lejhrobootcamp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enroll Now
                    </a>
                  </button>
                </p>
              </div>
            </div>
          </div>
          {/* -------------------blog4------------------- */}
          <div
            className="blog-card"
            style={{
              width: "96vw",
              margin: "0.5rem",
              padding: "1rem",
              backgroundColor: "black",
            }}
          >
            <div className="meta row" style={{ backgroundColor: "black" }}>
              <div
                className="photo d-flex col-md-4"
                id="blogimg"
                style={{ backgroundColor: "black" }}
              >
                <img src={blog4} width="88%" alt="" />
              </div>
              <div
                className="description col-md-6 "
                id="trouble"
                style={{
                  margin: "0rem auto",
                  backgroundColor: "black",
                  color: "rgb(233, 233, 234)",
                  fontFamily: "inter sans-serif",
                  fontSize: "50px",
                  marginTop: "45px",
                  fontWeight: "bold",
                }}
              >
                Reshape Your Career !
                <p className="read-more">
                  <button id="blogbtn" type="button">
                    <a
                      href="https://rzp.io/l/lejhrobootcamp"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      Enroll Now
                    </a>
                  </button>
                </p>
              </div>
            </div>
          </div>
          {/* --------------blog5------------ */}
          <div>
            <div
              className="row"
              style={{ backgroundColor: "rgb(245, 245, 245)" }}
            >
              <div className="col-md-6 ">
                <div
                  className="card border-0"
                  id="blog5Card1"
                  style={{ backgroundColor: "rgb(245, 245, 245)" }}
                >
                  <img
                    src={blog5}
                    className="card-img-top"
                    id="blog5"
                    alt="..."
                  />
                </div>
              </div>
              <div
                className="col-md-6 "
                style={{
                  padding: "0.5rem",
                  backgroundColor: "rgb(245, 245, 245)",
                }}
              >
                <div className="card border-0 text-center" id="blog5Card2">
                  <div className="card-body">
                    <p className="card-text" id="blog5CardText">
                      Our Bootcamp focuses on building technical and practical
                      skills. The best form of personalized learning, committed
                      towards helping students through valuable advice vital for
                      career development. "LEARN AND SKILL UP FOR BRIGHTER
                      FUTURE"
                    </p>
                    .
                    <br />
                    <div
                      className="card-title h5"
                      style={{ overflowY: "hidden" }}
                    >
                      <h1>
                        <b>&nbsp; Bidintha Basumatary</b>
                      </h1>
                    </div>
                    <h5>&nbsp;&nbsp;Vice President, Lejhro Technology</h5>
                    <a
                      href="https://www.linkedin.com/in/bidintha-basumatary-20b85b22/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={ln} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ----------blog6------------ */}
          <div
            className="row"
            style={{ backgroundColor: "rgb(233, 233, 234)" }}
          >
            <div className="col-md-6 " style={{ margin: "auto" }}>
              <div className="card border-0" id="blog6card1">
                <div
                  className="card-body"
                  style={{
                    backgroundColor: "rgb(233, 233, 234)",
                    margin: "auto",
                  }}
                >
                  <div style={{ marginLeft: "9.6%", marginTop: "5%" }}>
                    <p
                      className="text-justify"
                      style={{ width: "90%", fontSize: "22px" }}
                    >
                      Courses designed to help students develop solid basic
                      abilities for future professional advancement.
                    </p>
                    <div style={{ fontSize: "18px" }}>
                      <b>Bootcamp Salient Features </b>
                      <br />
                      <li>
                        Learn from Industry Experts <br />
                      </li>
                      <li>
                        Live and interactive training <br />
                      </li>
                      <li>
                        Novice to Advanced level in less than <br />
                        &nbsp;&nbsp;&nbsp;6 months (includes internship
                        opportunity)
                      </li>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div
                className="card text-center border-0"
                style={{
                  padding: "0rem",
                  backgroundColor: "rgb(233, 233, 234)",
                }}
              >
                <img
                  src={Certificate}
                  className="card-img-top"
                  height="100%"
                  width="100%"
                  alt="..."
                />
                <div className="card-body"></div>
              </div>
            </div>
          </div>
          {/* --------blog7-------------- */}
          <div
            className="blog-card"
            style={{
              width: "96vw",
              margin: "0.5rem",
              padding: "1rem",
              backgroundColor: "black",
            }}
          >
            <div className="meta row" style={{ backgroundColor: "black" }}>
              <div
                className="photo d-flex col-md-4"
                id="blogimg"
                style={{ backgroundColor: "black" }}
              >
                <img src={blog7} width="88%" alt="" />
              </div>
              <div
                className="description col-md-6 "
                id="blog7text"
                style={{
                  margin: "0rem auto",
                  backgroundColor: "black",
                  color: "rgb(233, 233, 234)",
                  fontSize: "42px",
                  // paddingTop:"3rem"
                }}
              >
                <span>Decision Defines Destination</span>
                <p className="read-more">
                  <button id="blogbtn" type="button">
                    <a
                      href="https://rzp.io/l/lejhrobootcamp"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#fefeff" }}
                    >
                      Enroll Now
                    </a>
                  </button>
                </p>
              </div>
            </div>
          </div>
          {/* ----------------blog8------------------ */}
          <div>
            <div
              className="row"
              style={{ backgroundColor: "rgb(233, 233, 234)" }}
            >
              <div className="col-md-6" id="blog8">
                <div className="card border-0">
                  <div className="card-body">
                    <div
                      className="card-title h5"
                      style={{
                        overflowY: "hidden",
                        margin: "auto",
                        textAlign: "center",
                      }}
                    >
                      <h1>
                        <b>Sujit Desai</b>
                      </h1>
                    </div>
                    <div
                      class="card-title h5"
                      style={{
                        overflowY: "hidden",
                        margin: "auto",
                        textAlign: "center",
                      }}
                    >
                      <h2>
                        {" "}
                        <li style={{ listStyleType: "none" }}>
                          <a
                            href="https://www.linkedin.com/in/sujitdesai/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={ln} alt="" />
                          </a>
                        </li>
                      </h2>
                    </div>
                    <p
                      class="text-justify arrange"
                      style={{ fontSize: "20px", marginTop: "7%" }}
                    >
                      Invest your time wisely. Be smart like Sujit Desai and
                      enroll for the training program. Get groomed for the
                      industry today!
                    </p>
                  </div>
                  <br />
                </div>
              </div>
              <div className="col-md-6" id="blog8card2">
                <div class="card border-0" id="blog8card2frame">
                  <iframe
                    class="tensor-video"
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/YVXNAeWf2Xk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
