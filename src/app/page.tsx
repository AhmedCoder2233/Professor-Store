import { ContactSection } from "@/HomePage/Contact";
import { CustomerReviewsSection } from "@/HomePage/Customer";
import { Footer } from "@/HomePage/Footer";
import HeroHeader from "@/HomePage/Hero";
import { ArtSection, MinecraftTrailerSection, ThumbnailsSection, VideosSection } from "@/HomePage/Slider";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <HeroHeader/>
    <ThumbnailsSection/>
    <VideosSection/>
    <ArtSection/>
    <MinecraftTrailerSection/>
    <CustomerReviewsSection/>
    <ContactSection/>
    <Footer/>
   </div>
  );
}
