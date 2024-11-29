import React from "react";
import { Link } from "react-router-dom";

function ArticleCard() {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={process.env.PUBLIC_URL + src="/assets/Person.png"} alt="Product" />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder" style={{ textAlign: "left" }}>
              Pentingan mengajarkan kesehatan gigi dan mulut
            </h5>

            <p style={{ textAlign: "left" }}>
              Pentingan mengajarkan kesehatan gigi dan mulut
            </p>

            <p style={{ textAlign: "left" }}>Oleh : Danny Lukmana</p>
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link className="btn btn-outline-dark mt-auto" to="/article-page">
              Lihat Artikel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
