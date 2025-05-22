import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ShoppingCart, ExternalLink } from "lucide-react";

// Featured products from the Reincarnated.Store catalog - using actual data
const featuredProducts = [
  {
    id: "OM-003",
    name: "Cosmic Unity Hoodie",
    price: "$45.00",
    category: "Apparel",
    description: "Hoodie displaying interconnected planets symbolizing unity. Color scheme: Dark Gray and Blue.",
    image: "https://pub-a56823b59c6247ebba0bb168d783ba17.r2.dev/src/images/OM-003/Cosmic_Unity_Hoodie_front.png"
  },
  {
    id: "R2R-001",
    name: "Soul Frequency T-Shirt",
    price: "$25.00",
    category: "Apparel",
    description: "T-shirt with the R2R logo and 'Soul Frequency' printed on the back. Color scheme: Black and Teal.",
    image: "https://pub-a56823b59c6247ebba0bb168d783ba17.r2.dev/src/images/R2R-001/Soul_Frequency_T-Shirt_front.png"
  },
  {
    id: "OM-006",
    name: "Galaxy Phone Case",
    price: "$15.00",
    category: "Accessories",
    description: "Phone case with a colorful spiral galaxy design. Color scheme: Blue and Purple.",
    image: "https://pub-a56823b59c6247ebba0bb168d783ba17.r2.dev/src/images/OM-006/Galaxy_Phone_Case_front.png"
  },
  {
    id: "OM-009",
    name: "Celestial Canvas Tote Bag",
    price: "$15.00",
    category: "Accessories",
    description: "Canvas tote bag printed with planets and stars artwork. Color scheme: Black and Multicolor.",
    image: "https://pub-a56823b59c6247ebba0bb168d783ba17.r2.dev/src/images/OM-009/Celestial_Canvas_Tote_Bag_front.png"
  }
];

export default function StoreSection() {
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
    <section id="store" className="py-24 bg-background">
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
            Omniversal Store
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Express your connection to the Omniversal community with our exclusive merchandise.
          </motion.p>
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mt-6"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-card border border-border rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              transition={{ delay: index * 0.05 }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Button 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2"
                  size="sm"
                >
                  <ShoppingCart className="h-4 w-4" />
                  View Details
                </Button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">{product.name}</h3>
                  <span className="text-primary font-bold">{product.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{product.category}</span>
                  <span className="text-xs text-muted-foreground">ID: {product.id}</span>
                </div>
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
            className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            onClick={() => window.open('https://reincarnated.store', '_blank')}
          >
            <ShoppingBag className="h-5 w-5" />
            Visit Full Store
            <ExternalLink className="h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Explore our complete collection at <a href="https://reincarnated.store" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Reincarnated.Store</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}