import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhySection } from "@/components/WhySection";
import { VideoDemo } from "@/components/VideoDemo";
import { ForRestaurantsSection } from "@/components/ForRestaurantsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <WhySection />
      <VideoDemo />
      <ForRestaurantsSection />
      <Footer />
    </main>
  );
}
