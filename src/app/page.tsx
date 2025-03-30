import { ContactSection } from "@/components/HomePage/Contact";
import { CustomerReviewsSection } from "@/components/HomePage/Customer";
import { Footer } from "@/components/HomePage/Footer";
import HeroHeader from "@/components/HomePage/Hero";
import { ArtSection, MinecraftTrailerSection, ThumbnailsSection, VideosSection } from "@/components/HomePage/Slider";

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
