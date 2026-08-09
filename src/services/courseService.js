const API_URL = "http://localhost/skillconnect-api/courses";

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