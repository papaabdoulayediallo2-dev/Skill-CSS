export interface CssEffect {
  id: string;
  name: string;
  description: string;
  css: string;
  category: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  { id: 'animations', name: 'Animations', icon: '🎬', description: 'Animations keyframes CSS' },
  { id: 'survol', name: 'Effets au survol', icon: '👆', description: 'Transformations au hover' },
  { id: 'texte', name: 'Effets de texte', icon: '✍️', description: 'Typographie créative' },
  { id: 'boutons', name: 'Effets de boutons', icon: '🔘', description: 'Interactions de boutons' },
  { id: 'chargeurs', name: 'Chargeurs', icon: '⏳', description: 'Indicateurs de chargement' },
  { id: 'fonds', name: 'Effets de fond', icon: '🎨', description: 'Arrière-plans animés' },
  { id: 'cartes', name: 'Effets de cartes', icon: '🃏', description: 'Styles de cartes modernes' },
];

export const effects: CssEffect[] = [
  // =====================
  // ANIMATIONS
  // =====================
  {
    id: 'pulse',
    name: 'Pulsation',
    description: 'Animation de pulsation douce qui donne un effet de respiration à l\'élément.',
    category: 'animations',
    difficulty: 'Débutant',
    css: `.pulse {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.08);
    opacity: 0.85;
  }
}`,
  },
  {
    id: 'bounce',
    name: 'Rebond',
    description: 'Animation de rebond avec effet naturel et ralentissement progressif.',
    category: 'animations',
    difficulty: 'Débutant',
    css: `.bounce {
  animation: bounce 1s ease infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(-10px);
  }
}`,
  },
  {
    id: 'spin',
    name: 'Rotation',
    description: 'Rotation continue et fluide sur 360 degrés.',
    category: 'animations',
    difficulty: 'Débutant',
    css: `.spin {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`,
  },
  {
    id: 'fade-in',
    name: 'Fondu entrant',
    description: 'Apparition progressive avec un léger glissement vers le haut.',
    category: 'animations',
    difficulty: 'Débutant',
    css: `.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,
  },
  {
    id: 'slide-in',
    name: 'Glissement latéral',
    description: 'Entrée latérale fluide depuis la gauche.',
    category: 'animations',
    difficulty: 'Intermédiaire',
    css: `.slide-in {
  animation: slideIn 0.6s ease-out forwards;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}`,
  },
  {
    id: 'shake',
    name: 'Tremblement',
    description: 'Effet de tremblement rapide, idéal pour les alertes ou notifications.',
    category: 'animations',
    difficulty: 'Intermédiaire',
    css: `.shake {
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}`,
  },
  {
    id: 'swing',
    name: 'Balancement',
    description: 'Animation de balancement pendulaire avec amortissement.',
    category: 'animations',
    difficulty: 'Intermédiaire',
    css: `.swing {
  animation: swing 1.5s ease-in-out infinite;
  transform-origin: top center;
}

@keyframes swing {
  0%, 100% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(15deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(5deg);
  }
  80% {
    transform: rotate(-5deg);
  }
}`,
  },

  // =====================
  // EFFETS AU SURVOL
  // =====================
  {
    id: 'hover-zoom',
    name: 'Zoom au survol',
    description: 'Agrandissement progressif de l\'élément lors du passage de la souris.',
    category: 'survol',
    difficulty: 'Débutant',
    css: `.hover-zoom {
  transition: transform 0.3s ease;
}

.hover-zoom:hover {
  transform: scale(1.15);
}`,
  },
  {
    id: 'hover-lift',
    name: 'Élévation',
    description: 'L\'élément semble s\'élever avec une ombre qui s\'agrandit au survol.',
    category: 'survol',
    difficulty: 'Débutant',
    css: `.hover-lift {
  transition: transform 0.3s ease,
              box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}`,
  },
  {
    id: 'hover-flip',
    name: 'Retournement 3D',
    description: 'Retournement en perspective 3D pour révéler le contenu au survol.',
    category: 'survol',
    difficulty: 'Avancé',
    css: `.flip-container {
  perspective: 800px;
}

.flip-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-container:hover .flip-inner {
  transform: rotateY(180deg);
}

.flip-front, .flip-back {
  backface-visibility: hidden;
}

.flip-back {
  transform: rotateY(180deg);
}`,
  },
  {
    id: 'hover-glow',
    name: 'Lueur au survol',
    description: 'Effet de halo lumineux coloré apparaissant au survol.',
    category: 'survol',
    difficulty: 'Intermédiaire',
    css: `.hover-glow {
  transition: box-shadow 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 15px rgba(255, 107, 157, 0.5),
              0 0 30px rgba(255, 107, 157, 0.3),
              0 0 45px rgba(255, 107, 157, 0.15);
}`,
  },
  {
    id: 'hover-underline',
    name: 'Soulignement animé',
    description: 'Ligne de soulignement qui se dessine progressivement sous le texte.',
    category: 'survol',
    difficulty: 'Débutant',
    css: `.hover-underline {
  position: relative;
  text-decoration: none;
}

.hover-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #ff6b9d;
  transition: width 0.3s ease;
}

.hover-underline:hover::after {
  width: 100%;
}`,
  },
  {
    id: 'hover-color-shift',
    name: 'Changement de couleur',
    description: 'Transition douce de couleur de fond au survol avec dégradé.',
    category: 'survol',
    difficulty: 'Débutant',
    css: `.hover-color-shift {
  background: #1a1a2e;
  color: white;
  transition: background 0.4s ease,
              color 0.4s ease;
}

.hover-color-shift:hover {
  background: linear-gradient(135deg, #ff6b9d, #c084fc);
}`,
  },

  // =====================
  // EFFETS DE TEXTE
  // =====================
  {
    id: 'text-gradient',
    name: 'Texte dégradé',
    description: 'Texte coloré avec un dégradé animé qui se déplace en continu.',
    category: 'texte',
    difficulty: 'Débutant',
    css: `.text-gradient {
  background: linear-gradient(
    90deg,
    #ff6b9d, #c084fc, #22d3ee, #ff6b9d
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 4s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  },
  {
    id: 'text-neon',
    name: 'Texte néon',
    description: 'Effet de texte lumineux style enseigne au néon avec scintillement.',
    category: 'texte',
    difficulty: 'Avancé',
    css: `.text-neon {
  color: #fff;
  text-shadow:
    0 0 4px #fff,
    0 0 11px #fff,
    0 0 19px #fff,
    0 0 40px #ff6b9d,
    0 0 80px #ff6b9d,
    0 0 90px #ff6b9d;
  animation: neon-flicker 3s infinite;
}

@keyframes neon-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #ff6b9d,
      0 0 80px #ff6b9d,
      0 0 90px #ff6b9d;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
}`,
  },
  {
    id: 'text-shadow-multi',
    name: 'Ombres multiples',
    description: 'Texte avec plusieurs couches d\'ombres créant un effet de profondeur 3D.',
    category: 'texte',
    difficulty: 'Intermédiaire',
    css: `.text-shadow-multi {
  color: white;
  text-shadow:
    1px 1px 0 #ff6b9d,
    2px 2px 0 #e5568a,
    3px 3px 0 #cc4077,
    4px 4px 0 #b32a64,
    5px 5px 0 #991451,
    6px 6px 10px rgba(0, 0, 0, 0.3);
}`,
  },
  {
    id: 'text-glitch',
    name: 'Effet glitch',
    description: 'Effet de dysfonctionnement numérique avec décalage de couleurs RGB.',
    category: 'texte',
    difficulty: 'Avancé',
    css: `.text-glitch {
  position: relative;
  animation: glitch-1 2s infinite;
}

.text-glitch::before,
.text-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}

.text-glitch::before {
  color: #ff6b9d;
  animation: glitch-2 2s infinite;
}

.text-glitch::after {
  color: #22d3ee;
  animation: glitch-1 2s infinite reverse;
}

@keyframes glitch-1 {
  0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
  20% { clip-path: inset(20% 0 60% 0); transform: translate(-3px, 2px); }
  40% { clip-path: inset(60% 0 10% 0); transform: translate(3px, -2px); }
  60% { clip-path: inset(40% 0 30% 0); transform: translate(-2px, 1px); }
  80% { clip-path: inset(10% 0 70% 0); transform: translate(2px, -1px); }
}`,
  },
  {
    id: 'text-typewriter',
    name: 'Machine à écrire',
    description: 'Texte qui s\'affiche lettre par lettre comme tapé sur une machine.',
    category: 'texte',
    difficulty: 'Intermédiaire',
    css: `.typewriter {
  overflow: hidden;
  border-right: 2px solid currentColor;
  white-space: nowrap;
  animation:
    typing 3s steps(20) forwards,
    blink-caret 0.75s step-end infinite;
  width: 0;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: currentColor; }
}`,
  },

  // =====================
  // EFFETS DE BOUTONS
  // =====================
  {
    id: 'btn-ripple',
    name: 'Ondulation',
    description: 'Effet d\'ondulation qui se propage depuis le point de clic.',
    category: 'boutons',
    difficulty: 'Intermédiaire',
    css: `.btn-ripple {
  position: relative;
  overflow: hidden;
  background: #ff6b9d;
  color: white;
  border: none;
  cursor: pointer;
}

.btn-ripple::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transform: scale(0);
  opacity: 1;
}

.btn-ripple:active::after {
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}`,
  },
  {
    id: 'btn-fill',
    name: 'Remplissage',
    description: 'Le fond du bouton se remplit progressivement de bas en haut au survol.',
    category: 'boutons',
    difficulty: 'Débutant',
    css: `.btn-fill {
  position: relative;
  background: transparent;
  color: #ff6b9d;
  border: 2px solid #ff6b9d;
  overflow: hidden;
  z-index: 1;
}

.btn-fill::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: #ff6b9d;
  z-index: -1;
  transition: height 0.3s ease;
}

.btn-fill:hover::before {
  height: 100%;
}

.btn-fill:hover {
  color: white;
}`,
  },
  {
    id: 'btn-glow',
    name: 'Lueur animée',
    description: 'Bouton avec halo lumineux qui pulse en continu.',
    category: 'boutons',
    difficulty: 'Intermédiaire',
    css: `.btn-glow {
  background: #ff6b9d;
  color: white;
  border: none;
  animation: btn-glow 2s ease-in-out infinite;
}

@keyframes btn-glow {
  0%, 100% {
    box-shadow: 0 0 5px rgba(255, 107, 157, 0.4),
                0 0 20px rgba(255, 107, 157, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(255, 107, 157, 0.6),
                0 0 40px rgba(255, 107, 157, 0.3);
  }
}`,
  },
  {
    id: 'btn-border-glow',
    name: 'Bordure lumineuse',
    description: 'Bordure du bouton qui change de couleur en boucle avec effet lumineux.',
    category: 'boutons',
    difficulty: 'Avancé',
    css: `.btn-border-glow {
  background: transparent;
  color: white;
  border: 2px solid #ff6b9d;
  animation: border-glow 3s ease infinite;
}

@keyframes border-glow {
  0%, 100% {
    border-color: #ff6b9d;
    box-shadow: 0 0 5px rgba(255, 107, 157, 0.3);
  }
  33% {
    border-color: #c084fc;
    box-shadow: 0 0 5px rgba(192, 132, 252, 0.3);
  }
  66% {
    border-color: #22d3ee;
    box-shadow: 0 0 5px rgba(34, 211, 238, 0.3);
  }
}`,
  },
  {
    id: 'btn-shimmer',
    name: 'Brillance',
    description: 'Effet de brillance (shimmer) qui traverse le bouton en boucle.',
    category: 'boutons',
    difficulty: 'Intermédiaire',
    css: `.btn-shimmer {
  background: linear-gradient(
    110deg,
    #ff6b9d 0%,
    #ff6b9d 40%,
    #ffb3cc 50%,
    #ff6b9d 60%,
    #ff6b9d 100%
  );
  background-size: 200% 100%;
  color: white;
  border: none;
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}`,
  },

  // =====================
  // CHARGEURS
  // =====================
  {
    id: 'loader-spinner',
    name: 'Rotation classique',
    description: 'Indicateur de chargement rotatif avec bordure partielle.',
    category: 'chargeurs',
    difficulty: 'Débutant',
    css: `.loader-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e5e7eb;
  border-top-color: #ff6b9d;
  border-radius: 50%;
  animation: loader-spin 0.8s linear infinite;
}

@keyframes loader-spin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: 'loader-dots',
    name: 'Points rebondissants',
    description: 'Trois points qui rebondissent en séquence pour indiquer le chargement.',
    category: 'chargeurs',
    difficulty: 'Intermédiaire',
    css: `.loader-dots {
  display: flex;
  gap: 6px;
}

.loader-dots span {
  width: 10px;
  height: 10px;
  background: #ff6b9d;
  border-radius: 50%;
  animation: dot-bounce 1.4s ease-in-out infinite;
}

.loader-dots span:nth-child(2) {
  animation-delay: 0.16s;
}

.loader-dots span:nth-child(3) {
  animation-delay: 0.32s;
}

@keyframes dot-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}`,
  },
  {
    id: 'loader-bar',
    name: 'Barre de progression',
    description: 'Barre animée qui glisse de gauche à droite en boucle.',
    category: 'chargeurs',
    difficulty: 'Débutant',
    css: `.loader-bar {
  width: 120px;
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}

.loader-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: -30%;
  width: 30%;
  height: 100%;
  background: #ff6b9d;
  border-radius: 2px;
  animation: bar-loader 1s ease-in-out infinite;
}

@keyframes bar-loader {
  0% { left: -30%; }
  100% { left: 100%; }
}`,
  },
  {
    id: 'loader-circle',
    name: 'Cercle tournant',
    description: 'Cercle animé avec trait qui se dessine progressivement.',
    category: 'chargeurs',
    difficulty: 'Intermédiaire',
    css: `.loader-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #ff6b9d;
  border-right-color: #c084fc;
  animation: circle-spin 1s linear infinite;
}

@keyframes circle-spin {
  to { transform: rotate(360deg); }
}`,
  },
  {
    id: 'loader-pulse',
    name: 'Pulsation',
    description: 'Cercle qui pulse en changeant de taille et d\'opacité.',
    category: 'chargeurs',
    difficulty: 'Débutant',
    css: `.loader-pulse {
  width: 40px;
  height: 40px;
  background: #ff6b9d;
  border-radius: 50%;
  animation: loader-pulse 1.5s ease-in-out infinite;
}

@keyframes loader-pulse {
  0%, 100% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}`,
  },

  // =====================
  // EFFETS DE FOND
  // =====================
  {
    id: 'bg-animated-gradient',
    name: 'Dégradé animé',
    description: 'Fond avec dégradé de couleurs qui se déplace en continu.',
    category: 'fonds',
    difficulty: 'Intermédiaire',
    css: `.bg-animated-gradient {
  background: linear-gradient(
    -45deg,
    #ff6b9d,
    #c084fc,
    #22d3ee,
    #fbbf24
  );
  background-size: 400% 400%;
  animation: bg-gradient 8s ease infinite;
}

@keyframes bg-gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  },
  {
    id: 'bg-mesh',
    name: 'Grille maillée',
    description: 'Arrière-plan avec motif de grille maillée animée en CSS pur.',
    category: 'fonds',
    difficulty: 'Avancé',
    css: `.bg-mesh {
  background-color: #1a1a2e;
  background-image:
    radial-gradient(at 40% 20%, #ff6b9d 0px, transparent 50%),
    radial-gradient(at 80% 0%, #c084fc 0px, transparent 50%),
    radial-gradient(at 0% 50%, #22d3ee 0px, transparent 50%),
    radial-gradient(at 80% 50%, #fbbf24 0px, transparent 50%),
    radial-gradient(at 0% 100%, #34d399 0px, transparent 50%);
  opacity: 0.85;
}`,
  },
  {
    id: 'bg-aurora',
    name: 'Aurore boréale',
    description: 'Effet d\'aurore boréale avec des formes floues qui tournent lentement.',
    category: 'fonds',
    difficulty: 'Avancé',
    css: `.bg-aurora {
  background: #0f172a;
  position: relative;
  overflow: hidden;
}

.bg-aurora::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: 50%;
  left: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    rgba(255, 107, 157, 0.15) 10%,
    transparent 20%,
    rgba(192, 132, 252, 0.15) 30%,
    transparent 40%,
    rgba(34, 211, 238, 0.15) 50%,
    transparent 60%,
    rgba(52, 211, 153, 0.15) 70%,
    transparent 80%,
    rgba(255, 107, 157, 0.15) 90%,
    transparent 100%
  );
  animation: aurora 15s linear infinite;
  filter: blur(60px);
}

@keyframes aurora {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}`,
  },
  {
    id: 'bg-dots',
    name: 'Motif de points',
    description: 'Arrière-plan avec motif de points répétés en CSS pur.',
    category: 'fonds',
    difficulty: 'Intermédiaire',
    css: `.bg-dots {
  background-color: #fafafa;
  background-image:
    radial-gradient(#d1d5db 1px, transparent 1px);
  background-size: 16px 16px;
}`,
  },

  // =====================
  // EFFETS DE CARTES
  // =====================
  {
    id: 'card-glass',
    name: 'Glassmorphisme',
    description: 'Carte avec effet de verre dépoli et flou d\'arrière-plan.',
    category: 'cartes',
    difficulty: 'Intermédiaire',
    css: `.card-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 24px;
}`,
  },
  {
    id: 'card-neumorphism',
    name: 'Néomorphisme',
    description: 'Carte en relief doux avec ombres internes et externes subtiles.',
    category: 'cartes',
    difficulty: 'Intermédiaire',
    css: `.card-neumorphism {
  background: #e0e0e0;
  border-radius: 16px;
  padding: 24px;
  box-shadow:
    8px 8px 16px #bebebe,
    -8px -8px 16px #ffffff;
}`,
  },
  {
    id: 'card-gradient-border',
    name: 'Bordure dégradée',
    description: 'Carte avec bordure animée en dégradé de couleurs.',
    category: 'cartes',
    difficulty: 'Avancé',
    css: `.card-gradient-border {
  position: relative;
  background: #1a1a2e;
  border-radius: 12px;
  padding: 24px;
}

.card-gradient-border::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 14px;
  background: linear-gradient(
    90deg,
    #ff6b9d,
    #c084fc,
    #22d3ee,
    #ff6b9d
  );
  background-size: 300% 100%;
  animation: gradient-shift 4s ease infinite;
  z-index: -1;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  },
  {
    id: 'card-float',
    name: 'Carte flottante',
    description: 'Carte qui lévite doucement avec une ombre qui bouge.',
    category: 'cartes',
    difficulty: 'Débutant',
    css: `.card-float {
  animation: card-float 3s ease-in-out infinite;
  border-radius: 12px;
  padding: 24px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@keyframes card-float {
  0%, 100% {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}`,
  },
  {
    id: 'card-spotlight',
    name: 'Projecteur',
    description: 'Effet de projecteur qui suit le curseur sur la carte.',
    category: 'cartes',
    difficulty: 'Avancé',
    css: `.card-spotlight {
  position: relative;
  background: #1a1a2e;
  border-radius: 12px;
  padding: 24px;
  overflow: hidden;
}

.card-spotlight::before {
  content: '';
  position: absolute;
  width: 150px;
  height: 150px;
  background: radial-gradient(
    circle,
    rgba(255, 107, 157, 0.15),
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  /* Position via JS ou CSS custom */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.card-spotlight:hover::before {
  opacity: 1;
}`,
  },
];
