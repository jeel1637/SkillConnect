import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const [message, setMessage] = useState("");
const navigate = useNavigate();

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    setMessage("Please enter email and password.");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost/skillconnect-api/auth/login.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
      setMessage(data.message);

      // User data save in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      console.log("Login Success:", data.user);
      navigate("/student/dashboard");
      
    } else {
      setMessage(data.message);
    }
  } catch (error) {
    console.error(error);
    setMessage("Server connection failed.");
  }
};
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow border-0">
            <div className="card-body p-4">

              <h2 className="text-center fw-bold mb-4">
                Login
              </h2>

              {message && (
                <div className="alert alert-danger">
                {message}
                </div>
              )}

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="remember"
                    >
                      Remember me
                    </label>
                  </div>

                  <Link to="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  className="btn btn-primary w-100"
                  type="submit"
                >
                  Login
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;