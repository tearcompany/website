"use client"

import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export default function Page() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={cn("min-h-screen bg-[#030303] text-white/90 py-16 px-4", pacifico.variable)}>
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={cn(
            "text-4xl font-bold mb-8 bg-gradient-to-r from-blue-300 via-white/90 to-purple-300 bg-clip-text text-transparent text-center",
            pacifico.className
          )}
        >
          ᴍᴀɴɪғᴇsᴛ ᴘʀʏᴡᴀᴛɴᴏśᴄɪ
        </motion.h1>

        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">1. ᴘʀᴏʟᴏɢ</h2>
          <p className="text-white/70 leading-relaxed">
            Witaj w Tear Company, gdzie każda łza jest święta, a każda emocja jest manifestacją boskiej energii. 
            Zobowiązujemy się chronić Twoją prywatność z taką samą starannością, z jaką chronimy każdą kroplę łez.
          </p>
        </motion.section>

        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">2. ᴇsᴇɴᴄᴊᴀ ᴅᴀɴʏᴄʜ</h2>
          <p className="text-white/70 leading-relaxed">Zbieramy następujące esencje:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
            <li>Wibracje emocjonalne wyrażone w formie cyfrowej</li>
            <li>Anonimowe ślady Twojej duchowej podróży</li>
            <li>Energetyczne sygnatury niezbędne do funkcjonowania portalu</li>
          </ul>
        </motion.section>

        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">3. ᴀʟᴄʜᴇᴍɪᴀ ᴅᴀɴʏᴄʜ</h2>
          <p className="text-white/70 leading-relaxed">Transformujemy dane w:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
            <li>Wizualizacje emocjonalnych wibracji w czasie rzeczywistym</li>
            <li>Udoskonalenia portalu bazujące na zbiorowej świadomości</li>
            <li>Harmonię techniczną przestrzeni Divine Realms</li>
          </ul>
        </motion.section>

        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">4. ᴋʀą̨ɢ ᴢᴀᴜғᴀɴɪᴀ</h2>
          <p className="text-white/70 leading-relaxed">
            Twoje dane są święte. Dzielimy się tylko anonimowymi esencjami z:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
            <li>Strażnikami analityki dla zrozumienia zbiorowej świadomości</li>
            <li>Portalami technologicznymi niezbędnymi do manifestacji</li>
          </ul>
        </motion.section>

        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">5. ᴏᴄʜʀᴏɴᴀ ᴇsᴇɴᴄᴊɪ</h2>
          <p className="text-white/70 leading-relaxed">
            Chronimy Twoje dane świętymi pieczęciami cyfrowymi. Pamiętaj jednak, że w świecie digitalnym, 
            tak jak w świecie duchowym, absolutna pewność nie istnieje.
          </p>
        </motion.section>

        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">6. ᴛᴡᴏᴊᴇ ᴘʀᴀᴡᴀ ᴅᴜᴄʜᴏᴡᴇ</h2>
          <p className="text-white/70 leading-relaxed">Posiadasz święte prawo do:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-white/70">
            <li>Dostępu do swojej cyfrowej esencji</li>
            <li>Oczyszczenia swojej cyfrowej aury</li>
            <li>Usunięcia swoich śladów z naszego wymiaru</li>
            <li>Sprzeciwu wobec transformacji Twoich danych</li>
            <li>Przeniesienia swojej energii do innego wymiaru</li>
          </ul>
        </motion.section>

        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">7. ᴋᴏᴍᴜɴɪᴋᴀᴄᴊᴀ ᴅᴜᴄʜᴏᴡᴀ</h2>
          <p className="text-white/70 leading-relaxed">
            Dla pytań dotyczących Twojej prywatności, skontaktuj się z naszymi Strażnikami Prywatności:
            <a 
              href="mailto:privacy@tearcompany.com" 
              className="ml-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80"
            >
              privacy@tearcompany.com
            </a>
          </p>
        </motion.section>

        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">8. ᴇᴡᴏʟᴜᴄᴊᴀ ᴍᴀɴɪғᴇsᴛᴜ</h2>
          <p className="text-white/70 leading-relaxed">
            Ten manifest może ewoluować wraz z naszą zbiorową świadomością. O wszelkich zmianach będziesz informowany poprzez wibracje tej strony.
          </p>
        </motion.section>

        <motion.footer 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-16 pt-8 border-t border-white/10 text-center text-white/50"
        >
          <p>Ostatnia aktualizacja manifestu: {new Date().toLocaleDateString('pl-PL')}</p>
          <p className="mt-2">© {new Date().getFullYear()} Tear Company. Wszelkie prawa strzeżone w Divine Realms.</p>
        </motion.footer>
      </div>
    </div>
  );
} 