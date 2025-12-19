import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-dark bg-gradient text-white mt-5">
        <div className="container py-4">

            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <Link className="nav-link px-3 text-white" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link px-3 text-white" to="/">Features</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link px-3 text-white" to="/">Pricing</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link px-3 text-white" to="/">Images</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link px-3 text-white" to="/">FAQs</Link>
                </li>
            </ul>
                       
            <p className="text-center text-white">
                © 2025 Plant Shop • Growing Nature With You 🌿
            </p>
            
        </div>
      </footer>
    </>
  );
}
export default Footer;
