"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import MagneticButton from "@/components/ui/magnetic-button";
import TechFrame from "@/components/ui/tech-frame";

export default function CTASection() {
    return (
        <section className="w-full py-32 px-6 md:px-12 border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />
            <TechFrame className="opacity-50" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-8"
                >
                    READY TO SCALE?
                </motion.h2>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    Let's build something extraordinary together. Your vision, our precision.
                </p>

                <MagneticButton className="inline-block">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-xl font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors sharp-edge group"
                    >
                        Start Project
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </MagneticButton>
            </div>
        </section>
    );
}
