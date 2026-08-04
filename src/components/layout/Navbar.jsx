import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/login");
  
};
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          SkillConnect
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>

          <div className="d-flex ms-lg-3 mt-3 mt-lg-0 gap-2">

            {user ? (
              <>
                <Link
                  className="btn btn-outline-light"
                  to="/student/dashboard"
                >
                  Dashboard
                </Link>

                <button
                  className="btn btn-light text-primary"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
        ) : (
             <>
              <Link
                className="btn btn-outline-light"
                to="/login"
              >
                Login
              </Link>

              <Link
                className="btn btn-light text-primary"
                to="/register"
              >
                Register
              </Link>
            </>
          )}

          </div>
          
        </div>

      </div>
    </nav>
  );
}

export default Navbar;