import { 
  Film, 
  Radio, 
  Headphones, 
  Palette, 
  Glasses, 
  AtSign 
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Film />,
    title: "Video Production",
    description: "Professional video content from concept to final edit, including filming, direction, and post-production.",
    features: [
      "Commercials & Promotional Videos",
      "Documentary & Corporate Films",
      "Motion Graphics & Animation"
    ]
  },
  {
    icon: <Radio />,
    title: "Livestream Production",
    description: "End-to-end livestreaming solutions for events, conferences, and performances with multi-camera setups.",
    features: [
      "Multi-Platform Broadcasting",
      "Real-Time Graphics & Overlays",
      "Interactive Audience Features"
    ]
  },
  {
    icon: <Headphones />,
    title: "Audio Production",
    description: "Professional audio services including recording, mixing, mastering, and sound design.",
    features: [
      "Podcast Production & Editing",
      "Voice-Over & Narration",
      "Original Music Composition"
    ]
  },
  {
    icon: <Palette />,
    title: "Creative Direction",
    description: "Strategic creative guidance to develop compelling concepts and cohesive multimedia campaigns.",
    features: [
      "Brand Storytelling",
      "Content Strategy Development",
      "Visual Identity Consulting"
    ]
  },
  {
    icon: <Glasses />,
    title: "Immersive Media",
    description: "Cutting-edge AR/VR experiences and interactive installations for brands and events.",
    features: [
      "Virtual Reality Experiences",
      "Augmented Reality Applications",
      "Interactive Installations"
    ]
  },
  {
    icon: <AtSign />,
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to amplify your content and connect with your audience.",
    features: [
      "Social Media Strategy",
      "Content Distribution Planning",
      "Analytics & Performance Tracking"
    ]
  }
];

export default function ServicesSection() {
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
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
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
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive media solutions tailored to your unique vision and objectives.
          </motion.p>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-background rounded-xl p-6 border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              transition={{ delay: index * 0.05 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
