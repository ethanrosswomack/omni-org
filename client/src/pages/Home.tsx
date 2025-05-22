import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import WorkShowcase from "@/sections/WorkShowcase";
import TestimonialsSection from "@/sections/TestimonialsSection";
import ContactSection from "@/sections/ContactSection";
import CTASection from "@/sections/CTASection";
import { Helmet } from "react-helmet";

// Import the new sections we've created
import PodcastSection from "../sections/PodcastSection";
import StoreSection from "../sections/StoreSection";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Omniversal Media - Empowering Artists & Creators</title>
        <meta name="description" content="Omniversal Media is a revolutionary platform empowering independent artists through media production, digital content, and merchandise." />
        <meta property="og:title" content="Omniversal Media - Empowering Artists & Creators" />
        <meta property="og:description" content="Omniversal Media is a revolutionary platform empowering independent artists through media production, digital content, and merchandise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omniversalmedia.org" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1462331940025-496dfbfc7564" />
      </Helmet>
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkShowcase />
      <TestimonialsSection />
      <PodcastSection />
      <StoreSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
