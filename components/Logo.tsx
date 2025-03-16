import * as React from "react"
import { motion, type SVGMotionProps } from "framer-motion"

const Logo = (props: SVGMotionProps<SVGSVGElement>) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1.2,
      ease: [0.23, 0.86, 0.39, 0.96],
    }}
    {...props}
  >
    <defs>
      <linearGradient id="tearGradient" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#93C5FD" /> {/* blue-300 */}
        <stop offset="50%" stopColor="#F3F4F6" /> {/* white/90 */}
        <stop offset="100%" stopColor="#D8B4FE" /> {/* purple-300 */}
      </linearGradient>
    </defs>
    <motion.path
      fill="url(#tearGradient)"
      d="M32 4S12 28 12 42c0 11.05 8.95 20 20 20s20-8.95 20-20C52 28 32 4 32 4Zm0 52c-6.62 0-12-5.38-12-12 0-5.75 6.88-17.75 12-25.12C37.12 26.25 44 38.25 44 44c0 6.62-5.38 12-12 12Z"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    />
  </motion.svg>
)

export default Logo
