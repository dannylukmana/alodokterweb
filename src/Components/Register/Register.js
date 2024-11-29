import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    kotaKabupaten: "",
    date: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card shadow-lg"
        style={{
          width: "100%",
          maxWidth: "750px",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#fff",
          marginTop: "110px",
          marginBottom: "20px",
        }}
      >
        <h2 className="text-center" style={{ fontWeight: "bold" }}>
          Pendaftaran Akun
        </h2>
        <p
          className="text-center"
          style={{ fontSize: "14px", color: "#6c757d" }}
        >
          Dapatkan Akses ke Berbagai Info Kesehatan Terkini & Terpercaya
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label>Nama Lengkap</label>
            <input
              name="name"
              placeholder="Nama Lengkap"
              className="form-control"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ marginBottom: "10px" }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label>Kota/Kabupaten</label>
            <input
              name="kotaKabupaten"
              placeholder="Kota/Kabupaten"
              className="form-control"
              type="text"
              value={formData.kotaKabupaten}
              onChange={handleChange}
              required
              style={{ marginBottom: "10px" }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label>Tanggal Lahir</label>
            <input
              type="date"
              name="date"
              className="form-control"
              value={formData.date}
              onChange={handleChange}
              required
              style={{ marginBottom: "10px" }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label>Jenis Kelamin</label>
            <select
              name="gender"
              className="form-control"
              value={formData.gender}
              onChange={handleChange}
              required
              style={{ marginBottom: "10px" }}
            >
              <option value="">Pilih Jenis Kelamin</option>
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label>Email</label>
            <input
              name="email"
              placeholder="Email"
              className="form-control"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ marginBottom: "10px" }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label>Kata Sandi</label>
            <input
              name="password"
              placeholder="Kata Sandi"
              className="form-control"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ marginBottom: "10px" }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "20px" }}>
            <label>Konfirmasi Kata Sandi</label>
            <input
              name="confirmPassword"
              placeholder="Konfirmasi Kata Sandi"
              className="form-control"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={{ marginBottom: "10px" }}
            />
          </div>

          <div
            className="form-group form-check"
            style={{ marginBottom: "20px" }}
          >
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              required
              className="form-check-input"
            />
            <label className="form-check-label" style={{ fontSize: "14px" }}>
              Saya Setuju dengan Syarat & Ketentuan
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                fontSize: "16px",
                padding: "10px 20px",
                width: "100%",
                maxWidth: "200px",
                marginTop: "20px",
              }}
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
