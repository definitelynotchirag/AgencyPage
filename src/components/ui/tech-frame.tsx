"use client";

import { cn } from "@/lib/utils";

export default function TechFrame({ className }: { className?: string }) {
    return (
        <div className={cn("pointer-events-none absolute inset-0 z-20", className)}>
            {/* Top Left */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white/30" />
            <div className="absolute top-0 left-0 w-2 h-2 bg-white" />

            {/* Top Right */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white/30" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-white" />

            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white/30" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-white" />

            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-white" />
        </div>
    );
}
