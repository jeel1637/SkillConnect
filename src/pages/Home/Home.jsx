import heroImage from "../../assets/images/hero-education.svg";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <span className="badge bg-primary mb-3 fs-6">
                Learn • Teach • Earn
              </span>

              <h1 className="display-4 fw-bold mb-3">
                Upgrade Your Skills With
                <span className="text-primary"> SkillConnect</span>
              </h1>

              <p className="lead text-muted mb-4">
                Learn from expert mentors, teach your own skills,
                and earn by sharing your knowledge with students.
              </p>

              <button className="btn btn-primary btn-lg me-3">
                Explore Courses
              </button>

              <button className="btn btn-outline-primary btn-lg">
                Become a Mentor
              </button>
            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <img
                src={heroImage}
                alt="SkillConnect Hero"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <h2>📚</h2>
                <h4 className="fw-bold mt-3">Learn</h4>
                <p className="text-muted">
                  Access high quality courses from experienced mentors.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <h2>👨‍🏫</h2>
                <h4 className="fw-bold mt-3">Teach</h4>
                <p className="text-muted">
                  Share your knowledge and become a trusted mentor.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <h2>💰</h2>
                <h4 className="fw-bold mt-3">Earn</h4>
                <p className="text-muted">
                  Generate income by teaching students worldwide.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Categories Section */}
<section className="py-5">
  <div className="container">

    <div className="text-center mb-5">
      <h2 className="fw-bold">Popular Categories</h2>
      <p className="text-muted">
        Choose a category and start your learning journey.
      </p>
    </div>

    <div className="row g-4">

      <div className="col-md-4 col-lg-3">
        <div className="card shadow-sm border-0 text-center p-4 h-100">
          <div className="fs-1 mb-3">💻</div>
          <h5>Web Development</h5>
        </div>
      </div>

      <div className="col-md-4 col-lg-3">
        <div className="card shadow-sm border-0 text-center p-4 h-100">
          <div className="fs-1 mb-3">📱</div>
          <h5>App Development</h5>
        </div>
      </div>

      <div className="col-md-4 col-lg-3">
        <div className="card shadow-sm border-0 text-center p-4 h-100">
          <div className="fs-1 mb-3">🎨</div>
          <h5>UI / UX Design</h5>
        </div>
      </div>

      <div className="col-md-4 col-lg-3">
        <div className="card shadow-sm border-0 text-center p-4 h-100">
          <div className="fs-1 mb-3">📊</div>
          <h5>Digital Marketing</h5>
        </div>
      </div>

    </div>

  </div>
</section>
    </>
  );
}

export default Home;