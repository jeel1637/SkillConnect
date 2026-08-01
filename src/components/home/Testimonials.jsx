function Testimonials() {
  const testimonials = [
    {
      name: "Ankit Patel",
      role: "Web Development Student",
      review:
        "SkillConnect helped me learn React from experienced mentors. The courses are amazing!",
    },
    {
      name: "Sneha Sharma",
      role: "UI/UX Student",
      review:
        "The mentors explain concepts very clearly. I highly recommend SkillConnect.",
    },
    {
      name: "Rahul Verma",
      role: "Digital Marketing Student",
      review:
        "I improved my skills and even started freelancing after completing the courses.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">What Our Students Say</h2>
          <p className="text-muted">
            Real feedback from our learners.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border-0 shadow-sm h-100 p-4">
                <h5>{item.name}</h5>
                <small className="text-primary">{item.role}</small>

                <p className="text-muted mt-3">
                  "{item.review}"
                </p>

                <div className="text-warning fs-5">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;