import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <h1 className="text-center mt-5">
            Welcome to SkillConnect
          </h1>
        }
      />
    </Routes>
  );
}

export default AppRoutes;