import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useState } from "react";
import NetworkGraph from "@/components/NetworkGraph";

export default function NetworkMap() {
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
        <title>Network Map | Omniversal Media</title>
        <meta name="description" content="Explore the digital ecosystem of Omniversal Media through our interactive Network Map. Discover how our various websites connect and support the evolution of consciousness." />
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
              Omniversal Media Network Map
            </motion.h1>
            
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mb-12"
              variants={itemVariants}
            ></motion.div>
            
            <motion.p
              className="text-xl text-center mb-12 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Explore the interconnected digital ecosystem of Omniversal Media. This visualization demonstrates how our various platforms work together to support the evolution of consciousness.
            </motion.p>
          </motion.div>
          
          {/* Network Graph */}
          <div className="w-full h-[600px] bg-card border border-border rounded-xl overflow-hidden shadow-lg">
            <NetworkGraph />
          </div>
          
          <div className="mt-10 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Legend & Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>
                <span>Core Infrastructure</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                <span>Media/Content</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                <span>Community</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span>E-Commerce</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-3">How to Use</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Click and drag nodes to reposition them</li>
                <li>Hover over nodes to highlight connections</li>
                <li>Click on a node to visit that website (coming soon)</li>
                <li>Zoom in/out using mouse wheel or pinch gesture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}