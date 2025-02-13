import Navbar from "./Navbar";
import About from "./About";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Footer from "./Footer";

const images = [
  '/assets/hostel3.jpg',
  '/assets/hostel.jpg',
  '/assets/img1.jpeg',
  '/assets/img2.jpeg',
  '/assets/img3.jpeg',
  '/assets/img5.jpeg',
];


function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <h2 style={{ color: 'white' }}>Welcome to the Hostel Management System</h2>
            <h1>Carousel is working!</h1>
            <About /> 
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
