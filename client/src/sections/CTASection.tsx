import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
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
    <section className="py-24 bg-gradient-to-r from-primary/20 to-accent/20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Next Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's collaborate to create immersive experiences that captivate your audience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="gap-2"
            >
              Start a Project
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
      </div>
    </section>
  );
}
