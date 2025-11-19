"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What is your typical timeline for a project?",
        answer: "Timelines vary depending on complexity. A typical branding and web project takes 4-8 weeks from discovery to launch.",
    },
    {
        question: "Do you work with startups?",
        answer: "Yes, we love partnering with ambitious startups. We have special packages designed to help early-stage companies scale quickly.",
    },
    {
        question: "What technologies do you use?",
        answer: "We specialize in the modern stack: Next.js, React, TypeScript, Tailwind CSS, and WebGL for immersive experiences.",
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Absolutely. We offer ongoing maintenance and retainer packages to ensure your digital product continues to evolve and perform.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-24 px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24 max-w-7xl mx-auto">
            <div className="md:w-1/3">
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
                    FAQ
                </h2>
                <p className="text-xl text-muted-foreground">
                    Common questions about how we work and what we can do for you.
                </p>
            </div>

            <div className="md:w-2/3 space-y-4">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className="border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden cursor-pointer group"
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    >
                        <div className="p-6 md:p-8 flex items-center justify-between">
                            <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-white/80 transition-colors">
                                {faq.question}
                            </h3>
                            <Plus
                                className={cn(
                                    "w-6 h-6 transition-transform duration-300",
                                    openIndex === i ? "rotate-45" : "rotate-0"
                                )}
                            />
                        </div>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-6 md:px-8 pb-8 text-lg text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
