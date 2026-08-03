import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow border-0">
            <div className="card-body p-4">

              <h2 className="text-center fw-bold mb-4">
                Forgot Password
              </h2>

              <p className="text-muted text-center mb-4">
                Enter your email address and we'll send you a password reset link.
              </p>

              <form>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Send Reset Link
                </button>

              </form>

              <p className="text-center mt-3 mb-0">
                Remember your password?{" "}
                <Link to="/login">
                  Back to Login
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;