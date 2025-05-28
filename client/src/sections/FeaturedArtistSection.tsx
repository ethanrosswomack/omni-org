import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Instagram, Globe } from "lucide-react";
import { CelticSectionReveal, TriquetraHover } from "@/components/ui/page-transition";

export default function FeaturedArtistSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Star className="w-12 h-12 text-amber-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Featured Artist
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Showcasing exceptional talent from our creative community
            </p>
          </motion.div>

          <CelticSectionReveal delay={0.2}>
            <TriquetraHover>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Artist Image */}
                  <div className="relative">
                    <div className="aspect-square bg-slate-700 flex items-center justify-center">
                      <p className="text-slate-400 text-center">
                        Featured Artist Image<br />
                        <span className="text-sm">Replace with artist photo</span>
                      </p>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        FEATURED
                      </div>
                    </div>
                  </div>

                  {/* Artist Info */}
                  <div className="p-8 lg:p-12 space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold text-amber-500 mb-2">[Artist Name]</h3>
                      <p className="text-xl text-slate-300">[Art Medium/Style]</p>
                    </div>

                    <p className="text-slate-300 text-lg leading-relaxed">
                      [Add a description of the artist here. Talk about their style, 
                      their vision, what makes their work special, and why you're featuring them.]
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-amber-400">Latest Work</h4>
                      <p className="text-slate-400">
                        [Mention their latest project, exhibition, or piece that you want to highlight]
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-wrap gap-4">
                      <Button 
                        variant="outline" 
                        className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
                      >
                        <Instagram className="w-4 h-4 mr-2" />
                        Instagram
                      </Button>
                      
                      <Button 
                        variant="outline"
                        className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Website
                      </Button>
                      
                      <Button 
                        className="bg-amber-600 hover:bg-amber-700 text-black"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Portfolio
                      </Button>
                    </div>

                    {/* Quote or Testimonial */}
                    <div className="bg-slate-900/50 p-6 rounded-lg border-l-4 border-amber-500">
                      <p className="italic text-slate-300">
                        "[Add a quote from the artist or a testimonial about their work here]"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TriquetraHover>
          </CelticSectionReveal>

          {/* Instructions for updating */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              💡 Update this section regularly to feature different artists from your community
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}