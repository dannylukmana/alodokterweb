import React, { useState, useEffect } from "react";

function Article() {
  // State to store window width for responsiveness
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive styles based on window width
  const articleStyle = {
    display: "flex",
    flexDirection: windowWidth < 900 ? "column" : "row", // Stack columns on small screens
    justifyContent: "space-between",
    paddingTop: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
  };

  const leftColumnStyle = {
    flex: "1",
    marginRight: windowWidth < 900 ? "0" : "20px", // Adjust margin on smaller screens
    paddingTop: "50px",
  };

  const rightColumnStyle = {
    flex: "0 0 472px",
    marginTop: windowWidth < 900 ? "20px" : "180px", // Adjust top margin on smaller screens
    width: windowWidth < 900 ? "100%" : "472px", // Take full width on small screens
  };

  const cardStyle = {
    height: "124px",
    width: "100%",
    marginBottom: "20px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    maxWidth: "138px",
    maxHeight: "94.28px",
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    objectFit: "cover",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "black",
    marginBottom: "20px",
  };

  const textStyle = {
    fontSize: "16px",
    fontWeight: "300",
    color: "black",
    marginBottom: "15px",
  };

  return (
    <div style={articleStyle}>
      <div style={leftColumnStyle}>
        <section className="page-section portfolio" id="portfolio">
          <div className="container">
            <h2 style={titleStyle}>
              Pentingnya mengajarkan kesehatan gigi dan mulut
            </h2>
            <p style={textStyle}>Oleh : Danny Lukmana</p>
            <img
              className="card-img-top card-body shadow mb-3 bg-body rounded"
              src={process.env.PUBLIC_URL + "/assets/Person.png"}
              alt="..."
              style={{ borderRadius: "10px", marginBottom: "20px" }}
            />
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "black",
                marginTop: "13px",
                marginBottom: "10px",
              }}
            >
              Cara menjaga kesehatan gigi dan mulut
            </div>
            <p style={textStyle}>
              Dalam situasi saat ini, menjaga kebersihan pribadi sangatlah
              penting. Pastinya sekarang, kamu sudah terbiasa mengenakan masker
              dan mencuci tangan dengan seksama. Tapi jangan lupakan pentingnya
              menjaga kebersihan gigi dan mulut juga, lho. Berikut adalah
              beberapa tips tentang cara menjaga kesehatan gigi dan mulut.
            </p>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                color: "black",
                marginTop: "20px",
              }}
            >
              MENGAPA KEBERSIHAN GIGI DAN MULUT ITU PENTING?
            </p>
            <p style={textStyle}>
              Mulut kita adalah titik masuk ke saluran pencernaan dan
              pernapasan. Mulut juga merupakan rumah bagi setidaknya 700 spesies
              mikroba. Ini termasuk bakteri baik dan jahat. Menyikat gigi dan
              flossing secara teratur dapat membantu menjaga kebersihan gigi dan
              mulut. Namun, tanpa kebersihan gigi dan mulut yang baik, bakteri
              jahat dapat menyebabkan infeksi, seperti kerusakan gigi dan
              penyakit gusi. Jika tidak diobati, penyakit ini dapat mempengaruhi
              kesehatanmu secara keseluruhan.
            </p>
          </div>
        </section>
      </div>

      <div style={rightColumnStyle}>
        <p
          className="lead"
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "black",
            marginBottom: "20px",
          }}
        >
          Artikel Terkait
        </p>

        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            style={cardStyle}
            className="card-body shadow p-2 mb-3 bg-body rounded"
          >
            <div
              className="row"
              style={{
                display: "flex",
                flexDirection: windowWidth < 900 ? "column" : "row", // Stack elements vertically on small screens
                alignItems: "center", // Center the content
              }}
            >
              <div
                className="col-lg-4 ms-auto"
                style={{
                  flex: windowWidth < 900 ? "0 0 100%" : "0 0 138px", // Take full width on small screens
                  marginBottom: windowWidth < 900 ? "15px" : "0", // Add margin for small screens
                }}
              >
                <img
                  style={imageStyle}
                  src={process.env.PUBLIC_URL + "/assets/Person.png"}
                  alt="..."
                />
              </div>
              <div
                className="col-lg-7 ms-auto"
                style={{
                  flex: "1",
                  textAlign: windowWidth < 900 ? "center" : "left", // Center text on small screens
                }}
              >
                <p
                  className="card-title"
                  style={{
                    fontSize: windowWidth < 900 ? "14px" : "12px", // Adjust font size on small screens
                    margin: "0px",
                  }}
                >
                  Gigi
                </p>
                <p
                  className="card-text"
                  style={{
                    fontWeight: "bold",
                    margin: "0px",
                    fontSize: windowWidth < 900 ? "16px" : "14px", // Adjust font size on small screens
                  }}
                >
                  Pentingnya mengajarkan kesehatan gigi dan mulut
                </p>
                <p
                  style={{
                    textAlign: "left",
                    margin: "5px 0",
                    fontSize: windowWidth < 900 ? "14px" : "12px", // Adjust font size on small screens
                  }}
                >
                  Oleh : Danny Lukmana
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Article;
