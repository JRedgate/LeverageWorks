
import React from 'react';
import { ServiceCardProps } from '../../types';

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
    <article className="p-8 bg-white border border-gray-100 rounded-lg hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 group relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>

        <div className="mb-6 text-brand-navy transform transition-transform group-hover:scale-110 duration-300 bg-brand-surface p-4 rounded-full w-fit">
            {icon}
        </div>

        <h3 className="font-display font-bold text-xl mb-3 text-brand-navy group-hover:text-brand-gold transition-colors">{title}</h3>
        <p className="text-brand-slate leading-relaxed text-sm">{description}</p>
    </article>
);
