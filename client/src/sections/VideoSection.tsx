import { motion } from "framer-motion";
import { Play, Volume2 } from "lucide-react";

export default function VideoSection() {
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
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Volume2 className="w-12 h-12 text-teal-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">
              Latest Podcast Episode
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Dive deep beneath the surface with our latest conversations
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-teal-500/50 transition-all duration-300"
          >
            {/* Video Player Placeholder */}
            <div className="relative aspect-video bg-slate-900 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Play className="w-16 h-16 text-teal-500 mx-auto" />
                <div>
                  <p className="text-slate-300 text-lg font-semibold">Latest Episode</p>
                  <p className="text-slate-400">Replace this with your video embed</p>
                </div>
              </div>
              
              {/* 
              Replace this entire div with your video embed code like:
              <video 
                controls 
                width="100%" 
                height="100%"
                poster="path/to/thumbnail.jpg"
              >
                <source src="path/to/your/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              OR for YouTube/Vimeo embed:
              <iframe 
                width="100%" 
                height="100%" 
                src="YOUR_VIDEO_EMBED_URL"
                title="Latest Podcast Episode"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              */}
            </div>

            {/* Episode Info */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-teal-500 mb-4">
                [Episode Title]
              </h3>
              <p className="text-slate-300 mb-6">
                [Add your episode description here. Talk about the topics covered, 
                guests featured, and key insights from the conversation.]
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                <span>Episode #[Number]</span>
                <span>•</span>
                <span>[Duration]</span>
                <span>•</span>
                <span>[Release Date]</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 text-center">
            <p className="text-slate-400">
              Listen to more episodes at{" "}
              <a 
                href="https://beneaththesurface.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-400 underline"
              >
                BeneathTheSurface.net
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}