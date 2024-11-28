import { useState } from "react";
import { NewsBoard } from "./NewsBoard";

export const Navbar = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");
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
                  onClick={() => setCategory("technology")}
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => setCategory("business")}
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => setCategory("health")}
                >
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => setCategory("sports")}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  onClick={() => setCategory("entertainment")}
                >
                  Entertainment
                </a>
              </li>
              <div className="dropdown">
                <button
                  className="btn btn-outline-info dropdown-toggle "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Country
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => setCountry("us")}
                    >
                      USA
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => setCountry("gb")}
                    >
                      UK
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => setCountry("ru")}
                    >
                      RUSSIA
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => setCountry("fr")}
                    >
                      FRANCE
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => setCountry("de")}
                    >
                      GERMANY
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => setCountry("es")}
                    >
                      SPAIN
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => setCountry("it")}
                    >
                      ITALY
                    </div>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <NewsBoard category={category} country={country} />
    </>
  );
};
