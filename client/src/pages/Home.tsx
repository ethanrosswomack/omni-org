import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import WorkShowcase from "@/sections/WorkShowcase";
import TestimonialsSection from "@/sections/TestimonialsSection";
import ContactSection from "@/sections/ContactSection";
import CTASection from "@/sections/CTASection";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Omniversal Media - Professional Media Solutions</title>
        <meta name="description" content="Omniversal Media provides professional media production, consulting, and creative services to bring your vision to life." />
        <meta property="og:title" content="Omniversal Media - Professional Media Solutions" />
        <meta property="og:description" content="Omniversal Media provides professional media production, consulting, and creative services to bring your vision to life." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omniversalmedia.org" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1462331940025-496dfbfc7564" />
      </Helmet>
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkShowcase />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
