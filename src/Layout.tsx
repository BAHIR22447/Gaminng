import { Outlet } from "react-router-dom";
import {Navbar} from "./components/navbar";
import "./layout.css";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";

const Layout = () => {
  return (
    <div className="layout_body">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <Outlet />
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
