import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones } from "lucide-react";
import quoteHowl from "@/assets/quote-howl.jpg";
import podcastBanner from "@/assets/podcast-banner.jpg";

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
    <>
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Headphones className="h-6 w-6 text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold">Beneath The Surface</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Dive deeper with our podcast exploring consciousness, spiritual growth, and the interconnected nature of our reality. Join us for thought-provoking conversations with visionaries, healers, and change-makers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="gap-2"
                  onClick={() => window.open('#', '_blank')}
                >
                  Listen Now
                  <Headphones className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('#', '_blank')}
                >
                  View Episodes
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2 flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src={podcastBanner} 
                alt="Beneath The Surface Podcast" 
                className="rounded-xl shadow-lg max-w-full w-full md:max-w-md"
              />
            </motion.div>
          </div>
        </div>
      </section>
    
      <section className="py-16 bg-background relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-lg mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={quoteHowl} 
              alt="Howl so your tribe can hear you" 
              className="mx-auto mb-8 max-w-xs"
            />
            <p className="text-xl md:text-2xl text-primary font-medium italic mb-6">
              "Howl so your tribe can hear you."
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground">
              Find your authentic voice and connect with those who resonate with your message.
            </p>
          </motion.div>
        </div>
      </section>
      
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
    </>
  );
}
