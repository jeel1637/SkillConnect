function FeaturedCourses() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Courses</h2>
          <p className="text-muted">
            Start learning with our most popular courses.
          </p>
        </div>

        <div className="row g-4">
          {[
            {
              title: "React Development",
              mentor: "John Doe",
              price: "₹999",
            },
            {
              title: "UI/UX Design",
              mentor: "Jane Smith",
              price: "₹799",
            },
            {
              title: "Digital Marketing",
              mentor: "Alex Johnson",
              price: "₹699",
            },
          ].map((course, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div
                  className="bg-secondary text-white d-flex align-items-center justify-content-center"
                  style={{ height: "180px" }}
                >
                  Course Image
                </div>

                <div className="card-body">
                  <h5>{course.title}</h5>
                  <p className="text-muted mb-2">
                    Mentor: {course.mentor}
                  </p>
                  <h6 className="text-primary">{course.price}</h6>

                  <button className="btn btn-primary w-100 mt-3">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;