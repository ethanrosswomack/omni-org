import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Headphones, Play, Podcast, ExternalLink } from "lucide-react";

// Sample podcast episodes
const podcastEpisodes = [
  {
    id: "ep-001",
    title: "Ancestral Healing & Evolution of the Mind",
    description: "Dive deep into the concepts of ancestral healing and how it impacts our evolution of consciousness.",
    duration: "58:24",
    date: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1581368135153-a506cf13531c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ep-002",
    title: "The Omniversal Aether & Spiritual Connectivity",
    description: "Exploring the concept of the Omniversal Aether and how it relates to our spiritual connections.",
    duration: "52:17",
    date: "May 8, 2025",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ep-003",
    title: "Finding Your Authentic Voice",
    description: "How to discover and amplify your authentic voice in a world of noise and distraction.",
    duration: "45:39",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export default function PodcastSection() {
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
    <section id="podcast" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="flex items-center justify-center gap-3 mb-4" variants={itemVariants}>
            <Podcast className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Beneath The Surface</h2>
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Join us for deep conversations exploring consciousness, spirituality, and our interconnected existence.
          </motion.p>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {podcastEpisodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              transition={{ delay: index * 0.05 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={episode.image} 
                  alt={episode.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-center justify-center">
                  <Button 
                    variant="ghost"
                    size="icon"
                    className="rounded-full w-14 h-14 bg-primary/80 hover:bg-primary text-white hover:scale-105 transition-all"
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-muted-foreground">{episode.date}</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center gap-1">
                    <Headphones className="h-3 w-3" />
                    {episode.duration}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{episode.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{episode.description}</p>
                <Button 
                  variant="outline"
                  size="sm" 
                  className="w-full mt-2"
                >
                  Listen Now
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button 
            size="lg" 
            className="gap-2"
            onClick={() => window.open('#', '_blank')}
          >
            <Headphones className="h-5 w-5" />
            Subscribe to Our Podcast
            <ExternalLink className="h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Available on Apple Podcasts, Spotify, Google Podcasts, and more
          </p>
        </motion.div>
      </div>
    </section>
  );
}