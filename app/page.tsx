import Hero from "@/components/Hero";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";

function Home() {
  return (
    <div className="overflow-hidden">
      <section id="Hero">
        <Hero />
      </section>
      <section id="Camp">
        <Camp />
      </section>
      <section id="Guide">
        <Guide />
      </section>
      <section id="Features">
        <Features />
      </section>
      <section id="GetApp">
        <GetApp />
      </section>
    </div>
  );
}

export default Home;
