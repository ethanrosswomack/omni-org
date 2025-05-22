import { useEffect } from "react";
import { Helmet } from "react-helmet";
import NetworkGraph from "@/components/NetworkGraph";

export default function NetworkMap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Network Map | Omniversal Media</title>
        <meta 
          name="description" 
          content="Explore the interconnected digital ecosystem of Omniversal Media websites, projects, and platforms in our interactive network map." 
        />
        <meta property="og:title" content="Network Map | Omniversal Media" />
        <meta 
          property="og:description" 
          content="Explore the interconnected digital ecosystem of Omniversal Media websites, projects, and platforms." 
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent">
          Omniversal Network Map
        </h1>
        
        <div className="bg-slate-900/50 rounded-xl p-6 mb-8">
          <p className="text-lg text-center text-slate-300 mb-4">
            Visualize how our websites, platforms, and digital properties connect within the Omniversal Media ecosystem.
          </p>
          <p className="text-center text-slate-400">
            <span className="inline-block px-2 py-1 rounded bg-teal-500/20 text-teal-400 mx-1">Core Infrastructure</span>
            <span className="inline-block px-2 py-1 rounded bg-purple-500/20 text-purple-400 mx-1">Media</span>
            <span className="inline-block px-2 py-1 rounded bg-amber-500/20 text-amber-400 mx-1">Community</span>
            <span className="inline-block px-2 py-1 rounded bg-blue-500/20 text-blue-400 mx-1">Commerce</span>
            <span className="inline-block px-2 py-1 rounded bg-pink-500/20 text-pink-400 mx-1">Personal Brand</span>
          </p>
        </div>
        
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl shadow-xl overflow-hidden h-[600px] mb-10">
          <NetworkGraph />
        </div>
        
        <div className="mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-teal-500">Understanding the Network</h2>
          <p className="mb-4 text-slate-300">
            The visualization above demonstrates how the different websites and platforms in the Omniversal Media ecosystem are interconnected. Each node represents a website, and the connections show how they relate to each other.
          </p>
          <h3 className="text-xl font-semibold mb-2 text-purple-400">Interaction Guide:</h3>
          <ul className="list-disc list-inside space-y-2 text-slate-300 mb-6">
            <li>Click and drag nodes to reposition them</li>
            <li>Click on any node to visit that website</li>
            <li>Scroll to zoom in or out of the visualization</li>
            <li>Click and drag the background to pan the view</li>
          </ul>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="italic text-slate-400 text-center">
              "Omniversal Media connects the disparate elements of digital consciousness
              into a cohesive ecosystem for the evolution of mind."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}