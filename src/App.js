import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { Blog } from "./Pages/Blog/Blog";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
