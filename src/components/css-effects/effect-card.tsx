'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CssEffect } from './effects-data';

// Demo renderers for each effect
function EffectDemo({ effect }: { effect: CssEffect }) {
  switch (effect.id) {
    // ANIMATIONS
    case 'pulse':
      return (
        <div className="flex items-center justify-center h-full">
          <div
            className="w-20 h-20 rounded-xl bg-gradient-to-br from-pink-400 to-purple-500"
            style={{ animation: 'fx-pulse 2s ease-in-out infinite' }}
          />
        </div>
      );
    case 'bounce':
      return (
        <div className="flex items-center justify-center h-full">
          <div
            className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"
            style={{ animation: 'fx-bounce 1s ease infinite' }}
          />
        </div>
      );
    case 'spin':
      return (
        <div className="flex items-center justify-center h-full">
          <div
            className="w-16 h-16 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500"
            style={{ animation: 'fx-spin 2s linear infinite' }}
          />
        </div>
      );
    case 'fade-in':
      return <FadeInDemo />;
    case 'slide-in':
      return <SlideInDemo />;
    case 'shake':
      return <ShakeDemo />;
    case 'swing':
      return (
        <div className="flex items-start justify-center h-full pt-4">
          <div
            className="w-12 h-20 rounded-lg bg-gradient-to-b from-rose-400 to-pink-600"
            style={{ animation: 'fx-swing 1.5s ease-in-out infinite', transformOrigin: 'top center' }}
          />
        </div>
      );

    // HOVER EFFECTS
    case 'hover-zoom':
      return (
        <div className="flex items-center justify-center h-full">
          <div
            className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 cursor-pointer transition-transform duration-300 hover:scale-115"
          />
        </div>
      );
    case 'hover-lift':
      return (
        <div className="flex items-center justify-center h-full">
          <div
            className="w-24 h-20 rounded-xl bg-white border border-gray-200 shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          />
        </div>
      );
    case 'hover-flip':
      return <FlipDemo />;
    case 'hover-glow':
      return (
        <div className="flex items-center justify-center h-full">
          <div
            className="w-20 h-20 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(255,107,157,0.5),0_0_30px_rgba(255,107,157,0.3),0_0_45px_rgba(255,107,157,0.15)]"
          />
        </div>
      );
    case 'hover-underline':
      return (
        <div className="flex items-center justify-center h-full">
          <span className="text-xl font-bold relative cursor-pointer after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-pink-400 after:transition-all after:duration-300 hover:after:w-full">
            Survolez-moi
          </span>
        </div>
      );
    case 'hover-color-shift':
      return (
        <div className="flex items-center justify-center h-full">
          <div
            className="w-24 h-16 rounded-xl flex items-center justify-center text-sm font-medium text-white transition-all duration-400 cursor-pointer"
            style={{ background: '#1a1a2e' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #ff6b9d, #c084fc)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1a1a2e';
            }}
          >
            Survolez
          </div>
        </div>
      );

    // TEXT EFFECTS
    case 'text-gradient':
      return (
        <div className="flex items-center justify-center h-full">
          <span
            className="text-2xl font-extrabold"
            style={{
              background: 'linear-gradient(90deg, #ff6b9d, #c084fc, #22d3ee, #ff6b9d)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'fx-gradient-shift 4s ease infinite',
            }}
          >
            Dégradé CSS
          </span>
        </div>
      );
    case 'text-neon':
      return (
        <div className="flex items-center justify-center h-full bg-gray-900 rounded-lg">
          <span
            className="text-2xl font-extrabold text-white"
            style={{ animation: 'fx-neon-flicker 3s infinite' }}
          >
            NÉON
          </span>
        </div>
      );
    case 'text-shadow-multi':
      return (
        <div className="flex items-center justify-center h-full bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg">
          <span
            className="text-3xl font-extrabold text-white"
            style={{
              textShadow: '1px 1px 0 #ff6b9d, 2px 2px 0 #e5568a, 3px 3px 0 #cc4077, 4px 4px 0 #b32a64, 5px 5px 0 #991451, 6px 6px 10px rgba(0,0,0,0.3)',
            }}
          >
            3D
          </span>
        </div>
      );
    case 'text-glitch':
      return <GlitchDemo />;
    case 'text-typewriter':
      return <TypewriterDemo />;

    // BUTTON EFFECTS
    case 'btn-ripple':
      return <RippleButtonDemo />;
    case 'btn-fill':
      return <FillButtonDemo />;
    case 'btn-glow':
      return (
        <div className="flex items-center justify-center h-full">
          <button
            className="px-6 py-2.5 rounded-lg text-white font-medium cursor-pointer"
            style={{
              background: '#ff6b9d',
              animation: 'fx-btn-glow 2s ease-in-out infinite',
            }}
          >
            Lueur
          </button>
        </div>
      );
    case 'btn-border-glow':
      return (
        <div className="flex items-center justify-center h-full bg-gray-900 rounded-lg">
          <button
            className="px-6 py-2.5 rounded-lg text-white font-medium bg-transparent cursor-pointer"
            style={{
              border: '2px solid #ff6b9d',
              animation: 'fx-border-glow 3s ease infinite',
            }}
          >
            Bordure
          </button>
        </div>
      );
    case 'btn-shimmer':
      return (
        <div className="flex items-center justify-center h-full">
          <button
            className="px-6 py-2.5 rounded-lg text-white font-medium cursor-pointer border-none"
            style={{
              background: 'linear-gradient(110deg, #ff6b9d 0%, #ff6b9d 40%, #ffb3cc 50%, #ff6b9d 60%, #ff6b9d 100%)',
              backgroundSize: '200% 100%',
              animation: 'fx-shimmer 2s ease-in-out infinite',
            }}
          >
            Brillance
          </button>
        </div>
      );

    // LOADERS
    case 'loader-spinner':
      return (
        <div className="flex items-center justify-center h-full">
          <div
            className="w-10 h-10 rounded-full"
            style={{
              border: '4px solid #e5e7eb',
              borderTopColor: '#ff6b9d',
              animation: 'fx-loader-spin 0.8s linear infinite',
            }}
          />
        </div>
      );
    case 'loader-dots':
      return (
        <div className="flex items-center justify-center h-full">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-pink-400"
                style={{
                  animation: 'fx-dot-bounce 1.4s ease-in-out infinite',
                  animationDelay: `${i * 0.16}s`,
                }}
              />
            ))}
          </div>
        </div>
      );
    case 'loader-bar':
      return (
        <div className="flex items-center justify-center h-full">
          <div
            className="w-30 h-1 rounded-full bg-gray-200 relative overflow-hidden"
          >
            <div
              className="absolute top-0 h-full w-[30%] rounded-full bg-pink-400"
              style={{ animation: 'fx-bar-loader 1s ease-in-out infinite', left: '-30%' }}
            />
          </div>
        </div>
      );
    case 'loader-circle':
      return (
        <div className="flex items-center justify-center h-full">
          <div
            className="w-10 h-10 rounded-full"
            style={{
              border: '3px solid transparent',
              borderTopColor: '#ff6b9d',
              borderRightColor: '#c084fc',
              animation: 'fx-circle-spin 1s linear infinite',
            }}
          />
        </div>
      );
    case 'loader-pulse':
      return (
        <div className="flex items-center justify-center h-full">
          <div
            className="w-10 h-10 rounded-full bg-pink-400"
            style={{ animation: 'fx-loader-pulse 1.5s ease-in-out infinite' }}
          />
        </div>
      );

    // BACKGROUND EFFECTS
    case 'bg-animated-gradient':
      return (
        <div
          className="w-full h-full rounded-lg"
          style={{
            background: 'linear-gradient(-45deg, #ff6b9d, #c084fc, #22d3ee, #fbbf24)',
            backgroundSize: '400% 400%',
            animation: 'fx-bg-gradient 8s ease infinite',
          }}
        />
      );
    case 'bg-mesh':
      return (
        <div
          className="w-full h-full rounded-lg"
          style={{
            backgroundColor: '#1a1a2e',
            backgroundImage: `
              radial-gradient(at 40% 20%, rgba(255,107,157,0.5) 0px, transparent 50%),
              radial-gradient(at 80% 0%, rgba(192,132,252,0.5) 0px, transparent 50%),
              radial-gradient(at 0% 50%, rgba(34,211,238,0.5) 0px, transparent 50%),
              radial-gradient(at 80% 50%, rgba(251,191,36,0.5) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(52,211,153,0.5) 0px, transparent 50%)
            `,
          }}
        />
      );
    case 'bg-aurora':
      return (
        <div className="w-full h-full rounded-lg overflow-hidden relative" style={{ background: '#0f172a' }}>
          <div
            className="absolute"
            style={{
              width: '200%',
              height: '200%',
              top: '50%',
              left: '50%',
              background: `conic-gradient(from 0deg, transparent 0%, rgba(255,107,157,0.15) 10%, transparent 20%, rgba(192,132,252,0.15) 30%, transparent 40%, rgba(34,211,238,0.15) 50%, transparent 60%, rgba(52,211,153,0.15) 70%, transparent 80%, rgba(255,107,157,0.15) 90%, transparent 100%)`,
              animation: 'fx-aurora 15s linear infinite',
              filter: 'blur(60px)',
            }}
          />
        </div>
      );
    case 'bg-dots':
      return (
        <div
          className="w-full h-full rounded-lg"
          style={{
            backgroundColor: '#fafafa',
            backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
            backgroundSize: '16px 16px',
          }}
        />
      );

    // CARD EFFECTS
    case 'card-glass':
      return (
        <div
          className="w-full h-full rounded-xl p-6 flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255,107,157,0.3), rgba(192,132,252,0.3), rgba(34,211,238,0.3))',
          }}
        >
          <div
            className="w-full h-full rounded-xl p-4 flex flex-col items-center justify-center text-white"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <div className="text-sm font-medium">Glassmorphisme</div>
            <div className="text-xs opacity-70 mt-1">Flou d'arrière-plan</div>
          </div>
        </div>
      );
    case 'card-neumorphism':
      return (
        <div className="w-full h-full rounded-xl p-4 flex flex-col items-center justify-center" style={{ background: '#e0e0e0' }}>
          <div
            className="w-full h-full rounded-2xl p-4 flex flex-col items-center justify-center"
            style={{
              background: '#e0e0e0',
              boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
            }}
          >
            <div className="text-sm font-medium text-gray-700">Néomorphisme</div>
            <div className="text-xs text-gray-500 mt-1">Relief doux</div>
          </div>
        </div>
      );
    case 'card-gradient-border':
      return <GradientBorderCard />;
    case 'card-float':
      return (
        <div className="flex items-center justify-center h-full">
          <div
            className="w-28 h-20 rounded-xl bg-white border border-gray-100 shadow-md flex flex-col items-center justify-center"
            style={{ animation: 'fx-card-float 3s ease-in-out infinite' }}
          >
            <div className="text-sm font-medium">Flottant</div>
            <div className="text-xs text-gray-400">Lévitation</div>
          </div>
        </div>
      );
    case 'card-spotlight':
      return <SpotlightDemo />;

    default:
      return (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Démo à venir
        </div>
      );
  }
}

// Special demo components
function FadeInDemo() {
  const [key, setKey] = useState(0);
  return (
    <div className="flex items-center justify-center h-full">
      <div
        key={key}
        className="w-20 h-20 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600"
        style={{ animation: 'fx-fade-in 0.8s ease-out forwards' }}
        onClick={() => setKey((k) => k + 1)}
        role="button"
        tabIndex={0}
      />
      <button
        onClick={() => setKey((k) => k + 1)}
        className="absolute bottom-2 right-2 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        ↻ Rejouer
      </button>
    </div>
  );
}

function SlideInDemo() {
  const [key, setKey] = useState(0);
  return (
    <div className="flex items-center justify-center h-full relative">
      <div
        key={key}
        className="w-24 h-16 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600"
        style={{ animation: 'fx-slide-in-left 0.6s ease-out forwards' }}
      />
      <button
        onClick={() => setKey((k) => k + 1)}
        className="absolute bottom-2 right-2 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        ↻ Rejouer
      </button>
    </div>
  );
}

function ShakeDemo() {
  const [key, setKey] = useState(0);
  return (
    <div className="flex items-center justify-center h-full relative">
      <div
        key={key}
        className="w-20 h-20 rounded-xl bg-gradient-to-br from-red-400 to-rose-600 flex items-center justify-center"
      >
        <span className="text-white text-xl">🔔</span>
      </div>
      <button
        onClick={() => setKey((k) => k + 1)}
        className="absolute bottom-2 right-2 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        ↻ Rejouer
      </button>
    </div>
  );
}

function FlipDemo() {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flex items-center justify-center h-full" style={{ perspective: '800px' }}>
      <div
        className="w-24 h-20 cursor-pointer"
        style={{
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0)',
        }}
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-medium text-sm"
          style={{ backfaceVisibility: 'hidden' }}
        >
          Recto
        </div>
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-white font-medium text-sm"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          Verso
        </div>
      </div>
    </div>
  );
}

function GlitchDemo() {
  return (
    <div className="flex items-center justify-center h-full bg-gray-900 rounded-lg">
      <span
        className="text-2xl font-extrabold text-white relative"
        data-text="GLITCH"
        style={{ animation: 'fx-glitch-1 2s infinite' }}
      >
        GLITCH
        <span
          className="absolute top-0 left-0"
          style={{ color: '#ff6b9d', animation: 'fx-glitch-2 2s infinite' }}
          aria-hidden
        >
          GLITCH
        </span>
        <span
          className="absolute top-0 left-0"
          style={{ color: '#22d3ee', animation: 'fx-glitch-1 2s infinite reverse' }}
          aria-hidden
        >
          GLITCH
        </span>
      </span>
    </div>
  );
}

function TypewriterDemo() {
  const [key, setKey] = useState(0);
  return (
    <div className="flex items-center justify-center h-full relative">
      <div
        key={key}
        className="overflow-hidden border-r-2 border-current whitespace-nowrap"
        style={{
          animation: 'fx-typewriter 3s steps(20) forwards, fx-blink-caret 0.75s step-end infinite',
          width: '0',
        }}
      >
        <span className="text-lg font-mono font-bold">Bonjour le monde !</span>
      </div>
      <button
        onClick={() => setKey((k) => k + 1)}
        className="absolute bottom-2 right-2 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        ↻ Rejouer
      </button>
    </div>
  );
}

function RippleButtonDemo() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: 100%;
      height: 100%;
      top: ${y}px;
      left: ${x}px;
      background: rgba(255,255,255,0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: fx-ripple 0.6s ease-out;
      pointer-events: none;
    `;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <button
        ref={btnRef}
        className="px-6 py-2.5 rounded-lg text-white font-medium cursor-pointer relative overflow-hidden border-none"
        style={{ background: '#ff6b9d' }}
        onClick={handleClick}
      >
        Cliquez
      </button>
    </div>
  );
}

function FillButtonDemo() {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex items-center justify-center h-full">
      <button
        className="px-6 py-2.5 rounded-lg font-medium cursor-pointer relative overflow-hidden z-[1] border-2 border-pink-400 transition-colors duration-300"
        style={{
          background: 'transparent',
          color: hovered ? 'white' : '#ff6b9d',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span
          className="absolute bottom-0 left-0 w-full transition-all duration-300 z-[-1]"
          style={{
            height: hovered ? '100%' : '0',
            background: '#ff6b9d',
          }}
        />
        Remplissage
      </button>
    </div>
  );
}

function GradientBorderCard() {
  return (
    <div className="flex items-center justify-center h-full bg-gray-900 rounded-lg p-1">
      <div
        className="w-full h-full rounded-xl flex flex-col items-center justify-center relative"
        style={{ background: '#1a1a2e' }}
      >
        <div
          className="absolute inset-[-2px] rounded-[14px] -z-10"
          style={{
            background: 'linear-gradient(90deg, #ff6b9d, #c084fc, #22d3ee, #ff6b9d)',
            backgroundSize: '300% 100%',
            animation: 'fx-gradient-shift 4s ease infinite',
          }}
        />
        <div className="text-sm font-medium text-white">Bordure dégradée</div>
        <div className="text-xs text-gray-400 mt-1">Animation en boucle</div>
      </div>
    </div>
  );
}

function SpotlightDemo() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [show, setShow] = useState(false);

  return (
    <div
      className="w-full h-full rounded-xl overflow-hidden relative cursor-pointer"
      style={{ background: '#1a1a2e' }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          width: '150px',
          height: '150px',
          top: pos.y - 75,
          left: pos.x - 75,
          background: 'radial-gradient(circle, rgba(255,107,157,0.2), transparent 70%)',
          borderRadius: '50%',
          opacity: show ? 1 : 0,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="text-sm font-medium">Projecteur</div>
        <div className="text-xs text-gray-400 mt-1">Déplacez la souris</div>
      </div>
    </div>
  );
}

// Main EffectCard component
export function EffectCard({ effect }: { effect: CssEffect }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(effect.css);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = effect.css;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [effect.css]);

  const difficultyColor = {
    Débutant: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    Intermédiaire: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    Avancé: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  };

  return (
    <Card className="group overflow-hidden border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 gap-0">
      {/* Demo area */}
      <div className="relative h-44 overflow-hidden bg-muted/30 border-b border-border/50">
        <EffectDemo effect={effect} />
        <div className="absolute top-2 right-2">
          <Badge
            className={`text-[10px] px-1.5 py-0 ${difficultyColor[effect.difficulty]}`}
            variant="secondary"
          >
            {effect.difficulty}
          </Badge>
        </div>
      </div>

      {/* Info area */}
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-base">{effect.name}</CardTitle>
        <CardDescription className="text-xs leading-relaxed">
          {effect.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        {/* Toggle code button */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs gap-1 flex-1 cursor-pointer"
            onClick={() => setShowCode(!showCode)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            {showCode ? 'Masquer' : 'Voir le code'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs gap-1 cursor-pointer"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copié !
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                Copier
              </>
            )}
          </Button>
        </div>

        {/* Code block */}
        {showCode && (
          <div className="mt-3 rounded-lg overflow-hidden border border-border/50">
            <div className="bg-muted/50 px-3 py-1.5 flex items-center justify-between border-b border-border/50">
              <span className="text-[10px] font-mono text-muted-foreground">CSS</span>
            </div>
            <pre className="p-3 text-xs font-mono leading-relaxed overflow-x-auto code-scroll bg-background max-h-56 overflow-y-auto">
              <code>{effect.css}</code>
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
