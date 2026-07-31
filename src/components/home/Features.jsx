function Features() {
  return (
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
  );
}

export default Features;