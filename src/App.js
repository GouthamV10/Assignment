import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Screen1 from "./views/Screen1";
import Screen2 from "./views/Screen2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Screen1 />} />
          <Route path="/screen2" element={<Screen2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
