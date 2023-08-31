import Image from "next/image";
import Navbar from "./components/Home/Navbar";
import Header_1 from "./components/Home/Header_1";
import Carousel from "./components/Home/Carousel";
import SocialProof from "./components/Home/SocialProof";
import Features_1 from "./components/Home/Features_1";
import BackerSection from "./components/Home/BackerSection";

export default function Home() {
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
