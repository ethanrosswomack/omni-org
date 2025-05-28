import { useRef, useEffect, useState } from 'react';
import { useTheme } from "@/components/ThemeProvider";
import * as d3 from 'd3';
import { CelticLoader } from "@/components/ui/celtic-loader";

// Define types for our graph nodes and links
type Node = {
  id: string;
  name: string;
  url: string;
  category: string;
  color: string;
  size: number;
};

type Link = {
  source: string;
  target: string;
  value: number;
};

type GraphData = {
  nodes: Node[];
  links: Link[];
};

export default function NetworkGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [isLoading, setIsLoading] = useState(true);
  
  // Generate graph data with all your websites
  const generateGraphData = () => {
    // Define node categories with different colors
    const categories = {
      core: { color: "#14b8a6" }, // teal
      media: { color: "#a855f7" }, // purple
      community: { color: "#f59e0b" }, // amber
      commerce: { color: "#3b82f6" }, // blue
      personal: { color: "#ec4899" }, // pink
    };
    
    // Create nodes for all Omniversal Media websites
    const nodes: Node[] = [
      // Core Infrastructure
      { 
        id: "omniversal.cloud", 
        name: "Omniversal.Cloud", 
        url: "https://omniversal.cloud",
        category: "core",
        color: categories.core.color,
        size: 15
      },
      { 
        id: "omniversal.team", 
        name: "Omniversal.Team", 
        url: "https://omniversal.team",
        category: "core",
        color: categories.core.color,
        size: 15
      },
      { 
        id: "omniversalaether.com", 
        name: "OmniversalAether.com", 
        url: "https://omniversalaether.com",
        category: "core",
        color: categories.core.color,
        size: 15
      },
      // Media and Content Delivery
      { 
        id: "omniversal.media", 
        name: "Omniversal.Media", 
        url: "https://omniversal.media",
        category: "media",
        color: categories.media.color,
        size: 14
      },
      { 
        id: "beneaththesurface.net", 
        name: "BeneathTheSurface.net", 
        url: "https://beneaththesurface.net",
        category: "community",
        color: categories.community.color,
        size: 16
      },
      // E-Commerce
      { 
        id: "reincarnated.store", 
        name: "Reincarnated.Store", 
        url: "https://reincarnated.store",
        category: "commerce",
        color: categories.commerce.color,
        size: 16
      },
      // Personal Brand
      { 
        id: "hawkeyetherapper.net", 
        name: "HawkEyeTheRapper.net", 
        url: "https://hawkeyetherapper.net",
        category: "personal",
        color: categories.personal.color,
        size: 16
      },
      { 
        id: "atlas.omniversalmedia.info", 
        name: "Atlas.OmniversalMedia.info", 
        url: "https://atlas.omniversalmedia.info",
        category: "core",
        color: categories.core.color,
        size: 14
      },
      { 
        id: "reincarnated2resist.com", 
        name: "Reincarnated2Resist.com", 
        url: "https://reincarnated2resist.com",
        category: "community",
        color: categories.community.color,
        size: 15
      },
      // Lyran Sites
      { 
        id: "cradleoflyra.com", 
        name: "CradleOfLyra.com", 
        url: "https://cradleoflyra.com",
        category: "community",
        color: categories.community.color,
        size: 15
      },
      { 
        id: "lyranwars.com", 
        name: "LyranWars.com", 
        url: "https://lyranwars.com",
        category: "media",
        color: categories.media.color,
        size: 15
      },
    ];
    
    // Create connections between sites
    const links: Link[] = [
      // Connect Core Infrastructure nodes to each other
      { source: "omniversal.cloud", target: "omniversal.team", value: 5 },
      { source: "omniversal.cloud", target: "omniversalaether.com", value: 5 },
      
      // Connect Media nodes
      { source: "omniversal.media", target: "beneaththesurface.net", value: 4 },
      
      // Connect Core to Media
      { source: "omniversal.cloud", target: "omniversal.media", value: 5 },
      { source: "omniversalaether.com", target: "omniversal.media", value: 4 },
      
      // Connect Commerce nodes
      { source: "reincarnated.store", target: "reincarnated2resist.com", value: 4 },
      
      // Connect Media to Commerce
      { source: "omniversal.media", target: "reincarnated.store", value: 4 },
      
      // Connect Personal Brand nodes
      { source: "hawkeyetherapper.net", target: "reincarnated2resist.com", value: 5 },
      { source: "hawkeyetherapper.net", target: "omniversalaether.com", value: 4 },
      
      // Connect Personal to Media/Community
      { source: "hawkeyetherapper.net", target: "beneaththesurface.net", value: 5 },
      { source: "hawkeyetherapper.net", target: "omniversal.media", value: 4 },
      
      // Connect to Atlas
      { source: "atlas.omniversalmedia.info", target: "omniversal.cloud", value: 4 },
      { source: "atlas.omniversalmedia.info", target: "omniversalaether.com", value: 4 },
      
      // Connect Lyran sites
      { source: "cradleoflyra.com", target: "lyranwars.com", value: 5 },
      { source: "cradleoflyra.com", target: "omniversalaether.com", value: 4 },
      { source: "lyranwars.com", target: "omniversal.media", value: 4 },
      { source: "lyranwars.com", target: "beneaththesurface.net", value: 3 },
      { source: "cradleoflyra.com", target: "reincarnated2resist.com", value: 3 },
    ];
    
    return { nodes, links };
  };

  useEffect(() => {
    // Skip rendering if we're in SSR or the container ref doesn't exist
    if (!svgRef.current || !containerRef.current) return;
    
    // Show loading state
    setIsLoading(true);
    
    // Get container dimensions
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 600;
    setDimensions({ width, height });
    
    // Generate graph data
    const graphData = generateGraphData();
    
    // Clear previous graph
    d3.select(svgRef.current).selectAll("*").remove();
    
    // Create SVG element
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .style("font", "12px sans-serif");
    
    // Create a group for the graph
    const g = svg.append("g");
    
    // Setup zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });
    
    svg.call(zoom as any);
    
    // Create the simulation
    const simulation = d3.forceSimulation(graphData.nodes as any)
      .force("link", d3.forceLink(graphData.links)
        .id((d: any) => d.id)
        .distance(100))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX(width / 2).strength(0.1))
      .force("y", d3.forceY(height / 2).strength(0.1));
    
    // Create links
    const link = g.append("g")
      .attr("stroke", theme === 'dark' ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(graphData.links)
      .join("line")
      .attr("stroke-width", (d) => Math.sqrt(d.value));
    
    // Create nodes
    const node = g.append("g")
      .selectAll("g")
      .data(graphData.nodes)
      .join("g")
      .attr("cursor", "pointer")
      .on("click", (event, d: any) => {
        window.open(d.url, "_blank");
      });
    
    // Add circles for nodes
    node.append("circle")
      .attr("r", (d: any) => d.size / 2)
      .attr("fill", (d: any) => d.color)
      .attr("stroke", theme === 'dark' ? "#fff" : "#000")
      .attr("stroke-width", 1.5);
    
    // Add text labels
    node.append("text")
      .attr("x", 8)
      .attr("y", "0.31em")
      .attr("fill", theme === 'dark' ? "#fff" : "#000")
      .text((d: any) => d.name)
      .clone(true).lower()
      .attr("fill", "none")
      .attr("stroke", theme === 'dark' ? "#1e293b" : "#f8fafc")
      .attr("stroke-width", 3);
    
    // Set up the tick function
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);
      
      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });
    
    // Drag behavior
    const drag = d3.drag()
      .on("start", (event, d: any) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d: any) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d: any) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });
    
    node.call(drag as any);
    
    // Hide loading state after a brief delay to show the animation
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Cleanup
    return () => {
      simulation.stop();
    };
  }, [svgRef.current, containerRef.current, theme]);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm rounded-lg z-10">
          <div className="text-center space-y-4">
            <CelticLoader size="lg" variant="knot" className="text-teal-500" />
            <p className="text-teal-300 text-sm">Weaving the network...</p>
          </div>
        </div>
      )}
      <svg ref={svgRef} className="w-full h-full"></svg>
    </div>
  );
}