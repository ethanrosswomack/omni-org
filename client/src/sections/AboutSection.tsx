import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import omniversalTree from "@/assets/omniversal-tree.png";

const stats = [
  { value: "2024", label: "Established" },
  { value: "5+", label: "Media Platforms" },
  { value: "Worldwide", label: "Audience Reach" },
  { value: "100%", label: "Artist Empowerment" }
];

const pillars = [
  { 
    title: "Infrastructure", 
    description: "Building the technological foundation that supports artistic expression and connection across mediums."
  },
  { 
    title: "Creative", 
    description: "Fostering innovation and artistic vision through collaborative environments and cutting-edge tools."
  },
  { 
    title: "Community", 
    description: "Creating spaces for artists and audiences to connect, share, and grow together through meaningful experiences."
  },
  { 
    title: "Commerce", 
    description: "Developing sustainable business models that ensure artists are valued and compensated for their contributions."
  }
];

export default function AboutSection() {
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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={itemVariants}
            >
              About Omniversal Media
            </motion.h2>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto"
              variants={itemVariants}
            ></motion.div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.p 
                className="text-lg text-foreground"
                variants={itemVariants}
              >
                Omniversal Media, LLC is a revolutionary media company dedicated to empowering independent artists through a multi-dimensional platform for expression, connection, and monetization.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground"
                variants={itemVariants}
              >
                Our mission is to create a platform that enables artists to reach a wider audience, monetize their talents, and inspire the world through artistic expression, storytelling, and collaboration.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground"
                variants={itemVariants}
              >
                Through our ecosystem of digital content, live events, and merchandise sales, we're building a new paradigm where creativity flourishes and artists maintain their sovereignty while connecting with global audiences.
              </motion.p>
              <motion.div 
                className="pt-4"
                variants={itemVariants}
              >
                <a href="#contact" className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium">
                  Learn more about our vision
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center items-center"
            >
              <img 
                src={omniversalTree} 
                alt="The Omniversal Aether - Tree of Life" 
                className="rounded-xl shadow-lg w-full max-w-md h-auto" 
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-accent text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              variants={itemVariants}
            >
              The Five Pillars of Omniversal Media
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-xl font-bold mb-3 text-primary">{pillar.title}</h4>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
