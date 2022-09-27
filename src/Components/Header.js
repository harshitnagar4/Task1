import React from "react";
import logo from "../assets/image/logo.png";
import Phonecall from "../assets/image/Phonecall.svg";
import "./Header.css";
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" id="nav1">
        <div className="container-fluid" style={{background: "rgba(232,232,233,255)"}}>
          <a className="navbar-brand" href="#">
            <img src={logo} className="my-4 mx-1" alt="" / >
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-outline-success"
                type="submit"
                id="applynow"
              >
                Enroll Now
              </button>
              <span className="mx-3"><img src={Phonecall} height="35px" alt="" /></span>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
