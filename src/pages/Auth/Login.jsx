function Login() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow border-0">
            <div className="card-body p-4">

              <h2 className="text-center fw-bold mb-4">
                Login
              </h2>

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

                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
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

                  <a href="/forgot-password">
                    Forgot Password?
                  </a>
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