"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function TextReveal({
    children,
    className,
    delay = 0
}: {
    children: string;
    className?: string;
    delay?: number;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <h2 ref={ref} className={cn("overflow-hidden", className)}>
            <motion.span
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9], delay }}
                className="block"
            >
                {children}
            </motion.span>
        </h2>
    );
}
