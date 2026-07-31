function Categories() {
  return (
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
  );
}

export default Categories;