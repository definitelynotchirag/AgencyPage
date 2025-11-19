"use client";

import { motion } from "framer-motion";
import Footer from "@/components/ui/footer";

const jobs = [
    {
        title: "Senior Product Designer",
        location: "Remote / NY",
        type: "Full-time",
    },
    {
        title: "Frontend Developer (Creative)",
        location: "Remote",
        type: "Full-time",
    },
    {
        title: "Project Manager",
        location: "London",
        type: "Contract",
    },
];

export default function CareersPage() {
    return (
        <main className="min-h-screen text-foreground pt-32">


            <section className="relative z-10 px-6 md:px-12 mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-8"
                >
                    CAREERS
                </motion.h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                    Join our team of visionaries, creators, and engineers. We are always looking for talent that pushes boundaries.
                </p>
            </section>

            <section className="relative z-10 px-6 md:px-12 pb-24">
                <div className="max-w-4xl">
                    {jobs.map((job, i) => (
                        <div key={i} className="border-t border-white/10 py-12 flex flex-col md:flex-row md:items-center justify-between group hover:bg-white/5 transition-colors px-4 -mx-4 cursor-pointer">
                            <div>
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">{job.title}</h3>
                                <div className="flex gap-4 text-sm text-muted-foreground uppercase tracking-widest">
                                    <span>{job.location}</span>
                                    <span>•</span>
                                    <span>{job.type}</span>
                                </div>
                            </div>
                            <div className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-lg font-medium border-b border-white">Apply Now</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
