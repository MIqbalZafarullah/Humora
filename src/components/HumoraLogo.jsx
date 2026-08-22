import React from 'react';
import logoImg from '../assets/humora-logo.png';

export default function HumoraLogo({ 
  size = 40, 
  showText = true, 
  className = "", 
  textClassName = "text-2xl font-extrabold tracking-tight text-[#0c4a3e]" 
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img 
        src={logoImg} 
        alt="Humora Official Logo" 
        style={{ width: `${size}px`, height: `${size}px` }}
        className="object-contain shrink-0 filter drop-shadow-sm"
      />
      {showText && (
        <span className={`font-serif ${textClassName}`}>
          Humora
        </span>
      )}
    </div>
  );
}
