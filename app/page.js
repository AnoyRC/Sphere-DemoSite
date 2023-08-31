import Image from "next/image";
import Navbar from "./components/Home/Navbar";
import Header_1 from "./components/Home/Header_1";
import Carousel from "./components/Home/Carousel";
import SocialProof from "./components/Home/SocialProof";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Header_1 />
      <Carousel />
      <SocialProof />
    </main>
  );
}
