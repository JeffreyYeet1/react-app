import NavBar from "./components/NavBar";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import { Route, Routes} from "react-router-dom";

function App(){
  return(
    <>
      <NavBar />
      <div className = "container">
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/about' element = {<About />} />
          <Route path = '/experience' element = {<Experience />} />
          <Route path = '/projects' element = {<Projects />} />
        </Routes>
      </div>
    </>
  );
}
export default App;