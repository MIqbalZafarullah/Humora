import React from 'react';
import logoImg from '../assets/logo.png';

export default function SigniaLogo({ size = 40, showText = true, className = "", textClassName = "text-2xl font-bold tracking-tight text-slate-900" }) {
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <img 
        src={logoImg} 
        alt="SIGNIA Logo" 
        style={{ width: `${size}px`, height: `${size}px` }}
        className="object-contain"
      />
      {showText && (
        <span className={textClassName}>
          SIGNIA
        </span>
      )}
    </div>
  );
}
