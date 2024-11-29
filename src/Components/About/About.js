import React from "react";

function About() {
  return (
    <>
      {/* Portfolio Section */}
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* Portfolio Section Heading */}
          <div className="text-center" style={{ padding: "80px 0" }}>
            <h2
              className="section-heading text-uppercase"
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Platform Kesehatan Tepercaya No. 1 di Indonesia
            </h2>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "300",
                color: "black",
                marginTop: "20px",
                maxWidth: "800px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              ALODOKTER adalah platform kesehatan digital nomor satu di
              Indonesia dengan lebih dari 26 juta pengguna aktif setiap
              bulannya, serta lebih dari 30 ribu dokter yang bergabung. Sejak
              tahun 2014, ALODOKTER telah unggul dalam menyediakan informasi
              kesehatan yang akurat, mudah dipahami, dan dapat diakses oleh
              siapa saja, kapan saja, dan di mana saja. Semua informasi
              kesehatan yang tersedia di ALODOKTER disusun dalam bahasa
              Indonesia yang mudah dimengerti dan ditinjau oleh tim dokter yang
              kompeten.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="page-section bs-white text-white mb-0" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ms-auto mb-4">
              <p style={{ color: "black" }} className="lead">
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "black",
                    marginBottom: "13px",
                  }}
                >
                  Layanan Kesehatan Terlengkap di Setiap Langkah Perjalanan
                  Medis Pengguna
                </div>
                Sebagai platform kesehatan terlengkap dengan pertumbuhan
                tercepat se-Asia Tenggara, ALODOKTER menyediakan 5 fitur utama
                yang bermanfaat bagi masyarakat Indonesia untuk membuat
                keputusan terbaik terkait kesehatan, baik secara pribadi maupun
                keluarga, yaitu: chat bersama dokter, buat janji konsultasi
                dengan dokter dan/atau mencari rumah sakit pilihan, artikel
                kesehatan terlengkap dalam bahasa Indonesia, perlindungan
                kesehatan tambahan dengan Proteksi ALODOKTER, serta kemudahan
                untuk berbelanja kebutuhan kesehatan. ALODOKTER juga memiliki
                platform ALOMEDIKA yang dibuat khusus untuk dokter guna
                mendukung perputaran informasi medis yang berkelanjutan bagi
                sesama tenaga medis, sehingga diharapkan dapat meningkatkan
                kualitas layanan kesehatan di Indonesia.
              </p>
            </div>

            <div className="col-lg-6 ms-auto mb-4">
              <p className="lead">
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "black",
                    marginBottom: "13px",
                  }}
                >
                  Akses Mudah dan Cepat Demi Masa Depan Kesehatan Indonesia yang
                  Berkualitas
                </div>
                Seluruh fitur ALODOKTER tersedia dalam versi web dan mobile app
                yang mudah diakses melalui perangkat komputer maupun ponsel
                pintar oleh seluruh masyarakat Indonesia, kapan saja, di mana
                saja. Nikmati kemudahan mencari informasi kesehatan terlengkap
                dengan respons cepat, serta layanan dokter umum maupun spesialis
                berpengalaman yang tersebar di seluruh Indonesia. ALODOKTER
                membantu masyarakat Indonesia dalam membuat keputusan terbaik
                terkait kesehatan diri dan keluarga tercinta.
                <br />
                <br />
                Terakhir diperbarui: 3 November 2020
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
