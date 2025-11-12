import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Creature {
  id: number;
  type: 'fish' | 'jellyfish' | 'turtle' | 'seahorse';
  x: number;
  y: number;
  size: number;
  direction: 'left' | 'right';
  duration: number;
}

export function SwimmingIllustrations() {
  const [creatures, setCreatures] = useState<Creature[]>([]);

  useEffect(() => {
    const types: Creature['type'][] = ['fish', 'jellyfish', 'turtle', 'seahorse'];
    const newCreatures: Creature[] = [];

    for (let i = 0; i < 12; i++) {
      const direction = Math.random() > 0.5 ? 'left' : 'right';
      newCreatures.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 80 + 10, // Random X position 10-90% (keep away from edges)
        y: Math.random() * 60 + 10, // Random Y position 10-70%
        size: Math.random() * 0.6 + 0.6, // 0.6 to 1.2 scale
        direction: direction,
        duration: Math.random() * 15 + 15, // 15-30 seconds for slower, smoother animation
      });
    }

    setCreatures(newCreatures);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {creatures.map((creature) => {
        const moveDistance = 15; // Smaller movement range
        const verticalFloat = 3; // Smaller vertical movement
        
        return (
          <motion.div
            key={creature.id}
            style={{
              position: 'absolute',
              left: `${creature.x}%`,
              top: `${creature.y}%`,
            }}
            animate={{ 
              x: [0, creature.direction === 'right' ? moveDistance : -moveDistance, 0],
              y: [0, verticalFloat, -verticalFloat, 0],
            }}
            transition={{
              duration: creature.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.33, 0.66, 1],
            }}
          >
            <div style={{
              transform: `scale(${creature.size}) scaleX(${creature.direction === 'left' ? -1 : 1})`,
            }}>
              {creature.type === 'fish' && <FishIllustration />}
              {creature.type === 'jellyfish' && <JellyfishIllustration />}
              {creature.type === 'turtle' && <TurtleIllustration />}
              {creature.type === 'seahorse' && <SeahorseIllustration />}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function FishIllustration() {
  return (
    <svg width="80" height="50" viewBox="0 0 80 50" fill="none" className="opacity-30">
      {/* Body */}
      <ellipse cx="40" cy="25" rx="25" ry="15" fill="#4ECCA3" />
      {/* Tail */}
      <path d="M 15 25 L 5 15 L 5 35 Z" fill="#3DBDA0" />
      {/* Dorsal fin */}
      <path d="M 40 10 L 35 5 L 45 5 Z" fill="#3DBDA0" />
      {/* Eye */}
      <circle cx="55" cy="20" r="3" fill="#2A5F6B" />
      {/* Stripes */}
      <ellipse cx="30" cy="25" rx="3" ry="10" fill="#3DBDA0" opacity="0.5" />
      <ellipse cx="45" cy="25" rx="3" ry="12" fill="#3DBDA0" opacity="0.5" />
    </svg>
  );
}

function JellyfishIllustration() {
  return (
    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" className="opacity-25">
      {/* Bell */}
      <ellipse cx="30" cy="25" rx="20" ry="18" fill="#6DD5ED" />
      <ellipse cx="30" cy="25" rx="15" ry="13" fill="#7DE2F5" opacity="0.6" />
      {/* Tentacles */}
      <path d="M 20 40 Q 18 55 15 70" stroke="#5BC8DB" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M 25 42 Q 23 60 22 75" stroke="#5BC8DB" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M 30 43 Q 30 58 28 73" stroke="#5BC8DB" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M 35 42 Q 37 60 38 75" stroke="#5BC8DB" strokeWidth="2" fill="none" opacity="0.7" />
      <path d="M 40 40 Q 42 55 45 70" stroke="#5BC8DB" strokeWidth="2" fill="none" opacity="0.7" />
      {/* Dots */}
      <circle cx="30" cy="20" r="2" fill="#FFFFFF" opacity="0.8" />
      <circle cx="25" cy="25" r="1.5" fill="#FFFFFF" opacity="0.6" />
      <circle cx="35" cy="25" r="1.5" fill="#FFFFFF" opacity="0.6" />
    </svg>
  );
}

function TurtleIllustration() {
  return (
    <svg width="90" height="60" viewBox="0 0 90 60" fill="none" className="opacity-30">
      {/* Shell */}
      <ellipse cx="45" cy="30" rx="25" ry="20" fill="#52B788" />
      {/* Shell pattern */}
      <circle cx="45" cy="30" r="8" fill="#40916C" opacity="0.6" />
      <circle cx="35" cy="25" r="5" fill="#40916C" opacity="0.5" />
      <circle cx="55" cy="25" r="5" fill="#40916C" opacity="0.5" />
      <circle cx="35" cy="35" r="5" fill="#40916C" opacity="0.5" />
      <circle cx="55" cy="35" r="5" fill="#40916C" opacity="0.5" />
      {/* Head */}
      <ellipse cx="70" cy="25" rx="10" ry="8" fill="#74C69D" />
      <circle cx="75" cy="23" r="2" fill="#2A5F6B" />
      {/* Flippers */}
      <ellipse cx="25" cy="25" rx="8" ry="12" fill="#74C69D" />
      <ellipse cx="25" cy="38" rx="8" ry="12" fill="#74C69D" />
      <ellipse cx="65" cy="38" rx="8" ry="10" fill="#74C69D" />
    </svg>
  );
}

function SeahorseIllustration() {
  return (
    <svg width="40" height="70" viewBox="0 0 40 70" fill="none" className="opacity-25">
      {/* Body curve */}
      <path 
        d="M 20 10 Q 25 15 25 25 Q 25 35 20 45 Q 18 55 20 65" 
        stroke="#FFB703" 
        strokeWidth="8" 
        fill="none" 
        strokeLinecap="round"
      />
      {/* Head */}
      <circle cx="20" cy="10" r="7" fill="#FFB703" />
      <path d="M 20 5 Q 22 3 25 5" stroke="#FB8500" strokeWidth="2" fill="none" />
      {/* Eye */}
      <circle cx="22" cy="10" r="1.5" fill="#2A5F6B" />
      {/* Belly */}
      <ellipse cx="22" cy="40" rx="5" ry="12" fill="#FFB703" opacity="0.8" />
      {/* Fins */}
      <path d="M 18 25 Q 12 25 12 30 Q 12 35 18 35" fill="#FB8500" opacity="0.6" />
      {/* Tail */}
      <circle cx="20" cy="65" r="4" fill="none" stroke="#FFB703" strokeWidth="3" />
    </svg>
  );
}