import React from "react";

function Footer() {
  return (
    <>
      {/* Footer Main Section */}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* Footer Location */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Alodokter</h4>
              <p>
                Tentang Kami
                <br />
                Karier
                <br />
                Hubungi Kami
                <br />
                Tim Editorial
                <br />
                Aloproteksi
              </p>
            </div>

            {/* Footer About Text */}
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4">Lainnya</h4>
              <p>
                Syarat & Ketentuan
                <br />
                Privasi
                <br />
                Iklan
                <br />
                Gabung di Tim Alodokter
                <br />
                Daftarkan Rumah Sakit Anda
              </p>
            </div>

            {/* Footer Social Icons */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Media Sosial</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-instagram"></i>
              </a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!">
                <i className="fab fa-fw fa-youtube"></i>
              </a>
              <br />
              <p>
                <div style={{ fontWeight: "bold", marginTop: "10px" }}>
                  Bagian dari Alodokter
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  alomedika.com
                  <br />
                  dannylukmana.com
                  <br />
                </div>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Hak Cipta &copy; 2021 Alodokter</small>
        </div>
      </div>
    </>
  );
}

export default Footer;
