import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function ListDoctor() {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src={process.env.PUBLIC_URL + "/assets/Doctor.png"}
          alt="Dokter"
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">Dr. Danny</h5>
            <p>Spesialis Jantung</p>
            <div className="row border rounded">
              <div
                style={{
                  textAlign: "center",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                Rp. 200.000
              </div>
            </div>
            <div className="row border rounded" style={{ marginTop: "5px" }}>
              <div
                style={{
                  textAlign: "center",
                  color: "black",
                  fontWeight: "600",
                }}
              >
                11.30 - 20.00
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {/* Using Link instead of <a> for navigation */}
            <Link
              to="/booking-doctor" // Link to the BookingDoctor route
              className="btn btn-outline-dark mt-auto"
            >
              Konsultasi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListDoctor;
