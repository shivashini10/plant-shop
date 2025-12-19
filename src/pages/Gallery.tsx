import Navbar from "../components/Navbar";
import gallery1 from "../assets/img/gallery1.jpg";
import gallery2 from "../assets/img/gallery2.jpg";
import gallery3 from "../assets/img/gallery3.jpg";
import gallery4 from "../assets/img/gallery4.jpg";
import gallery5 from "../assets/img/gallery5.jpg";
import gallery6 from "../assets/img/gallery6.jpg";
import gallery7 from "../assets/img/gallery7.jpg";
import gallery9 from "../assets/img/gallery9.jpg";
import gallery10 from "../assets/img/gallery10.jpg";
import gallery11 from "../assets/img/gallery11.jpg";
import gallery12 from "../assets/img/gallery12.jpg";
import gallery13 from "../assets/img/gallery13.jpg";
import gallery14 from "../assets/img/gallery14.jpg";
import gallery15 from "../assets/img/gallery15.jpg";
import gallery16 from "../assets/img/gallery16.jpg";
import gallery17 from "../assets/img/gallery17.jpg";
import gallery18 from "../assets/img/gallery18.jpg";
import gallery19 from "../assets/img/gallery19.jpg";
import gallery20 from "../assets/img/gallery20.jpg";
import gallery21 from "../assets/img/gallery21.jpg";
import gallery22 from "../assets/img/gallery22.jpg";
import gallery23 from "../assets/img/gallery23.jpg";
import gallery24 from "../assets/img/gallery24.jpg";
import gallery25 from "../assets/img/gallery25.jpg";
import Footer from "../components/Footer";

function Gallery() {
  const galleryImages = [
    gallery1, gallery13, gallery20, gallery11, gallery15, gallery6,
    gallery4, gallery25, gallery12, gallery10, gallery21, gallery9,
    gallery16, gallery2, gallery22, gallery7, gallery3, gallery24, 
    gallery18, gallery19, gallery17, gallery14, gallery23, gallery5
  ];

  return (
    <>
      <Navbar />

      <div className="container py-5 my-5">
        <h1 className="text-center mb-5">Our Plant Gallery</h1>

        <div className="masonry">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="plant"
              className="img-fluid mb-3 rounded shadow-sm w-100"
              style={{
                cursor: "pointer",
                transition: "transform .4s ease"
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.08)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Gallery;


