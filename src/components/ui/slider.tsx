"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps {
    value: number[];
    min?: number;
    max?: number;
    step?: number;
    onValueChange?: (value: number[]) => void;
    className?: string;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
    ({ className, value, min = 0, max = 100, step = 1, onValueChange, ...props }, ref) => {
        
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (onValueChange) {
                onValueChange([parseFloat(e.target.value)]);
            }
        };

        const percentage = ((value[0] - min) / (max - min)) * 100;

        return (
            <div className={cn("relative flex w-full touch-none select-none items-center", className)}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value[0]}
                    onChange={handleChange}
                    ref={ref}
                    className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                    {...props}
                />
                <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary/20">
                    <div 
                        className="h-full bg-rose-500 transition-all" 
                        style={{ width: `${percentage}%` }}
                    />
                </div>
                <div 
                    className="absolute h-5 w-5 rounded-full border-2 border-rose-500 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white shadow-lg pointer-events-none"
                    style={{ left: `calc(${percentage}% - 10px)` }}
                />
            </div>
        )
    }
)
Slider.displayName = "Slider"

export { Slider }
