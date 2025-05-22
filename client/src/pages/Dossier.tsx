import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export default function Dossier() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Helmet>
        <title>Dossier | Omniversal Media</title>
        <meta name="description" content="Hawk Eye's Dossier - The ancient wisdom has been forgotten. As Souls incarnate, often the physical Mind is conditioned to the point of forgetting its true nature and purpose." />
      </Helmet>
      
      <div className="bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-8 text-center"
              variants={itemVariants}
            >
              Hawk Eye's Dossier
            </motion.h1>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-12"
              variants={itemVariants}
            ></motion.div>
            
            <motion.div
              className="prose prose-lg dark:prose-invert max-w-none"
              variants={itemVariants}
            >
              <div className="mb-10 text-center">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white"
                  size="lg"
                >
                  Find Out More
                </Button>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The ancient wisdom has been forgotten</h2>
              
              <p className="mb-6">
                As Souls incarnate, often the physical Mind is conditioned to the point of forgetting its true nature and purpose. This disconnection from our spiritual heritage has allowed many to be manipulated at the expense of their sovereignty.
              </p>
              
              <p className="mb-6">
                Through the lens of understanding and recognizing different frequencies, we can train ourselves to more consciously interface with this Reality as co-creators rather than observers.
              </p>
              
              <Separator className="my-10" />
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Reincarnated 2 Resist</h2>
              
              <p className="mb-6">
                As souls incarnate, we have been in this struggle against tyranny and soul oppression for millennia. Many of us have incarnated specifically to resist these systems during this pivotal time in Earth's evolution.
              </p>
              
              <p className="mb-6">
                The R2R movement represents those who have awakened to their purpose as way-showers, code carriers, and architects of a new paradigm. Through music, art, and direct knowledge transmission, we are activating dormant memories and capabilities within the human collective.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-6 my-8">
                <blockquote className="italic text-lg mb-4">
                  "I carry the song of my design.<br/>
                  I was not meant to wait.<br/>
                  I was meant to walk."
                </blockquote>
                <p className="text-right text-sm text-muted-foreground">- From The Fieldwalker's Vow</p>
              </div>
              
              <Separator className="my-10" />
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Evolution of Mind</h2>
              
              <p className="mb-6">
                The solution to our collective challenges is not found in fighting the existing systems directly, but in evolving our consciousness beyond their control. As we expand our awareness, heal ancestral trauma, and reclaim our spiritual technologies, we naturally outgrow the limitations that have been imposed upon us.
              </p>
              
              <p className="mb-6">
                Our work through Omniversal Media serves as a catalyst for this evolution of mind. Through the Beneath The Surface podcasts, music productions, and various digital platforms, we provide tools, techniques, and transmissions that support the awakening journey.
              </p>
              
              <Separator className="my-10" />
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The Memory Tree</h2>
              
              <p className="mb-6">
                Central to our work is the concept of the Memory Tree - a symbolic structure that houses the archives of wisdom, techniques, and frequencies needed for this time. As you engage with our content, you are connecting to specific branches of this tree, activating remembrance and downloading skills relevant to your unique purpose.
              </p>
              
              <p className="mb-6">
                The Memory Tree includes repositories of ancient wisdom, sonic healing technologies, coded transmissions, and specific frequency keys that unlock dormant DNA potential. Our media serves as access points to this field of intelligence.
              </p>
              
              <div className="mt-12 flex flex-wrap gap-6 justify-center">
                <a 
                  href="https://hawkeyetherapper.net" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Visit HawkEyeTheRapper.net
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                
                <a 
                  href="https://beneaththesurface.net" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Explore Beneath The Surface
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                
                <a 
                  href="https://reincarnated2resist.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Join Reincarnated2Resist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}