
import React from 'react';

interface LwSymbolProps {
    className?: string;
    color?: string; // Allow override, but default to Navy
}

export const LwSymbol: React.FC<LwSymbolProps> = ({ className, color }) => (
    // Default to branding.navy (#0F172A) if no color provided
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="LeverageWorks Logo">
        <path d="M20 15V85H65" stroke={color || "#0F172A"} strokeWidth="12" strokeLinecap="round" />
        <path d="M45 55L75 55L75 65L45 55Z" fill="#CA8A04" /> {/* Gold */}
        <circle cx="75" cy="45" r="7" fill="#334155" /> {/* Slate */}
    </svg>
);
