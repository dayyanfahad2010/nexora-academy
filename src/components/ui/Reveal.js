'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '@/lib/utils';

export default function Reveal({ children, delay = 0, y = 24, className }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
