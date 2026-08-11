import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getMyEnrollments,
  getCourseProgress,
} from "../../services/courseService";

function Dashboard() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);
  const [courseProgress, setCourseProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        navigate("/login");
        return;
      }

      try {
        // Get enrolled courses
        const data = await getMyEnrollments(user.id);

        if (!data.success) {
          setError(data.message);
          return;
        }

        setCourses(data.courses);

        // Get progress for every enrolled course
        const progressResults = await Promise.all(
          data.courses.map(async (course) => {
            const progressData = await getCourseProgress(
              user.id,
              course.course_id
            );

            return {
              courseId: course.course_id,
              progress: progressData.success
                ? progressData
                : null,
            };
          })
        );

        const progressMap = {};

        progressResults.forEach((item) => {
          progressMap[item.courseId] = item.progress;
        });

        setCourseProgress(progressMap);
      } catch (error) {
        console.error(error);
        setError("Failed to load dashboard.");
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, [navigate]);

  return (
    <div className="container py-5">

      {/* Header */}
      <div className="mb-4">
        <h1 className="fw-bold">
          Student Dashboard
        </h1>

        <p className="lead mb-0">
          Welcome to SkillConnect 🎉
        </p>
      </div>

      <hr className="my-4" />

      {/* Enrolled Courses */}
      <h3 className="fw-bold mb-4">
        My Enrolled Courses
      </h3>

      {/* Loading */}
      {loading && (
        <div className="text-center py-4">
          <p className="text-muted">
            Loading your courses...
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}

      {/* No Courses */}
      {!loading &&
        !error &&
        courses.length === 0 && (
          <div className="alert alert-info">
            You haven't enrolled in any course yet.
          </div>
        )}

      {/* Course Cards */}
      {!loading && !error && courses.length > 0 && (
        <div className="row g-4">

          {courses.map((course) => {
            const progress =
              courseProgress[course.course_id];

            const progressPercent =
              progress?.progress ?? 0;

            const completedLessons =
              progress?.completed_lessons ?? 0;

            const totalLessons =
              progress?.total_lessons ?? 0;

            const isCompleted =
              progress?.completed ?? false;

            return (
              <div
                className="col-12 col-md-6 col-lg-4"
                key={course.enrollment_id}
              >
                <div className="card shadow-sm border-0 h-100">

                  <div className="card-body d-flex flex-column p-4">

                    {/* Course Title */}
                    <h5 className="fw-bold mb-2">
                      {course.title}
                    </h5>

                    {/* Category */}
                    <p className="text-primary mb-2">
                      {course.category}
                    </p>

                    {/* Description */}
                    <p className="text-muted">
                      {course.description}
                    </p>

                    {/* Enrollment Date */}
                    <p className="small text-muted mb-3">
                      Enrolled: {course.enrollment_date}
                    </p>

                    {/* Progress */}
                    <div className="mt-auto">

                      <div className="d-flex justify-content-between mb-2">
                        <span className="small fw-semibold">
                          Progress
                        </span>

                        <span className="small fw-semibold">
                          {progressPercent}%
                        </span>
                      </div>

                      <div
                        className="progress mb-2"
                        style={{ height: "10px" }}
                      >
                        <div
                          className={`progress-bar ${
                            isCompleted
                              ? "bg-success"
                              : "bg-primary"
                          }`}
                          role="progressbar"
                          style={{
                            width: `${progressPercent}%`,
                          }}
                          aria-valuenow={progressPercent}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>

                      <p className="small text-muted mb-3">
                        {completedLessons} /{" "}
                        {totalLessons} Lessons Completed
                      </p>

                      {/* Completed Message */}
                      {isCompleted && (
                        <div className="alert alert-success py-2 text-center">
                          <strong>
                            🎉 Course Completed!
                          </strong>
                        </div>
                      )}

                      {/* Continue / Review */}
                      <button
                        className={`btn w-100 ${
                          isCompleted
                            ? "btn-outline-success"
                            : "btn-primary"
                        }`}
                        onClick={() =>
                          navigate(
                            `/courses/${course.course_id}/learn`
                          )
                        }
                      >
                        {isCompleted
                          ? "Review Course"
                          : "Continue Learning"}
                      </button>

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

export default Dashboard;