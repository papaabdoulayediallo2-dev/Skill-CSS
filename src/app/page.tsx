'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { EffectCard } from '@/components/css-effects/effect-card';
import { categories, effects } from '@/components/css-effects/effects-data';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const filteredEffects = useMemo(() => {
    let filtered = effects;

    if (activeCategory !== 'all') {
      filtered = filtered.filter((e) => e.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (e) =>
          e.name.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.css.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const totalEffects = effects.length;
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: effects.length };
    categories.forEach((cat) => {
      counts[cat.id] = effects.filter((e) => e.category === cat.id).length;
    });
    return counts;
  }, []);

  // Scroll category into view when active
  useEffect(() => {
    if (!categoryScrollRef.current) return;
    const activeEl = categoryScrollRef.current.querySelector(`[data-category="${activeCategory}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border/50">
        {/* Animated background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(-45deg, #ff6b9d, #c084fc, #22d3ee, #fbbf24)',
            backgroundSize: '400% 400%',
            animation: 'fx-hero-gradient 12s ease infinite',
          }}
        />
        <div className="absolute inset-0 bg-background/80" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex flex-col items-center text-center gap-4">
            <Badge variant="secondary" className="text-xs px-3 py-1">
              Bibliothèque CSS Interactive
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              <span
                style={{
                  background: 'linear-gradient(90deg, #ff6b9d, #c084fc, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Effets CSS
              </span>{' '}
              en direct
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed">
              Explorez une collection d&apos;effets CSS avec des démonstrations interactives.
              Copiez le code en un clic et intégrez-le dans vos projets.
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                {totalEffects} effets
              </span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
                {categories.length} catégories
              </span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-pink-400" />
                CSS pur
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8">
        {/* Search and filters */}
        <div className="space-y-4 mb-6">
          {/* Search bar */}
          <div className="relative max-w-md">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <Input
              placeholder="Rechercher un effet..."
              className="pl-9 h-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category tabs */}
          <div
            ref={categoryScrollRef}
            className="flex gap-2 overflow-x-auto pb-2 category-scroll"
          >
            <button
              data-category="all"
              onClick={() => setActiveCategory('all')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                activeCategory === 'all'
                  ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                  : 'bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              <span>Tous</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === 'all'
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {categoryCounts.all}
              </span>
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                data-category={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : 'bg-background text-foreground border-border hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat.id
                      ? 'bg-primary-foreground/20 text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {categoryCounts[cat.id]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Show category sections when "all" and no search, otherwise show filtered grid */}
        {activeCategory === 'all' && !searchQuery ? (
          <div className="space-y-12">
            {categories.map((cat) => {
              const catEffects = effects.filter((e) => e.category === cat.id);
              return (
                <section key={cat.id} id={`section-${cat.id}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{cat.icon}</span>
                    <div>
                      <h2 className="text-xl font-bold">{cat.name}</h2>
                      <p className="text-sm text-muted-foreground">{cat.description}</p>
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      {catEffects.length} effets
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {catEffects.map((effect) => (
                      <EffectCard key={effect.id} effect={effect} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : filteredEffects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredEffects.map((effect) => (
              <EffectCard key={effect.id} effect={effect} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-lg font-semibold mb-1">Aucun effet trouvé</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Essayez de modifier votre recherche ou de changer de catégorie.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 cursor-pointer"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span
                className="font-bold text-base"
                style={{
                  background: 'linear-gradient(90deg, #ff6b9d, #c084fc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Effets CSS
              </span>
              <span>— Bibliothèque interactive</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {totalEffects} effets disponibles
              </span>
              <span>•</span>
              <span>CSS pur, sans dépendance</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
