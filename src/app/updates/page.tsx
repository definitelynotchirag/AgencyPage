"use client";

import { motion } from "framer-motion";
import Footer from "@/components/ui/footer";

const updates = [
    {
        date: "OCT 2023",
        title: "StagLabs wins Agency of the Year",
        category: "AWARDS",
    },
    {
        date: "SEP 2023",
        title: "Launching our new design system",
        category: "INTERNAL",
    },
    {
        date: "AUG 2023",
        title: "New partnership with TechGiant",
        category: "BUSINESS",
    },
    {
        date: "JUL 2023",
        title: "Expanding to Tokyo",
        category: "GROWTH",
    },
];

export default function UpdatesPage() {
    return (
        <main className="min-h-screen text-foreground pt-32">


            <section className="relative z-10 px-6 md:px-12 mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-8"
                >
                    UPDATES
                </motion.h1>
            </section>

            <section className="relative z-10 px-6 md:px-12 pb-24">
                <div className="max-w-4xl">
                    {updates.map((item, i) => (
                        <div key={i} className="border-t border-white/10 py-12 flex flex-col md:flex-row md:items-center justify-between group hover:bg-white/5 transition-colors px-4 -mx-4">
                            <div className="mb-4 md:mb-0">
                                <span className="text-sm font-mono text-muted-foreground block mb-2">{item.date}</span>
                                <h3 className="text-2xl md:text-4xl font-bold tracking-tight">{item.title}</h3>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded-none self-start md:self-center">
                                {item.category}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
