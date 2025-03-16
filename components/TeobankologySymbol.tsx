import * as React from "react"
import { motion, type SVGMotionProps } from "framer-motion"

const TeobankologySymbol = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    initial={{ opacity: 0, rotate: -180 }}
    animate={{ opacity: 1, rotate: 0 }}
    transition={{
      duration: 1.5,
      ease: [0.23, 0.86, 0.39, 0.96],
    }}
    {...props}
  >
    <defs>
      <linearGradient id="teoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#93C5FD" /> {/* blue-300 */}
        <stop offset="50%" stopColor="#F3F4F6" /> {/* white/90 */}
        <stop offset="100%" stopColor="#D8B4FE" /> {/* purple-300 */}
      </linearGradient>
    </defs>
    <motion.path
      d="M16 2L2 16l14 14 14-14L16 2z"
      stroke="url(#teoGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    />
    <motion.circle
      cx="16"
      cy="16"
      r="6"
      stroke="url(#teoGradient)"
      strokeWidth="1.5"
      fill="none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 1,
        duration: 1,
        ease: "easeOut",
      }}
    />
    <motion.path
      d="M16 10v12M10 16h12"
      stroke="url(#teoGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.5,
        duration: 0.5,
      }}
    />
  </motion.svg>
)

export default TeobankologySymbol 