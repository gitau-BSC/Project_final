import Navbar from "../components/layout/Navbar";
import About from "./About";
import Carousel from "../components/layout/Carousel";
import Contact from "./Contact";
import Footer from "../components/layout/Footer";
function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <section className="hero-section">
        <h2 style={{ color: "white" }}>
          Welcome to the Hostel Management System
        </h2>
        <div className="w-full max-w-6xl mx-auto px-4 mb-8">
          <Carousel />
        </div>
      </section>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
