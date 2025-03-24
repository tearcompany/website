"use client"

import { motion } from "framer-motion"
import { cn } from "../../lib/utils"
import Logo from "./Logo"
import ContactButton from "./ContactButton"
import { Pacifico } from "next/font/google"

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
})

interface HomeContentProps {
    badge?: string
    title1?: string
}

export default function HomeContent({
    badge = "Tear Company",
    title1 = "Ideas",
}: HomeContentProps) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    }

    return (
        <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    custom={0}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] mb-12 md:mb-16"
                >
                    <Logo
                        width={24}
                        height={24}
                        className="w-6 h-6"
                    />
                    <span className="text-sm text-white/80 tracking-wide font-medium">{badge}</span>
                </motion.div>

                <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                    <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-bold leading-none tracking-tight">
                        <span
                            className={cn(
                                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-purple-300 block",
                                pacifico.className,
                            )}
                        >
                            {title1}
                        </span>
                    </h1>
                </motion.div>

                <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                    <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-12 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                        Pomagamy w digitalizowaniu pomysłów dla ludzi dobrego serca.
                        <br />
                        <span className="text-white/40 text-base sm:text-lg md:text-xl">
                            Tworzymy cyfrowe rozwiązania, które mają znaczenie.
                        </span>
                    </p>
                </motion.div>

                <motion.div
                    custom={3}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex justify-center"
                >
                    <ContactButton />
                </motion.div>
            </div>
        </div>
    )
} 