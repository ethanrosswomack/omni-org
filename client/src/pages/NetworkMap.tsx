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

      <div className="relative min-h-screen">
        {/* Celtic Tree Background with Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.3),transparent_70%)]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full max-w-5xl opacity-15 bg-[url('https://pub-a56823b59c6247ebba0bb168d783ba17.r2.dev/src/images/aether_tree_background.png')] bg-no-repeat bg-center bg-contain"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container relative z-10 mx-auto px-4 py-16 max-w-7xl">
          {/* Celtic Triquetra Symbol */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 opacity-80">
              <svg viewBox="0 0 100 100" className="fill-teal-500">
                <path d="M50,5C25.2,5,5,25.2,5,50s20.2,45,45,45s45-20.2,45-45S74.8,5,50,5z M50,85c-19.3,0-35-15.7-35-35s15.7-35,35-35 s35,15.7,35,35S69.3,85,50,85z"/>
                <path d="M50,25c-13.8,0-25,11.2-25,25s11.2,25,25,25s25-11.2,25-25S63.8,25,50,25z M50,65c-8.3,0-15-6.7-15-15s6.7-15,15-15 s15,6.7,15,15S58.3,65,50,65z"/>
                <path d="M65,50c0,8.3-6.7,15-15,15s-15-6.7-15-15s6.7-15,15-15S65,41.7,65,50z M73.2,26.8c-6.2-6.2-14.6-9.7-23.4-9.8 c0,0,0,0,0,0c0,0,0,0,0,0c-8.7,0.1-17.1,3.6-23.3,9.8c-6.2,6.2-9.7,14.6-9.8,23.3c0,0,0,0,0,0c0,0,0,0,0,0 c0.1,8.8,3.6,17.2,9.8,23.4c6.2,6.2,14.6,9.7,23.3,9.8c0,0,0,0,0,0c0,0,0,0,0,0c8.8-0.1,17.2-3.6,23.4-9.8 c6.2-6.2,9.7-14.6,9.8-23.4c0,0,0,0,0,0c0,0,0,0,0,0C82.9,41.4,79.4,33,73.2,26.8z"/>
              </svg>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-teal-500 to-teal-300 bg-clip-text text-transparent">
            The Omniversal Network
          </h1>
          
          <div className="bg-slate-900/80 border border-teal-900/50 rounded-xl p-6 mb-8 backdrop-blur-sm">
            <p className="text-lg text-center text-teal-300 mb-4">
              Explore the interconnected pathways of the Omniversal Media digital ecosystem
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-center">
              <span className="inline-block px-2 py-1 rounded-full bg-teal-500/20 text-teal-400 text-sm">Core Infrastructure</span>
              <span className="inline-block px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">Media</span>
              <span className="inline-block px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm">Community</span>
              <span className="inline-block px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">Commerce</span>
              <span className="inline-block px-2 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm">Personal Brand</span>
            </div>
          </div>
          
          {/* Circular Container for Network Graph */}
          <div className="relative mx-auto mb-16">
            <div className="absolute inset-0 rounded-full bg-slate-900/30 blur-xl"></div>
            <div className="relative bg-slate-900/70 backdrop-blur-sm border border-teal-900/50 rounded-full shadow-xl overflow-hidden h-[600px] w-[600px] mx-auto">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1),transparent_70%)]"></div>
              <NetworkGraph />
            </div>
          </div>
          
          <div className="mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-teal-500">Understanding the Network</h2>
            <p className="mb-4 text-teal-200">
              The visualization above demonstrates how the different websites and platforms in the Omniversal Media ecosystem are interconnected. Each node represents a website, and the connections show how they relate to each other.
            </p>
            <h3 className="text-xl font-semibold mb-2 text-teal-400">Interaction Guide:</h3>
            <ul className="list-disc list-inside space-y-2 text-teal-200 mb-6">
              <li>Click and drag nodes to reposition them</li>
              <li>Click on any node to visit that website</li>
              <li>Scroll to zoom in or out of the visualization</li>
              <li>Click and drag the background to pan the view</li>
            </ul>
            <div className="bg-slate-900/80 border border-teal-900/40 p-6 rounded-lg">
              <p className="italic text-teal-300 text-center text-lg">
                "The Solution is Evolution of Mind"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}