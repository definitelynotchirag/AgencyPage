"use client";

import { motion } from "framer-motion";
import Footer from "@/components/ui/footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen text-foreground pt-32">


            <section className="relative z-10 px-6 md:px-12 mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter mb-8"
                >
                    START A PROJECT
                </motion.h1>
            </section>

            <section className="relative z-10 px-6 md:px-12 pb-24 max-w-3xl">
                <form className="space-y-12">
                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                        <input
                            type="text"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                        <input
                            type="email"
                            className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Project Details</label>
                        <textarea
                            rows={4}
                            className="w-full bg-transparent border-b border-white/20 py-4 text-xl md:text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-white/10 resize-none"
                            placeholder="Tell us about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors sharp-edge text-lg"
                    >
                        Send Request
                    </button>
                </form>
            </section>

            <Footer />
        </main>
    );
}
