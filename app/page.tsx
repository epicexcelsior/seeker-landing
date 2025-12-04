import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhySection } from "@/components/WhySection";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-seeker-gold selection:text-black">
      <Navbar />
      <Hero />
      <WhySection />
      <Waitlist />
      <Footer />
    </main>
  );
}
