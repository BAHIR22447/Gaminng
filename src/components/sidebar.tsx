
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="sidebar_container">
            <input type="checkbox" id="check" />
            <label htmlFor="check">
                <i className="fas fa-bars" id="btn"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
            <div className="sidebar">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    <i className="fas fa-qrcode"></i>
                    <span>Home</span>
                </Link>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                    <i className="far fa-question-circle"></i>
                    <span>About</span>
                </Link>
                <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : ""}>
                    <i className="fas fa-calendar"></i>
                    <span>Portfolio</span>
                </Link>
                <Link to="/news" className={location.pathname === "/news" ? "active" : ""}>
                    <i className="fas fa-stream"></i>
                    <span>News</span>
                </Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                    <i className="fas fa-link"></i>
                    <span>Contact</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
