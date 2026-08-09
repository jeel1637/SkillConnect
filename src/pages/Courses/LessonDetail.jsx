import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getLessons } from "../../services/courseService";

function LessonDetail() {
  const { id, lessonId } = useParams();
  const navigate = useNavigate();

  const [lesson, setLesson] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadLesson = async () => {
      try {
        const data = await getLessons(id);

        if (!data.success) {
          setError(data.message);
          return;
        }

        setLessons(data.lessons);

        const selectedLesson = data.lessons.find(
          (item) => Number(item.id) === Number(lessonId)
        );

        if (!selectedLesson) {
          setError("Lesson not found.");
          return;
        }

        setLesson(selectedLesson);
      } catch (error) {
        console.error(error);
        setError("Failed to load lesson.");
      } finally {
        setLoading(false);
      }
    };

    loadLesson();
  }, [id, lessonId]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h4>Loading lesson...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger text-center">
          {error}
        </div>

        <div className="text-center">
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate(`/courses/${id}/learn`)}
          >
            Back to Course
          </button>
        </div>
      </div>
    );
  }

  const currentIndex = lessons.findIndex(
    (item) => Number(item.id) === Number(lessonId)
  );

  const previousLesson =
    currentIndex > 0 ? lessons[currentIndex - 1] : null;

  const nextLesson =
    currentIndex < lessons.length - 1
      ? lessons[currentIndex + 1]
      : null;

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold mb-0">
          Lesson {lesson.lesson_order}
        </h1>

        <button
          className="btn btn-outline-primary"
          onClick={() => navigate(`/courses/${id}/learn`)}
        >
          Back to Course
        </button>
      </div>

      {/* Lesson Card */}
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body p-4">

          <span className="badge bg-primary mb-3">
            Lesson {lesson.lesson_order}
          </span>

          <h2 className="fw-bold mb-3">
            {lesson.title}
          </h2>

          <p className="text-muted">
            {lesson.description}
          </p>

          {/* Video */}
          {lesson.video_url && (
            <div className="mt-4 text-center">
              <a
                href={lesson.video_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                ▶ Watch Lesson Video
              </a>
            </div>
          )}

        </div>
      </div>

      {/* Navigation */}
      <div className="d-flex justify-content-between">

        {previousLesson ? (
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              navigate(
                `/courses/${id}/learn/${previousLesson.id}`
              )
            }
          >
            ← Previous Lesson
          </button>
        ) : (
          <div />
        )}

        {nextLesson ? (
          <button
            className="btn btn-primary"
            onClick={() =>
              navigate(
                `/courses/${id}/learn/${nextLesson.id}`
              )
            }
          >
            Next Lesson →
          </button>
        ) : (
          <button
            className="btn btn-success"
            onClick={() => navigate(`/courses/${id}/learn`)}
          >
            ✓ Finish Course
          </button>
        )}

      </div>

    </div>
  );
}

export default LessonDetail;