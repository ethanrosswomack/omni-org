import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CelticLoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "triquetra" | "knot" | "spiral";
}

export function CelticLoader({ 
  size = "md", 
  className,
  variant = "triquetra" 
}: CelticLoaderProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-20 h-20"
  };

  const renderTriquetra = () => (
    <motion.svg
      viewBox="0 0 100 100"
      className={cn(sizeClasses[size], className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: 360
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.path
        d="M50 15 C30 15, 15 30, 15 50 C15 70, 30 85, 50 85 C70 85, 85 70, 85 50 C85 30, 70 15, 50 15 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-teal-500"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M35 25 C25 35, 25 45, 35 55 C45 65, 55 65, 65 55 C75 45, 75 35, 65 25 C55 15, 45 15, 35 25 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-teal-400"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M25 65 C35 75, 45 75, 55 65 C65 55, 65 45, 55 35 C45 25, 35 25, 25 35 C15 45, 15 55, 25 65 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-teal-300"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  );

  const renderKnot = () => (
    <motion.svg
      viewBox="0 0 100 100"
      className={cn(sizeClasses[size], className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        className="text-teal-500"
        strokeDasharray="10 5"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: 47 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-teal-400"
        strokeDasharray="8 4"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -38 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-teal-300"
        strokeDasharray="6 3"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: 28 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.svg>
  );

  const renderSpiral = () => (
    <motion.svg
      viewBox="0 0 100 100"
      className={cn(sizeClasses[size], className)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotate: 360
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <motion.path
        d="M50,50 m0,-30 a30,30 0 1,1 0,60 a25,25 0 1,1 0,-50 a20,20 0 1,1 0,40 a15,15 0 1,1 0,-30 a10,10 0 1,1 0,20 a5,5 0 1,1 0,-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-teal-500"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  );

  const variants = {
    triquetra: renderTriquetra,
    knot: renderKnot,
    spiral: renderSpiral
  };

  return (
    <div className="flex items-center justify-center">
      {variants[variant]()}
    </div>
  );
}

// Full-screen loading overlay
export function CelticLoadingOverlay({ 
  isLoading, 
  message = "Loading...",
  variant = "triquetra"
}: {
  isLoading: boolean;
  message?: string;
  variant?: "triquetra" | "knot" | "spiral";
}) {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="text-center space-y-8">
        <CelticLoader size="lg" variant={variant} />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-teal-300 font-medium"
        >
          {message}
        </motion.p>
      </div>
    </motion.div>
  );
}