import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Home/Hero";
import Philosophy from "./components/Home/Philosophy";
import Navbar from "./components/Home/Navbar";
import Experience from "./components/Home/Experience";
import Courts from "./components/Home/Courts";
import ShopSection from "./components/Home/ShopSection";
import CoachesIntro from "./components/Home/CoachesIntro";
import Testimonials from "./components/Home/Testimonials";
import MembershipCTA from "./components/Home/MembershipCTA";
import Footer from "./components/Footer/Footer"
import Shop from "./components/Shop/Shop";

const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <Philosophy />
    <Experience />
    <Courts />   
    <ShopSection /> 
    <CoachesIntro />
    <Testimonials />
    <MembershipCTA />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;