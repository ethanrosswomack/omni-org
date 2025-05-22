import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "250+", label: "Projects Completed" },
  { value: "45+", label: "Industry Awards" },
  { value: "100%", label: "Client Satisfaction" }
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
                Omniversal Media is a forward-thinking creative studio specializing in immersive media production, strategic consulting, and innovative digital solutions.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground"
                variants={itemVariants}
              >
                We blend cutting-edge technology with artistic vision to create compelling content that engages audiences across multiple platforms and mediums.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground"
                variants={itemVariants}
              >
                Our team of dedicated professionals brings diverse expertise in film, audio, design, and digital media to every project, ensuring exceptional results that meet your unique objectives.
              </motion.p>
              <motion.div 
                className="pt-4"
                variants={itemVariants}
              >
                <a href="#contact" className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium">
                  Learn more about our team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://pixabay.com/get/g2b4d341cf742512c4a03b698068e60dae42577c41143a98073bc5aa6d094e4137beb6af562c88ef1e2cdb9916d54f45eebaba6c8095101f6d57dcc76eff4ecb3_1280.jpg" 
                alt="Professional media production setup" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
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
        </div>
      </div>
    </section>
  );
}
