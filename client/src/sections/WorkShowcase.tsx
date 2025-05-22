import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Work categories for filtering
const categories = [
  { id: "all", label: "All Projects" },
  { id: "video", label: "Video Production" },
  { id: "livestream", label: "Livestreaming" },
  { id: "audio", label: "Audio" },
  { id: "immersive", label: "Immersive" },
  { id: "marketing", label: "Digital Marketing" }
];

// Work items
const workItems = [
  {
    id: 1,
    title: "Galaxy Immersive Experience",
    description: "Interactive VR installation for science museum",
    category: "immersive",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450"
  },
  {
    id: 2,
    title: "Corporate Brand Film",
    description: "Cinematic brand story for tech company",
    category: "video",
    image: "https://images.unsplash.com/photo-1533488409924-8e0fac06b4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450"
  },
  {
    id: 3,
    title: "Cosmic Soundscape Series",
    description: "Immersive audio experience for planetarium",
    category: "audio",
    image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450"
  },
  {
    id: 4,
    title: "Global Tech Conference",
    description: "Multi-platform livestreaming solution",
    category: "livestream",
    image: "https://pixabay.com/get/ga3ca413cfa513f7c12496e47665f91ee0d0c0050e738749122e8806dff7008d603672032bcf174f7c051522bb7f8d0bed238bba2430e7f8b8f2e0abc7a6453ae_1280.jpg"
  },
  {
    id: 5,
    title: "Integrated Social Campaign",
    description: "Cross-platform marketing strategy",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450"
  },
  {
    id: 6,
    title: "AR Star Navigation",
    description: "Educational augmented reality app",
    category: "immersive",
    image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=450"
  }
];

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredWork = activeCategory === "all"
    ? workItems
    : workItems.filter(item => item.category === activeCategory);

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
    <section id="work" className="py-24 bg-background">
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
            Our Work
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Explore our portfolio of innovative projects and creative collaborations.
          </motion.p>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
        
        <div className="flex overflow-x-auto pb-4 mb-6 space-x-4 scrollbar-hide">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className="whitespace-nowrap"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredWork.map((item, index) => (
            <motion.div 
              key={item.id}
              className="group overflow-hidden rounded-xl relative"
              variants={itemVariants}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary bg-primary/20 px-2 py-1 rounded-full">
                      {categories.find(cat => cat.id === item.category)?.label || item.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="inline-flex items-center gap-2">
            View Full Portfolio
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
