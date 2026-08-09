import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseById } from "../../services/courseService";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCourse = async () => {
      try {
        const data = await getCourseById(id);

        if (data.success) {
          setCourse(data.course);
        } else {
          setError(data.message);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load course.");
      } finally {
        setLoading(false);
      }
    };

    loadCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h4>Loading course...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h4 className="text-danger">{error}</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">

          <h1 className="fw-bold mb-3">
            {course.title}
          </h1>

          <p className="text-primary fw-semibold">
            {course.category}
          </p>

          <p className="text-muted">
            {course.description}
          </p>

          <h4 className="text-success mb-4">
            ₹{course.price}
          </h4>

          <button className="btn btn-primary">
            Enroll Now
          </button>

        </div>
      </div>
    </div>
  );
}

export default CourseDetails;