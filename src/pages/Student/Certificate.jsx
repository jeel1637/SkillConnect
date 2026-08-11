import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCourseProgress,
  getMyEnrollments,
} from "../../services/courseService";

function Certificate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCertificateData = async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        navigate("/login");
        return;
      }

      try {
        // Get enrolled courses
        const enrollmentData = await getMyEnrollments(user.id);

        if (!enrollmentData.success) {
          setError(enrollmentData.message);
          return;
        }

        const enrolledCourse = enrollmentData.courses.find(
          (item) =>
            Number(item.course_id) === Number(id)
        );

        if (!enrolledCourse) {
          setError(
            "You are not enrolled in this course."
          );
          return;
        }

        setCourse(enrolledCourse);

        // Get course progress
        const progressData = await getCourseProgress(
          user.id,
          id
        );

        if (!progressData.success) {
          setError(progressData.message);
          return;
        }

        setProgress(progressData);
      } catch (error) {
        console.error(error);
        setError(
          "Failed to load certificate data."
        );
      } finally {
        setLoading(false);
      }
    };

    loadCertificateData();
  }, [id, navigate]);

  // Loading
  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h4>Loading certificate...</h4>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger text-center">
          {error}
        </div>

        <div className="text-center">
          <button
            className="btn btn-outline-primary"
            onClick={() =>
              navigate("/student/dashboard")
            }
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Course not completed
  if (!progress?.completed) {
    return (
      <div className="container py-5">

        <div className="alert alert-warning text-center">
          <h4 className="fw-bold">
            Course Not Completed
          </h4>

          <p className="mb-3">
            Complete all lessons to unlock your
            certificate.
          </p>

          <p className="fw-bold mb-0">
            Current Progress: {progress?.progress ?? 0}%
          </p>
        </div>

        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={() =>
              navigate(`/courses/${id}/learn`)
            }
          >
            Continue Learning
          </button>
        </div>

      </div>
    );
  }

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const studentName =
    user?.name ||
    user?.username ||
    "Student";

  const completionDate =
    new Date().toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="container py-5">

      {/* Back Button */}
      <div className="mb-4">
        <button
          className="btn btn-outline-primary"
          onClick={() =>
            navigate("/student/dashboard")
          }
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Certificate */}
      <div
        className="card shadow-lg border-0"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div className="card-body p-5 text-center">

          {/* Brand */}
          <h2 className="fw-bold text-primary mb-4">
            SkillConnect
          </h2>

          <p className="text-muted mb-2">
            CERTIFICATE OF
          </p>

          <h1 className="fw-bold mb-4">
            Completion
          </h1>

          <p className="lead mb-3">
            This is to certify that
          </p>

          {/* Student Name */}
          <h2 className="fw-bold text-primary mb-4">
            {studentName}
          </h2>

          <p className="lead mb-3">
            has successfully completed
          </p>

          {/* Course */}
          <h2 className="fw-bold mb-4">
            {course.title}
          </h2>

          <p className="text-muted mb-4">
            Course Category:{" "}
            <strong>{course.category}</strong>
          </p>

          {/* Completion */}
          <div className="mb-4">
            <span className="badge bg-success fs-6 px-4 py-2">
              ✓ 100% Completed
            </span>
          </div>

          <p className="text-muted">
            Completed on {completionDate}
          </p>

          <hr className="my-4" />

          <p className="text-muted mb-0">
            Congratulations on successfully completing
            this course!
          </p>

        </div>
      </div>

    </div>
  );
}

export default Certificate;