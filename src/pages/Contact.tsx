import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
    <Navbar />

    <div className="container py-5 my-5">
      <h1 className="text-center mb-5">Contact Us</h1>
      <p className="text-center mb-5">
        Let your questions grow with us—message us anytime.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="card p-4 shadow-sm rounded">

            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Subject of your message" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows={4} placeholder="Write your message"></textarea>
            </div>

            <button type="submit" className="btn bg-primary w-100 text-light">Send Message</button>
            
          </form>
        </div>
      </div>

      <div className="row mt-5 text-center">

        <div className="col-md-4 mb-3">
          <i className="fa-solid fa-location-dot"></i> 
          <h5>Address</h5>
          <p>123 Plant Street, Green City, India</p>
        </div>

        <div className="col-md-4 mb-3">
          <i className="fa-solid fa-envelope"></i>
          <h5>Email</h5>
          <p>info@plantshop.com</p>
        </div>

        <div className="col-md-4 mb-3">
          <i className="fa-solid fa-phone"></i>
          <h5>Phone</h5>
          <p>+91 98765 43210</p>
        </div>

      </div>
    </div>

    <Footer />
    </>
  );
}
export default Contact;
