import { useRef, useEffect, useState } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useTheme } from "@/components/ThemeProvider";

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
  description?: string;
};

type GraphData = {
  nodes: Node[];
  links: Link[];
};

export default function NetworkGraph() {
  const graphRef = useRef<any>();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [graphData, setGraphData] = useState<GraphData>({
    nodes: [],
    links: []
  });
  
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
        id: "aether.omniversalmedia.net", 
        name: "Aether.OmniversalMedia.net", 
        url: "https://aether.omniversalmedia.net",
        category: "core",
        color: categories.core.color,
        size: 15
      },
      { 
        id: "omniversalmedia.cloud", 
        name: "OmniversalMedia.Cloud", 
        url: "https://omniversalmedia.cloud",
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
        id: "omniversalmedia.live", 
        name: "OmniversalMedia.Live", 
        url: "https://omniversalmedia.live",
        category: "media",
        color: categories.media.color,
        size: 13
      },
      { 
        id: "omniversal.news", 
        name: "Omniversal.News", 
        url: "https://omniversal.news",
        category: "media",
        color: categories.media.color,
        size: 13
      },
      { 
        id: "omniversalmediagroup.blog", 
        name: "OmniversalMediaGroup.Blog", 
        url: "https://omniversalmediagroup.blog",
        category: "media",
        color: categories.media.color,
        size: 12
      },
      
      // Community Sites
      { 
        id: "beneaththesurface.net", 
        name: "BeneathTheSurface.net", 
        url: "https://beneaththesurface.net",
        category: "community",
        color: categories.community.color,
        size: 16
      },
      { 
        id: "reversethecurse.com", 
        name: "ReverseThisCurse.com", 
        url: "https://reversethecurse.com",
        category: "community",
        color: categories.community.color,
        size: 13
      },
      { 
        id: "thegoverningconspiracy.com", 
        name: "TheGoverningConspiracy.com", 
        url: "https://thegoverningconspiracy.com",
        category: "community",
        color: categories.community.color,
        size: 14
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
      { 
        id: "omniversalmedia.shop", 
        name: "OmniversalMedia.Shop", 
        url: "https://omniversalmedia.shop",
        category: "commerce",
        color: categories.commerce.color,
        size: 12
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
        id: "hawkeyetherapper.app", 
        name: "HawkEyeTheRapper.app", 
        url: "https://hawkeyetherapper.app",
        category: "personal",
        color: categories.personal.color,
        size: 14
      },
      { 
        id: "omniversalaether.com", 
        name: "OmniversalAether.com", 
        url: "https://omniversalaether.com",
        category: "personal",
        color: categories.personal.color,
        size: 15
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
    ];
    
    // Create connections between sites
    const links: Link[] = [
      // Connect Core Infrastructure nodes to each other
      { source: "omniversal.cloud", target: "omniversal.team", value: 5 },
      { source: "omniversal.cloud", target: "aether.omniversalmedia.net", value: 5 },
      { source: "omniversal.cloud", target: "omniversalmedia.cloud", value: 5 },
      { source: "omniversal.team", target: "aether.omniversalmedia.net", value: 4 },
      { source: "omniversal.team", target: "omniversalmedia.cloud", value: 4 },
      { source: "aether.omniversalmedia.net", target: "omniversalmedia.cloud", value: 4 },
      
      // Connect Media nodes
      { source: "omniversal.media", target: "omniversalmedia.live", value: 4 },
      { source: "omniversal.media", target: "omniversal.news", value: 4 },
      { source: "omniversal.media", target: "omniversalmediagroup.blog", value: 3 },
      { source: "omniversalmedia.live", target: "omniversal.news", value: 3 },
      { source: "omniversalmedia.live", target: "omniversalmediagroup.blog", value: 3 },
      { source: "omniversal.news", target: "omniversalmediagroup.blog", value: 3 },
      
      // Connect Core to Media
      { source: "omniversal.cloud", target: "omniversal.media", value: 5 },
      { source: "aether.omniversalmedia.net", target: "omniversal.media", value: 4 },
      { source: "omniversalmedia.cloud", target: "omniversalmedia.live", value: 4 },
      
      // Connect Community nodes
      { source: "beneaththesurface.net", target: "reversethecurse.com", value: 3 },
      { source: "beneaththesurface.net", target: "thegoverningconspiracy.com", value: 3 },
      { source: "reversethecurse.com", target: "thegoverningconspiracy.com", value: 3 },
      
      // Connect Media to Community
      { source: "omniversal.media", target: "beneaththesurface.net", value: 5 },
      { source: "omniversalmedia.live", target: "beneaththesurface.net", value: 4 },
      { source: "omniversal.news", target: "thegoverningconspiracy.com", value: 4 },
      
      // Connect Commerce nodes
      { source: "reincarnated.store", target: "omniversalmedia.shop", value: 4 },
      
      // Connect Media to Commerce
      { source: "omniversal.media", target: "reincarnated.store", value: 4 },
      { source: "omniversalmedia.live", target: "reincarnated.store", value: 3 },
      
      // Connect Personal Brand nodes
      { source: "hawkeyetherapper.net", target: "hawkeyetherapper.app", value: 5 },
      { source: "hawkeyetherapper.net", target: "omniversalaether.com", value: 4 },
      { source: "hawkeyetherapper.app", target: "omniversalaether.com", value: 4 },
      
      // Connect Personal to Media/Community
      { source: "hawkeyetherapper.net", target: "beneaththesurface.net", value: 5 },
      { source: "hawkeyetherapper.net", target: "omniversal.media", value: 4 },
      { source: "omniversalaether.com", target: "aether.omniversalmedia.net", value: 5 },
      
      // Connect to Atlas
      { source: "atlas.omniversalmedia.info", target: "omniversal.cloud", value: 4 },
      { source: "atlas.omniversalmedia.info", target: "aether.omniversalmedia.net", value: 4 },
      { source: "atlas.omniversalmedia.info", target: "omniversalmedia.cloud", value: 3 },
      
      // Connect to R2R
      { source: "reincarnated2resist.com", target: "hawkeyetherapper.net", value: 5 },
      { source: "reincarnated2resist.com", target: "reincarnated.store", value: 5 },
      { source: "reincarnated2resist.com", target: "beneaththesurface.net", value: 4 },
      { source: "reincarnated2resist.com", target: "thegoverningconspiracy.com", value: 3 },
    ];
    
    return { nodes, links };
  };

  useEffect(() => {
    // Initialize graph data
    setGraphData(generateGraphData());
    
    // Update dimensions on mount
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight || 600
      });
    }
    
    // Handle resize
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight || 600
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update force-graph on theme change
  useEffect(() => {
    if (graphRef.current) {
      graphRef.current.d3Force('link')
        .distance((link: any) => 150 / (link.value || 1));
      
      graphRef.current.d3Force('charge')
        .strength(-200);
        
      graphRef.current.d3Force('center')
        .strength(0.3);
    }
  }, [graphRef.current, theme]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <ForceGraph2D
        ref={graphRef}
        width={dimensions.width}
        height={dimensions.height}
        graphData={graphData}
        nodeRelSize={8}
        nodeLabel={(node: any) => `${node.name}\n${node.url}`}
        nodeColor={(node: any) => node.color}
        nodeVal={(node: any) => node.size}
        linkWidth={(link: any) => link.value * 0.5}
        linkColor={() => theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}
        linkDirectionalParticles={2}
        linkDirectionalParticleWidth={(link: any) => link.value * 0.5}
        backgroundColor={theme === 'dark' ? '#1e293b' : '#f8fafc'}
        onNodeClick={(node: Node) => {
          // Open the website URL in a new tab
          window.open(node.url, '_blank');
        }}
      />
    </div>
  );
}