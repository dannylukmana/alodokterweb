import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

function ArticleSection() {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <div
          className="text-left"
          style={{ paddingTop: "90px", marginBottom: "30px" }}
        >
          <h2
            className="section-heading text-uppercase"
            style={{ fontSize: "28px", fontWeight: "bold", color: "black" }}
          >
            Artikel Terkini
          </h2>
          <p style={{ fontSize: "16px", fontWeight: "300", color: "black" }}>
            Memberikan informasi seputar kesehatan pilihan terbaru
          </p>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Cari artikel"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Cari
            </button>
          </form>
        </div>
        <div className="row">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </section>
  );
}

export default ArticleSection;
