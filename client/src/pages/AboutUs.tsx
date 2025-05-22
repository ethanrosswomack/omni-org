import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export default function AboutUs() {
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
        <title>About Us | Omniversal Media & The Omniversal News Network</title>
        <meta name="description" content="Omniversal Media functions as a bridge between you, the end user, and the Code Carriers that we bring to you via our Beneath The Surface podcasts, music, and blog. Teaming up with the Omniversal News Network we seek to distribute the necessary information sets your soul needs." />
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
              About Omniversal Media
            </motion.h1>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-12"
              variants={itemVariants}
            ></motion.div>
            
            <motion.div
              className="prose prose-lg dark:prose-invert max-w-none"
              variants={itemVariants}
            >
              <p className="text-xl mb-6">
                Omniversal Media functions as a bridge between you, the end user, and the Code Carriers that we bring to you via our Beneath The Surface podcasts, music, and blog.
              </p>
              
              <p className="text-xl mb-8">
                Teaming up with the Omniversal News Network we seek to distribute the necessary information sets your soul needs.
              </p>
              
              <Separator className="my-10" />
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
              
              <p className="mb-6">
                We believe that through the evolution of mind, we can resist the current paradigm of extraction and control, and instead build a new world based on sovereignty, connection, and unity consciousness.
              </p>
              
              <p className="mb-6">
                Through our various platforms including Beneath The Surface podcasts, the Reincarnated.Store, and HawkEyeTheRapper's music, we are continuously working to provide catalysts for awakening and the tools for transformation.
              </p>
              
              <Separator className="my-10" />
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The Omniversal Aether</h2>
              
              <p className="mb-6">
                At the core of our work is the concept of the Omniversal Aether - the substrate of consciousness that connects all beings across dimensions and timelines. Our media serves as access points to this field, allowing for the transmission of higher frequency information that catalyzes healing and awakening.
              </p>
              
              <p className="mb-6">
                Through music, spoken word, interviews, and written content, we aim to provide the keys that unlock dormant aspects of your consciousness, reconnecting you with your higher purpose and multidimensional nature.
              </p>
              
              <Separator className="my-10" />
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Philosophy</h2>
              
              <p className="mb-6">
                We operate on the principle that "The Solution is Evolution of the Mind." This means that true transformation begins within each individual as they expand their consciousness beyond the limiting beliefs and patterns imposed by external systems.
              </p>
              
              <p className="mb-6">
                Our approach integrates ancestral wisdom with cutting-edge understanding of consciousness, creating a bridge between ancient technologies of spirit and modern tools for awakening. We honor all paths that lead to greater awareness, sovereignty, and connection.
              </p>
              
              <blockquote className="bg-card border-l-4 border-primary p-6 my-8 italic">
                "Howl so your tribe can hear you. You fully in your Magic is the Medicine for this Earth."
              </blockquote>
              
              <Separator className="my-10" />
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join The Movement</h2>
              
              <p className="mb-6">
                If you resonate with our mission, we invite you to explore our various platforms, connect with our community, and participate in the co-creation of a new paradigm. Together, we can build a world that honors the sovereignty of all beings and nurtures the full expression of our creative potential.
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center gap-6 mt-8">
                <a 
                  href="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md text-center transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="https://beneaththesurface.net" 
                  className="bg-card hover:bg-card/90 border border-border py-3 px-6 rounded-md text-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Beneath The Surface
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}