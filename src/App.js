import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/system";
import Home from "./pages/Home";
import ExericiseDetail from "./pages/ExericiseDetail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exericise/:id" element={<ExericiseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
