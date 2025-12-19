import Navbar from "../components/Navbar";
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.jpeg";
import banner3 from "../assets/img/banner3.jpg";
import about1 from "../assets/img/about1.jpg";
import about2 from "../assets/img/about2.jpg";
import about3 from "../assets/img/about3.jpg";
import Fruit from "../assets/img/fruit.jpg";
import Flower from "../assets/img/flower.jpg";
import Vegetable from "../assets/img/vegetable.jpg";
import Footer from "../components/Footer";

function About(){
    return(
    <>

    <Navbar />

    <main>

        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">

            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="banner1" height="500px" />
                    <div className="carousel-caption text-start">
                        <h1>Tiny Seed Sprouts</h1>
                        <p className="opacity-75">From tiny seeds, healthy seedlings start growing.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="banner2" height="500px" />
                    <div className="carousel-caption">
                        <h1>Hydrate And Thrive</h1>
                        <p className="opacity-75">Consistent care ensures plants flourish every day.</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="banner3" height="500px" />
                    <div className="carousel-caption text-end">
                        <h1>Flourishing Green Life</h1>
                        <p className="opacity-75">Growth of the plant reflects love and attention.</p>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>

        <div className="container my-5">
            <div className="row text-center g-4">

                <div className="col-md-4">
                    <div className="card h-10 shadow border-0 text-center">
                        <img src={about2} width="80" className="mb-3 mx-auto mt-4"/>
                        <div className="card-body">
                            <h4 className="card-title">Expert Care Guidance</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-10 shadow border-0 text-center">
                        <img src={about1} width="70" className="mb-3 mx-auto mt-4"/>
                        <div className="card-body">
                            <h4 className="card-title">14-days Replacement</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-10 shadow border-0 text-center">
                        <img src={about3} width="80" className="mb-3 mx-auto mt-4"/>
                        <div className="card-body">
                            <h4 className="card-title">Plant Parents Trust Us</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette ps-5 py-4">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">
                    Fresh & Healthy Fruit Plants 
                    <span className="text-body-secondary"> - Grow Nutrition Naturally.</span>
                </h2>
                <p className="lead">
                    Our fruit plants are thoughtfully nurtured to ensure healthy growth and long-term productivity, 
                    allowing you to enjoy fresh, nutritious fruits directly from your home garden. Each plant is 
                    carefully selected and grown using natural, eco-friendly methods that promote strong roots, 
                    vibrant leaves, and consistent fruiting throughout the seasons. We offer a wide variety of fruit 
                    plants suitable for different climates, soil conditions, and growing spaces such as balconies, 
                    terraces, backyards, and farms.
                </p>
                <p className="lead">
                    Ideal for both beginners and experienced gardeners, our fruit plants are easy to maintain and 
                    designed to thrive with minimal care. Growing your own fruits provides better taste, higher 
                    nutrition, complete freshness, reduces chemical intake, and supports a healthier, more sustainable 
                    lifestyle for you and your family. By nurturing these plants, you also create a relaxing and 
                    vibrant green space that brings joy and connection to nature every day.
                </p>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center">
                <img src={Fruit} alt="Fruits" style={{ width: "400px", height: "400px" }}/>
            </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette px-5 py-4">
            <div className="col-md-7 order-md-2 ps-0 pe-5">
                <h2 className="featurette-heading fw-normal lh-1">
                    Beautiful Flower Plants
                    <span className="text-body-secondary"> - Bloom with Elegance.</span>
                </h2>
                <p className="lead">
                    Our flower plants are carefully nurtured to ensure healthy growth and long-lasting blooms, 
                    allowing you to enjoy vibrant colors and natural beauty in your home or garden. Each plant is 
                    selected and grown using eco-friendly practices that promote strong roots, lush foliage, and 
                    continuous flowering throughout the seasons. 
                </p>
                <p className="lead">
                    We offer a wide variety of flower plants suitable for different climates, soil conditions, 
                    and spaces such as balconies, terraces, gardens, and outdoor landscapes.Growing flowers 
                    enhances the beauty of your surroundings, improves mood, and creates a calm, refreshing 
                    atmosphere. By nurturing these plants, you bring natural elegance into your space while 
                    enjoying the joy, color, and fragrance of healthy, naturally grown flowers every day.
                </p>
            </div>
            <div className="col-md-5 order-md-1">
                <img src={Flower} alt="Flowers" style={{ width: "500px" }}/>
            </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette ps-5 py-4">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">
                    Nutritious Vegetable Plants 
                    <span className="text-body-secondary"> - Cultivate Health at Home.</span>
                </h2>
                <p className="lead">
                    Our vegetable plants are carefully cultivated to support healthy growth and abundant harvests, 
                    allowing you to enjoy fresh, homegrown vegetables directly from your garden. Each plant is 
                    nurtured using natural, eco-friendly methods that strengthen roots, encourage vibrant foliage, 
                    and ensure consistent productivity. We offer a wide variety of vegetable plants suited for 
                    different climates, soil types, and growing spaces, including balconies, terraces, backyards, 
                    and small farms.
                </p>
                <p className="lead">
                    Perfect for beginners and experienced gardeners alike, our vegetable plants are easy to care 
                    for and thrive with minimal effort. Growing your own vegetables ensures better taste, higher 
                    nutrition, complete freshness, and reduces reliance on store-bought produce. By cultivating 
                    these plants, you create a vibrant, green space that promotes sustainable living, supports 
                    a healthy diet, and brings the joy of harvesting your own vegetables right at home. Additionally, 
                    growing vegetables at home fosters mindfulness and a deeper connection with nature, making gardening 
                    a rewarding and fulfilling experience for the whole family.
                </p>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center">
                <img src={Vegetable} alt="Vegetables" style={{ width: "400px", height: "400px" }}/>
            </div>
        </div>
    
  </main>

  <Footer />
</>
);
}
export default About;