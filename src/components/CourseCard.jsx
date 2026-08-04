function CourseCard({ course }) {
  return (
    <div className="card shadow-sm h-100">

      <div className="card-body">

        <h5 className="card-title">
          {course.title}
        </h5>

        <p className="text-muted">
          {course.category}
        </p>

        <p>
          {course.description}
        </p>

        <h6 className="text-primary">
          ₹{course.price}
        </h6>

      </div>

    </div>
  );
}

export default CourseCard;