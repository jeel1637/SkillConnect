import { useEffect, useState } from "react";
import { getCourses } from "../../services/courseService";
import CourseCard from "../../components/CourseCard";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const data = await getCourses();

    if (data.success) {
      setCourses(data.courses);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">
        All Courses
      </h1>

      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Courses;