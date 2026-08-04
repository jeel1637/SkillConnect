import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();



  return (
    <div className="container py-5 text-center">

    <h1 className="fw-bold">
        Student Dashboard
    </h1>

    <p className="lead">
        Welcome to SkillConnect 🎉
    </p>

    </div>
  );
}

export default Dashboard;