"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type RevealProps = React.PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export default function Reveal({ className, delay = 0, children }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

