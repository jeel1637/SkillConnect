const API_URL = "http://localhost/skillconnect-api/courses";

export const getMyEnrollments = async (userId) => {
  const response = await fetch(
    `${API_URL}/my-enrollments.php?user_id=${userId}`
  );

  const data = await response.json();

  return data;
};

export const getCourses = async () => {
  const response = await fetch(`${API_URL}/get-all.php`);

  const data = await response.json();

  return data;
};

export const getCourseById = async (id) => {
  const response = await fetch(
    `${API_URL}/get-one.php?id=${id}`
  );

  const data = await response.json();

  return data;
};

export const getLessons = async (courseId) => {
  const response = await fetch(
    `${API_URL}/get-lessons.php?course_id=${courseId}`
  );

  const data = await response.json();

  return data;
};

export const completeLesson = async (userId, lessonId) => {
  const response = await fetch(
    `${API_URL}/complete-lesson.php`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        lesson_id: lessonId,
      }),
    }
  );

  const data = await response.json();

  return data;
};

export const getProgress = async (userId, courseId) => {
  const response = await fetch(
    `${API_URL}/get-progress.php?user_id=${userId}&course_id=${courseId}`
  );

  const data = await response.json();

  return data;
};

export const getCourseProgress = async (userId, courseId) => {
  const response = await fetch(
    `${API_URL}/get-course-progress.php?user_id=${userId}&course_id=${courseId}`
  );

  const data = await response.json();

  return data;
};

export const enrollCourse = async (userId, courseId) => {
  const response = await fetch(`${API_URL}/enroll.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: userId,
      course_id: courseId,
    }),
  });

  const data = await response.json();

  return data;
};