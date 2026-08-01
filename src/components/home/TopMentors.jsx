function TopMentors() {
  const mentors = [
    {
      name: "Rahul Sharma",
      skill: "Full Stack Developer",
      students: "1,200+ Students",
      rating: "4.9 ⭐",
    },
    {
      name: "Priya Patel",
      skill: "UI / UX Designer",
      students: "950+ Students",
      rating: "4.8 ⭐",
    },
    {
      name: "Amit Verma",
      skill: "Digital Marketing",
      students: "800+ Students",
      rating: "4.7 ⭐",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Top Mentors</h2>
          <p className="text-muted">
            Learn from experienced professionals.
          </p>
        </div>

        <div className="row g-4">
          {mentors.map((mentor, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border-0 shadow-sm text-center h-100 p-4">

                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "90px",
                    height: "90px",
                    fontSize: "32px",
                    fontWeight: "bold",
                  }}
                >
                  {mentor.name.charAt(0)}
                </div>

                <h5>{mentor.name}</h5>
                <p className="text-muted mb-1">{mentor.skill}</p>
                <p className="mb-1">{mentor.students}</p>
                <p className="text-warning">{mentor.rating}</p>

                <button className="btn btn-outline-primary mt-3">
                  View Profile
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopMentors;