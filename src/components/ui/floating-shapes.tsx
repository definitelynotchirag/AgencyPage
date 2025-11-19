"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-10 w-64 h-64 border border-white/5 rounded-full blur-3xl opacity-30"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    rotate: [0, -10, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-1/3 right-10 w-96 h-96 border border-white/5 rounded-full blur-3xl opacity-20"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full blur-[100px] opacity-10"
            />
        </div>
    );
}
