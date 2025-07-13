import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
// import { Link } from "react-router-dom"; // Uncomment if using routing later

function SmartLink({ to, label, useRouter = false }) {
  if (useRouter) {
    // return <Link className="nav-link" to={to}>{label}</Link>;
    return <a href={to} className="nav-link">{label} *</a>; // placeholder until router added
  }
  return <a href={to} className="nav-link">{label}</a>;
}

function Navbar({
  logo = "MyProject",
  logoImg = null,
  links = [
    { name: "Home", to: "#", useRouter: false },
    { name: "Projects", to: "#", useRouter: false },
    { name: "Contact", to: "#", useRouter: false },
  ],
}) {
  const { darkMode, toggleTheme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} shadow-sm`}
    >
      <div className="container">
        {/* LOGO */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          {logoImg ? <img src={logoImg} alt="Logo" height="30" /> : <strong>{logo}</strong>}
        </a>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {links.map((link, i) => (
              <li className="nav-item" key={i}>
                <SmartLink to={link.to} label={link.name} useRouter={link.useRouter} />
              </li>
            ))}
          </ul>

          {/* THEME TOGGLE */}
          <button
            className="btn btn-outline-secondary ms-lg-3 mt-2 mt-lg-0"
            onClick={toggleTheme}
            role="switch"
            aria-pressed={darkMode}
            aria-label="Toggle theme"
            title="Toggle light/dark mode"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
