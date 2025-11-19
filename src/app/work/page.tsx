"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Footer from "@/components/ui/footer";

const projects = [
    {
        title: "E-Commerce Redesign",
        description: "A complete overhaul of a fashion brand's online store.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-neutral-100 dark:bg-neutral-800" />,
    },
    {
        title: "Fintech Dashboard",
        description: "Real-time data visualization for a trading platform.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-neutral-100 dark:bg-neutral-800" />,
    },
    {
        title: "Mobile App Interface",
        description: "UX/UI design for a health and fitness application.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-neutral-100 dark:bg-neutral-800" />,
    },
    {
        title: "SaaS Landing Page",
        description: "High-conversion landing page for a B2B software.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-neutral-100 dark:bg-neutral-800" />,
    },
    {
        title: "AI Research Lab",
        description: "Brand identity and website for an AI startup.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-neutral-100 dark:bg-neutral-800" />,
    },
    {
        title: "Art Gallery Portfolio",
        description: "Minimalist portfolio for a contemporary art gallery.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-none bg-neutral-100 dark:bg-neutral-800" />,
    },
];

export default function WorkPage() {
    return (
        <main className="min-h-screen text-foreground pt-32">


            <section className="relative z-10 px-6 md:px-12 mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-8"
                >
                    WORK
                </motion.h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                    A selection of our recent projects, showcasing our commitment to precision, aesthetics, and performance.
                </p>
            </section>

            <section className="relative z-10 px-6 md:px-12 pb-24">
                <BentoGrid className="max-w-7xl mx-auto">
                    {projects.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={i % 3 === 0 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </section>

            <Footer />
        </main>
    );
}
