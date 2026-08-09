import { getCourseById, enrollCourse } from "../../services/courseService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [enrolling, setEnrolling] = useState(false);

  const handleEnroll = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first.");
    return;
  }

  setEnrolling(true);
  setMessage("");

  try {
    const data = await enrollCourse(user.id, course.id);

    setMessage(data.message);
  } catch (error) {
    console.error(error);
    setMessage("Enrollment failed.");
  } finally {
    setEnrolling(false);
  }
};

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

         <button
           className="btn btn-primary"
           onClick={handleEnroll}
           disabled={enrolling}
         >
           {enrolling ? "Enrolling..." : "Enroll Now"}
         </button>

         {message && (
          <p className="mt-3 text-success">
            {message}
          </p>
         )}

        </div>
      </div>
    </div>
  );
}

export default CourseDetails;