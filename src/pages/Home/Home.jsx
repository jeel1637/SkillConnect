function Home() {
  return (
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
            <div
              className="bg-light rounded shadow d-flex align-items-center justify-content-center"
              style={{ height: "350px" }}
            >
              <h3 className="text-secondary">
                Hero Image Coming Soon
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;