import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import home from "./home.module.css";

export default function Home() {
  return (
    <>
      <main className="mb-5 pb-5">
        <Navbar />
        <div className="bg-primary">
          <h1 className="container fw-bold py-4 text-white">Top Jobs</h1>
        </div>
        <div className="container py-4">
          <div className="my-2 d-flex justify-content-center gap-2 p-2">
            <input
              className="form-control py-3"
              type="text"
              placeholder="Search talent"
              style={{
                width: "70%",
                height: "50px",
                border: "none",
                paddingLeft: "20px",
              }}
            />
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle h-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Name
                  </a>
                </li>{" "}
                <li>
                  <a class="dropdown-item" href="#">
                    Domisili
                  </a>
                </li>{" "}
                <li>
                  <a class="dropdown-item" href="#">
                    Jobdesk
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button
                className="btn btn-primary px-5 h-100"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
          <div className="card">
            <ul className="list-group list-group shadow-lg">
              <li className="list-group-item py-4">
                <div className="row flex-column flex-md-row justify-content-center align-items-center text-center text-md-start gap-3">
                  <div className="col col-md-2 text-center">
                    <img
                      src="pp-louis-tomlinson.png"
                      alt="pp-louis-tomlinson"
                    />
                  </div>
                  <div className="col col-md-8">
                    <h4 className="fw-semibold">Abubakar Adeni</h4>
                    <p className="text-muted m-0">Software Engineer</p>
                    <p className="text-muted mb-2">
                      <img src="map.png" alt="map" /> Jakarta
                    </p>
                    <div className="d-inline">
                      <Link
                        className="btn btn-outline-warning text-white me-2 fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        PHP
                      </Link>
                      <Link
                        className="btn btn-outline-warning text-white me-2 fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        JavaScript
                      </Link>
                      <Link
                        className="btn btn-outline-warning text-white fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        HTML
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <Link className="btn btn-primary btn-lg" href="/profile">
                      Lihat Profile
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-4">
                <div className="row flex-column flex-md-row justify-content-center align-items-center text-center text-md-start gap-3">
                  <div className="col col-md-2 text-center">
                    <img src="sandy.png" alt="pp-harry-styles" />
                  </div>
                  <div className="col col-md-8">
                    <h4 className="fw-semibold">Sandy Cheeks</h4>
                    <p className="text-muted m-0">Web Developer</p>
                    <p className="text-muted mb-2">
                      <img src="map.png" alt="map" /> Bikini Bottom
                    </p>
                    <div className="d-inline">
                      <Link
                        className="btn btn-outline-warning text-white me-2 fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        PHP
                      </Link>
                      <Link
                        className="btn btn-outline-warning text-white me-2 fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        JavaScript
                      </Link>
                      <Link
                        className="btn btn-outline-warning text-white fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        HTML
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <Link className="btn btn-primary btn-lg" href="#">
                      Lihat Profile
                    </Link>
                  </div>
                </div>
              </li>
              <li className="list-group-item py-4">
                <div className="row flex-column flex-md-row justify-content-center align-items-center text-center text-md-start gap-3">
                  <div className="col col-md-2 text-center">
                    <img src="pp-niall-horan.png" alt="pp-niall-horan" />
                  </div>
                  <div className="col col-md-8">
                    <h4 className="fw-semibold">Walter White</h4>
                    <p className="text-muted m-0">Web Developer</p>
                    <p className="text-muted mb-2">
                      <img src="map.png" alt="map" /> New York
                    </p>
                    <div className="d-inline">
                      <Link
                        className="btn btn-outline-warning text-white me-2 fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        PHP
                      </Link>
                      <Link
                        className="btn btn-outline-warning text-white me-2 fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        JavaScript
                      </Link>
                      <Link
                        className="btn btn-outline-warning text-white fw-semibold"
                        href="#"
                        style={{ backgroundColor: "rgba(251, 176, 23, 0.6)" }}
                      >
                        HTML
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <Link className="btn btn-primary btn-lg" href="#">
                      Lihat Profile
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
