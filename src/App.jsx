import About from "./layout/About";
import Footer from "./layout/Footer";
import Intro from "./layout/Intro";
import Navbar from "./layout/Navbar";
import Simplify from "./layout/Simplify";
import Testimonials from "./layout/Testimonials";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
        <Intro />
      </div>
      <About />
      <Testimonials />
      <Simplify />
      <Footer />
    </div>
  );
}

export default App;
