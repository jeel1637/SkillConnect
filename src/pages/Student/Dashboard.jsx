import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyEnrollments } from "../../services/courseService";

function Dashboard() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEnrollments = async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        navigate("/login");
        return;
      }

      try {
        const data = await getMyEnrollments(user.id);

        if (data.success) {
          setCourses(data.courses);
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error(error);
        setError("Failed to load enrolled courses.");
      } finally {
        setLoading(false);
      }
    };

    loadEnrollments();
  }, [navigate]);

  return (
    <div className="container py-5">

      <h1 className="fw-bold">
        Student Dashboard
      </h1>

      <p className="lead">
        Welcome to SkillConnect 🎉
      </p>

      <hr className="my-4" />

      <h3 className="fw-bold mb-4">
        My Enrolled Courses
      </h3>

      {loading && (
        <p>Loading your courses...</p>
      )}

      {error && (
        <p className="text-danger">
          {error}
        </p>
      )}

      {!loading && !error && courses.length === 0 && (
        <div className="alert alert-info">
          You haven't enrolled in any course yet.
        </div>
      )}

      <div className="row">
        {courses.map((course) => (
          <div
            className="col-md-6 col-lg-4 mb-4"
            key={course.enrollment_id}
          >
            <div className="card shadow-sm border-0 h-100">

              <div className="card-body">

                <h5 className="fw-bold">
                  {course.title}
                </h5>

                <p className="text-primary mb-2">
                  {course.category}
                </p>

                <p className="text-muted">
                  {course.description}
                </p>

                <p className="small text-muted">
                  Enrolled: {course.enrollment_date}
                </p>

                <button
                  className="btn btn-primary"
                  onClick={() =>
                    navigate(`/courses/${course.course_id}`)
                  }
                >
                  Continue Learning
                </button>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;