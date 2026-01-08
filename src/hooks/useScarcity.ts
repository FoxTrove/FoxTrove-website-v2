import { useState, useEffect } from 'react';

export function useScarcity() {
    const [spotsLeft, setSpotsLeft] = useState(3); // Default for SSR/Initial render
    const [spotsClaimed, setSpotsClaimed] = useState(7);
    const totalSpots = 10;

    useEffect(() => {
        const calculateScarcity = () => {
            const now = new Date();
            const day = now.getDate();
            const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
            
            // Logic:
            // Day 1: 2 claimed (8 left)
            // End of Month: 9 claimed (1 left)
            // We map the current day fraction to the range [2, 9]
            
            const progress = (day - 1) / (daysInMonth - 1); // 0 to 1
            const calculatedClaimed = Math.floor(2 + (progress * 7));
            
            // Ensure bounds
            const finalClaimed = Math.min(Math.max(calculatedClaimed, 2), 9);
            
            setSpotsClaimed(finalClaimed);
            setSpotsLeft(totalSpots - finalClaimed);
        };

        calculateScarcity();
        
        // Optional: Update explicitly if the user keeps the page open across midnight (rare but safe)
        const interval = setInterval(calculateScarcity, 1000 * 60 * 60);
        return () => clearInterval(interval);
    }, []);

    return { spotsLeft, spotsClaimed, totalSpots };
}
