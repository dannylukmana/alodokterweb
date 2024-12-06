import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Booking = () => {
  const [name, setName] = useState("Michael");
  const [nik, setNik] = useState("35719820753463847");
  const [address, setAddress] = useState("");
  const [consultationDate, setConsultationDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here
    console.log({
      name,
      nik,
      address,
      consultationDate,
    });
    // Show the success modal after form submission
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0", // Optional, just for background styling
      }}
    >
      <form
        className="well form-horizontal"
        id="contact_form"
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px", // Adjust width for a minimalist feel
          width: "100%", // Allow the form to take up available space
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <fieldset>
          <div className="row">
            <h2 style={{ textAlign: "center" }}>Pemesanan Konsultasi</h2>
            <div className="col-md-3" style={{ textAlign: "center" }}>
              <img
                src={process.env.PUBLIC_URL + "/assets/Doctor.png"}
                width="120px"
                height="120px"
                alt="Dokter"
              />
            </div>
            <div className="col-sm-6" style={{ textAlign: "center" }}>
              <h5 style={{ color: "black" }}>Dr. Danny</h5>
              <p>Spesialis Jantung</p>
              <p>Rp. 200.000</p>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <table style={{ width: "100%" }}>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "8px",
                      fontWeight: "400",
                    }}
                  >
                    Lokasi Periksa
                  </th>
                  <td>
                    <input
                      style={{
                        borderRadius: "4px",
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                        marginBottom: "10px",
                      }}
                      type="text"
                      value="Rumah Sakit Ibunda"
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "8px",
                      fontWeight: "400",
                    }}
                  >
                    Pilih Jadwal Konsultasi
                  </th>
                  <td>
                    <input
                      style={{
                        borderRadius: "4px",
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                        marginBottom: "10px",
                      }}
                      type="date"
                      value={consultationDate}
                      onChange={(e) => setConsultationDate(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th
                    colSpan="2"
                    style={{
                      textAlign: "left",
                      fontWeight: "500",
                      paddingBottom: "15px",
                      fontSize: "24px",
                    }}
                  >
                    Profil Pasien
                  </th>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "8px",
                      fontWeight: "400",
                    }}
                  >
                    Nama
                  </th>
                  <td>
                    <input
                      style={{
                        borderRadius: "4px",
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                        marginBottom: "10px",
                      }}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "8px",
                      fontWeight: "400",
                    }}
                  >
                    NIK
                  </th>
                  <td>
                    <input
                      style={{
                        borderRadius: "4px",
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                        marginBottom: "10px",
                      }}
                      type="text"
                      value={nik}
                      onChange={(e) => setNik(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      paddingBottom: "8px",
                      fontWeight: "400",
                    }}
                  >
                    Alamat
                  </th>
                  <td>
                    <textarea
                      name="address"
                      id="address"
                      cols="30"
                      rows="4"
                      style={{
                        borderRadius: "4px",
                        width: "100%",
                        padding: "10px",
                        border: "1px solid #ccc",
                        fontSize: "14px",
                        marginBottom: "10px",
                      }}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </td>
                </tr>
              </table>
              <center>
                <button
                  className="btn btn-lg btn-primary btn-block"
                  style={{
                    fontSize: "16px",
                    padding: "12px 20px",
                    marginTop: "20px",
                    width: "100%",
                    backgroundColor: "#007bff",
                    border: "none",
                    color: "#fff",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  type="submit"
                >
                  Pesan
                </button>
              </center>
            </div>
          </div>
        </fieldset>
      </form>

      {/* Success Modal */}
      {isModalVisible && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
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
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="text-center mb-4">
                  <h1 className="h3 mb-3 font-weight-normal">
                    Pemesanan Berhasil
                  </h1>
                  <center>
                    <img
                      src="/assets/check.png"
                      style={{ height: "100px", width: "100px" }}
                      alt="Success"
                    />
                  </center>
                  <p style={{ margin: "20px" }}>
                    Pemesan konsultasi akan segera diproses oleh dokter kami!
                  </p>
                </div>
                <center>
                  <Link
                    to="/consultation" // Link to the Consultation page
                    className="btn btn-lg btn-primary btn-block"
                    style={{ fontSize: "20px", marginBottom: "10px" }}
                  >
                    Kembali
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
