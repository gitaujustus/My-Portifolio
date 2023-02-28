import "./index.css";
import {BrowserRouter as BrowserRouter, Route, Routes, Outlet} from 'react-router-dom'
import Menus from "./Components/MenuBar";
import Home from "./Pages/Home";
import About from "./Components/About";
import Projects from "./Components/projects";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menus />
        <Home />
        <Routes>
          <Route>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
