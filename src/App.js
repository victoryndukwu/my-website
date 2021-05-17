import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import Portfolio from "./Components/Portfolio/Portfolio";
import { AnimatePresence } from "framer-motion";
// import { LoadingPage } from "./Pages/LoadingPage/LoadingPage";

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <Router>
          <Navbar />
          {/* <LoadingPage /> */}
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Footer />
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
