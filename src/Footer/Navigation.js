import { Link } from "react-router-dom";

export default function Navigation() {
  return (

    <div className="Nav-bar">
        
      <div className="Logo">
        <h2 id="aboutP">AiiQA FlexPay</h2>
        <p>
          India's first EMI‑based QA and development services. Build with
          confidence, pay with flexibility.
        </p>
      </div>

      <div>
        <h2>Servises</h2>

        <Link to="/Services">Early Startup Package </Link>
        <Link to="/Services">Equity Partnership</Link>
        <Link to="/Services">Digital Marketing</Link>
      </div>

      <div>
        <h2>Company</h2>
        <Link to="/Company">Company</Link>
      </div>

      <div>
        <h2>Contact</h2>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
}
