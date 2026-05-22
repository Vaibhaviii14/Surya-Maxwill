import Navbar from "../components/Home/Navbar";
import CourtList from "../components/explore/courts/CourtList";
import TournamentTabs from "../components/explore/tournaments/TournamentTabs";
import Footer from "../components/Footer/Footer";
import "../styles/explore.css";

function ExplorePage() {
  return (
    <>
      <Navbar />
      <div className="explore-wrapper">
        <div className="explore-header">
          <h1 className="explore-title font-oi font-normal text-7xl tracking-[2px] leading-[1.1] text-white">The Arena Collection.</h1>
          <p className="explore-subtitle font-special-elite">
            Explore our curated selection of premium courts. View real-time availability,
            compare surfaces, and secure your spot in seconds.
          </p>
        </div>

        {/* Section One: The Court Directory */}
        <CourtList />

        {/* Section Two: The Tournament Hub */}
        <TournamentTabs />
      </div>
      <Footer />
    </>
  );
}

export default ExplorePage;
