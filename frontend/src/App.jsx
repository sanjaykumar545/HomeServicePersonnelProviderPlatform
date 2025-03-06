import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";  // Import Routes
//import "./styles/app.css";  // ✅ Ensure Tailwind CSS is applied globally

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
