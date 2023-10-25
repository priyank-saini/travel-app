import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide"
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <Camp/>
      <Guide/>
      <Features/>
      <GetApp/>
    </div>
  );
}

export default Home;
