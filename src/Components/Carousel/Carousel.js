import React from "react";

function Carousel() {
  return (
    <div
      id="carouselExampleControlsNoTouching"
      className="carousel slide"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <div className="carousel-inner text-center">
        <div className="carousel-item active">
          <img
            src="/assets/Banner2.png"
            className="d-block img-fluid"
            alt="Banner 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/Banner1.png"
            className="d-block img-fluid"
            alt="Banner 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/Banner.png"
            className="d-block img-fluid"
            alt="Banner"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
