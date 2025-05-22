import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logoMind from "@/assets/logo-mind.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Deep space nebula background" 
          className="object-cover w-full h-full" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="w-40 h-40 mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={logoMind} 
              alt="The Solution is Evolution of the Mind" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Transforming Ideas Into Immersive Experiences
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Professional media production and creative solutions for the modern digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection("#services")}
              className="gap-2"
            >
              Our Services
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("#work")}
            >
              View Our Work
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          animate-loop={{ y: [0, -10, 0] }}
          transition-loop={{ duration: 2, repeat: Infinity }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => scrollToSection("#about")}
            className="text-foreground/75 animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
