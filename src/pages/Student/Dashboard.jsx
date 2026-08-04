import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="container py-5">

      <h1>Student Dashboard</h1>

      <p>Welcome to SkillConnect 🎉</p>

      <button
        className="btn btn-danger mt-3"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>
  );
}

export default Dashboard;