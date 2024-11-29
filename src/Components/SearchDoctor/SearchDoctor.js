import React from "react";

function SearchDoctor() {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <div className="text-left" style={{ paddingTop: "150px" }}>
          <h2
            className="section-heading text-uppercase"
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Pelayanan Konsultasi
          </h2>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "300",
              color: "black",
            }}
          >
            Dokter akan siap melayani anda hari ini dengan dokter yang
            berkualitas
          </p>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Cari dokter"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Cari
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchDoctor;
