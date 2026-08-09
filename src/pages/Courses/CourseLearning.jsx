import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getLessons,
  completeLesson,
} from "../../services/courseService";

function CourseLearning() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [completedLessons, setCompletedLessons] = useState([]);

  const handleCompleteLesson = async (lessonId) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
    return;
  }

  try {
    const data = await completeLesson(user.id, lessonId);

    if (data.success) {
      setCompletedLessons((prev) => {
        if (prev.includes(lessonId)) {
          return prev;
        }

        return [...prev, lessonId];
      });
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Failed to mark lesson as completed.");
  }
};

  useEffect(() => {
    const loadLessons = async () => {
      try {
        const data = await getLessons(id);

        if (data.success) {
          setLessons(data.lessons);
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.error(error);
        setError("Failed to load lessons.");
      } finally {
        setLoading(false);
      }
    };

    loadLessons();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h4>Loading lessons...</h4>
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

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">
          Course Learning
        </h1>

        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/student/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>

      <h3 className="mb-4">
        Lessons
      </h3>

      {lessons.length === 0 ? (
        <div className="alert alert-info">
          No lessons available for this course.
        </div>
      ) : (
        <div className="row">
          {lessons.map((lesson, index) => (
            <div
              className="col-md-6 mb-4"
              key={lesson.id}
            >
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">

                  <span className="badge bg-primary mb-3">
                    Lesson {index + 1}
                  </span>

                  <h5 className="fw-bold">
                    {lesson.title}
                  </h5>

                  <p className="text-muted">
                    {lesson.description}
                  </p>

                  <div className="d-flex justify-content-center gap-2">

  <button
    className="btn btn-primary"
    onClick={() =>
      window.open(
        lesson.video_url,
        "_blank"
      )
    }
  >
    Start Lesson
  </button>

  {completedLessons.includes(Number(lesson.id)) ? (
    <button
      className="btn btn-success"
      disabled
    >
      ✓ Completed
    </button>
  ) : (
    <button
      className="btn btn-outline-success"
      onClick={() =>
        handleCompleteLesson(Number(lesson.id))
      }
    >
      Mark as Complete
    </button>
  )}

</div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default CourseLearning;