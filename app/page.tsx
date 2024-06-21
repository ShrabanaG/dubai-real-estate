import Amenities from "@/components/amenities/Amenities";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Header from "@/components/header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main-container">
      <Header />
      <Features />
      <Amenities />
      <Gallery />
      <Footer />
    </main>
  );
}
