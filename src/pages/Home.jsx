import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Card
        title="Mountain Retreat"
        description="A peaceful eco-friendly stay in the mountains."
      />

      <Card
        title="Forest Cottage"
        description="Experience nature with sustainable living."
      />

      <Footer />
    </>
  );
}

export default Home;