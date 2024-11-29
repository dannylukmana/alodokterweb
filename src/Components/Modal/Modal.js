import React from "react";
import { Link } from "react-router-dom"; // React Router Link for navigation

function Modal() {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="form-signin">
              <div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                <p style={{ margin: "20px" }}>
                  Alo! Masuk dan jelajahi informasi kesehatan terkini dan
                  terlengkap sesuai kebutuhanmu disini!
                </p>
              </div>
              <div className="form-label-group">
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="Email"
                  required
                  autoFocus
                  style={{
                    borderRadius: "0.5rem",
                    width: "375px",
                    margin: "30px",
                  }}
                />
              </div>
              <div className="form-label-group">
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  placeholder="Kata Sandi"
                  required
                  style={{
                    borderRadius: "0.5rem",
                    width: "375px",
                    marginLeft: "30px",
                  }}
                />
              </div>
              <div
                className="checkbox mb-3"
                style={{ marginLeft: "40px", marginTop: "20px" }}
              >
                <label>
                  <input type="checkbox" value="remember-me" /> Ingat Saya
                </label>
              </div>
              <center>
                <Link
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    width: "375px",
                    display: "block",
                    margin: "20px auto",
                  }}
                >
                  <button
                    className="btn btn-lg btn-primary btn-block"
                    style={{ fontSize: "20px" }}
                    type="button"
                    data-bs-dismiss="modal"
                  >
                    LOGIN
                  </button>
                </Link>
                <br />
                <Link
                  to="/register-account"
                  style={{ color: "blue", textDecoration: "none" }}
                >
                  Baru di Alodokter? Daftar
                </Link>
                <p style={{ marginTop: "20px" }}>
                  Dengan masuk atau mendaftar, Anda menyetujui Syarat &amp;
                  Ketentuan serta Privasi ALODOKTER.
                </p>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
