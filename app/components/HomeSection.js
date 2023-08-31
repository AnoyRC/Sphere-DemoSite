import Navbar from "./Home/Navbar";
import Header_1 from "./Home/Header_1";
import Carousel from "./Home/Carousel";
import SocialProof from "./Home/SocialProof";
import Features_1 from "./Home/Features_1";
import BackerSection from "./Home/BackerSection";

export default function HomeSection() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Header_1 />
      <Carousel />
      <SocialProof />
      <Features_1 />
      <BackerSection />
    </main>
  );
}
