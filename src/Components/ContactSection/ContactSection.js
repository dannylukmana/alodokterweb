import React from "react";

function ContactSection() {
  const sectionStyle = {
    padding: "80px 0",
    backgroundColor: "#f9f9f9",
  };

  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 15px",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  };

  const subheadingStyle = {
    fontSize: "1.2rem",
    color: "#777",
    marginBottom: "40px",
    textAlign: "center",
  };

  const formRowStyle = {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
  };

  const colStyle = {
    flex: "1",
  };

  const inputStyle = {
    padding: "15px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    marginBottom: "20px",
  };

  const inputFocusStyle = {
    borderColor: "#0056b3",
    boxShadow: "0 0 5px rgba(0, 86, 179, 0.3)",
  };

  const buttonStyle = {
    padding: "15px 40px",
    fontSize: "1.2rem",
    borderRadius: "5px",
    backgroundColor: "#0056b3",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s",
    marginTop: "20px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#004085",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div className="container" style={containerStyle}>
        <div className="text-center">
          <h3 className="section-heading text-uppercase" style={headingStyle}>
            Hubungi Kami
          </h3>
          <p className="section-subheading" style={subheadingStyle}>
            Dengan mengisi form dibawah ini Anda akan dapat menghubungi kami
            untuk informasi lebih lanjut.
          </p>
        </div>
        <form className="contact-form">
          <div className="form-row" style={formRowStyle}>
            <div className="col-md-6" style={colStyle}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nama"
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style = { ...inputStyle, ...inputFocusStyle })
                  }
                  onBlur={(e) => (e.target.style = inputStyle)}
                  required
                />
              </div>
            </div>
            <div className="col-md-6" style={colStyle}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style = { ...inputStyle, ...inputFocusStyle })
                  }
                  onBlur={(e) => (e.target.style = inputStyle)}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Pesan"
              style={inputStyle}
              required
            ></textarea>
          </div>
          <div className="form-group text-center">
            <button
              type="submit"
              className="btn btn-primary btn-xl text-uppercase"
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style = buttonHoverStyle)}
              onMouseOut={(e) => (e.target.style = buttonStyle)}
            >
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
