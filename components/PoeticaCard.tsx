
import React from 'react';

interface PoeticaCardProps {
  title: string;
  content: string;
  delay?: number;
}

const PoeticaCard: React.FC<PoeticaCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="w-10 h-1 bg-emerald-700 mb-6 rounded-full"></div>
      <h3 className="text-xl font-bold mb-4 text-stone-800 leading-tight">
        {title}
      </h3>
      <p className="text-stone-600 leading-relaxed text-sm">
        {content}
      </p>
    </div>
  );
};

export default PoeticaCard;
