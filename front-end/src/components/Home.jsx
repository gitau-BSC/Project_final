import Navbar from "./navigation/Navbar";
import About from "./About";
import HomeCarousel from "./carousel/Carousel";
import Contact from "./Contact";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeCarousel />
      <section className="hero-section">
        <h2 style={{ color: "white" }}>
          Welcome to the Hostel Management System
        </h2>
        <div className="w-full max-w-6xl mx-auto px-4 mb-8">
          <HomeCarousel />
        </div>
      </section>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
