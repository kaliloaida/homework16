
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import WelcomeLogin from "./components/Login/WelcomeLogin";

function App() {
  const data = async (loginData) => {
    console.log(loginData);
    const response = await fetch(
      "https://login-form-react-6d986-default-rtdb.firebaseio.com/login.json",
      {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-type": "application.json",
        },
      }
    );
    const login = await response.json();
  };

  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/Login" replace />} />
        <Route path="/Login" element={<Login data={data} />} />
        <Route path="/WelcomeLogin" element={<WelcomeLogin />} />
      </Routes>
    </>
  );
}

export default App;
