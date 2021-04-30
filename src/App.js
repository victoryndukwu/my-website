import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
// import { LoadingPage } from "./Pages/LoadingPage/LoadingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <LoadingPage /> */}
        <Route path="/" exact component={Home} />
        <Portfolio/>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
