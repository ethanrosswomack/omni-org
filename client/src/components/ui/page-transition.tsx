import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Celtic-inspired section reveal animation
export function CelticSectionReveal({ 
  children, 
  delay = 0,
  direction = "up"
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        scale: 0.95
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0,
        y: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </motion.div>
  );
}

// Celtic knot loading animation for buttons
export function CelticButtonLoader() {
  return (
    <motion.div
      className="flex items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-2 h-2 bg-current rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 0
        }}
      />
      <motion.div
        className="w-2 h-2 bg-current rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 0.2
        }}
      />
      <motion.div
        className="w-2 h-2 bg-current rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: 0.4
        }}
      />
    </motion.div>
  );
}

// Triquetra hover effect for interactive elements
export function TriquetraHover({ children }: { children: ReactNode }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      className="relative"
    >
      {children}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-teal-500/20"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.3 }
        }}
      />
    </motion.div>
  );
}