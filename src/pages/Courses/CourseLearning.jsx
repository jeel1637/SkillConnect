import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getLessons,
  completeLesson,
  getProgress,
} from "../../services/courseService";

function CourseLearning() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [completedLessons, setCompletedLessons] = useState([]);

  // Mark lesson as complete
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

  // Load lessons
  useEffect(() => {
  const loadCourseData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const lessonsData = await getLessons(id);

      if (!lessonsData.success) {
        setError(lessonsData.message);
        return;
      }

      setLessons(lessonsData.lessons);

      const progressData = await getProgress(user.id, id);

      if (progressData.success) {
        const completedIds = progressData.progress
          .filter((item) => Number(item.completed) === 1)
          .map((item) => Number(item.lesson_id));

        setCompletedLessons(completedIds);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to load course data.");
    } finally {
      setLoading(false);
    }
  };

  loadCourseData();
}, [id, navigate]);

  // Loading
  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h4>Loading lessons...</h4>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">
          {error}
        </div>
      </div>
    );
  }

  // Progress calculation
  const completedCount = completedLessons.length;
  const totalLessons = lessons.length;

  const progress =
    totalLessons > 0
      ? Math.round((completedCount / totalLessons) * 100)
      : 0;

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="fw-bold mb-0">
          Course Learning
        </h1>

        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/student/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>

      {/* Course Progress */}
      <div className="mb-5">

        <h3 className="fw-bold text-center mb-3">
          Course Progress
        </h3>

        <div
          className="progress"
          style={{ height: "30px" }}
        >
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {completedCount} / {totalLessons} Lessons Completed
          </div>
        </div>

      </div>

      {/* Lessons Heading */}
      <h2 className="fw-bold text-center mb-4">
        Lessons
      </h2>

      {/* No lessons */}
      {lessons.length === 0 ? (
        <div className="alert alert-info text-center">
          No lessons available for this course.
        </div>
      ) : (
        <div className="row g-4">

          {lessons.map((lesson, index) => {

            const isCompleted = completedLessons.includes(
              Number(lesson.id)
            );

            return (
              <div
                className="col-12 col-md-6"
                key={lesson.id}
              >

                <div className="card shadow-sm border-0 h-100">

                  <div className="card-body d-flex flex-column text-center p-4">

                    {/* Lesson Number */}
                    <div className="mb-3">
                      <span className="badge bg-primary px-3 py-2">
                        Lesson {index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="fw-bold mb-3">
                      {lesson.title}
                    </h4>

                    {/* Description */}
                    <p className="text-muted mb-4">
                      {lesson.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-auto d-flex justify-content-center align-items-center gap-2 flex-wrap">

                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          navigate(
                            `/courses/${id}/learn/${lesson.id}`
                          )
                        }
                      >
                        Start Lesson
                      </button>

                      {!isCompleted ? (
                        <button
                          className="btn btn-outline-success"
                          onClick={() =>
                            handleCompleteLesson(lesson.id)
                          }
                        >
                          Mark as Complete
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          disabled
                        >
                          ✓ Completed
                        </button>
                      )}

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}

export default CourseLearning;