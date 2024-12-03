import { useState } from "react";
import { NewsBoard } from "./NewsBoard";

export const Navbar = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge text-bg-light p-2">NewsMag</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  style={{
                    color: category === "general" ? "orange" : "white",
                  }}
                  onClick={() => setCategory("general")}
                >
                  General
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  style={{
                    color: category === "technology" ? "orange" : "white",
                  }}
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  style={{
                    color: category === "business" ? "orange" : "white",
                  }}
                  onClick={() => setCategory("business")}
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  style={{
                    color: category === "health" ? "orange" : "white",
                  }}
                  onClick={() => setCategory("health")}
                >
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  style={{
                    color: category === "sports" ? "orange" : "white",
                  }}
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  style={{
                    color: category === "entertainment" ? "orange" : "white",
                  }}
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <NewsBoard category={category} />
    </>
  );
};
