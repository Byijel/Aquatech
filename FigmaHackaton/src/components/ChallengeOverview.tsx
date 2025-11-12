import { CheckCircle2, Lock, Zap, Building2, BarChart3, Fish } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

interface Mission {
  id: string;
  name: string;
  objective: string;
  parameters: string;
  difficulty: number;
  remainingAttempts: string;
  solved: boolean;
  effect: string;
}

interface Category {
  name: string;
  description: string;
  solved: boolean;
  score: number;
  badgeUrl: string;
  mission: Mission[];
}

interface ChallengeOverviewProps {
  category: Category;
  onMissionClick: (mission: Mission, categoryName: string) => void;
}

const getCategoryIcon = (name: string) => {
  switch (name) {
    case 'Aqua-Infrastructure':
      return Building2;
    case 'Data Visualization':
      return BarChart3;
    case 'Marine Biology':
      return Fish;
    default:
      return Fish;
  }
};

const getCategoryColor = (name: string) => {
  switch (name) {
    case 'Aqua-Infrastructure':
      return 'from-cyan-500/20 to-blue-500/20';
    case 'Data Visualization':
      return 'from-teal-500/20 to-cyan-500/20';
    case 'Marine Biology':
      return 'from-blue-500/20 to-indigo-500/20';
    default:
      return 'from-cyan-500/20 to-teal-500/20';
  }
};

export function ChallengeOverview({ category, onMissionClick }: ChallengeOverviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const solvedCount = category.mission.filter(m => m.solved).length;
  const totalMissions = category.mission.length;
  const Icon = getCategoryIcon(category.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div
        className={`relative bg-gradient-to-br ${getCategoryColor(category.name)} backdrop-blur-sm border border-cyan-300/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        {/* Header */}
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-cyan-200" />
              </div>
              <div>
                <h3 className="text-cyan-50 mb-1">{category.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-200/80 text-sm">
                    {solvedCount}/{totalMissions} Complete
                  </span>
                  <div className="flex gap-1">
                    {[...Array(totalMissions)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < solvedCount ? 'bg-emerald-400' : 'bg-cyan-300/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-amber-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-400/30">
              <Zap className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200">{category.score}</span>
            </div>
          </div>

          <p className="text-cyan-100/90 text-sm leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Missions List */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 space-y-3">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent mb-4" />
            
            {category.mission.map((mission, index) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onMissionClick(mission, category.name);
                }}
                className="relative group bg-white/5 backdrop-blur-sm border border-cyan-300/20 rounded-xl p-4 hover:bg-white/10 hover:border-cyan-300/40 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {mission.solved ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <Lock className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                      )}
                      <h4 className="text-cyan-50">{mission.name}</h4>
                    </div>
                    <p className="text-cyan-200/70 text-sm mb-2">{mission.effect}</p>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-cyan-300/80">
                        Difficulty: {mission.difficulty}
                      </span>
                      <span className="text-amber-300/80">
                        Attempts: {mission.remainingAttempts}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center">
                      <span className="text-cyan-200">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expand indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: isExpanded ? 0 : [0, 5, 0] }}
            transition={{ repeat: isExpanded ? 0 : Infinity, duration: 2 }}
            className="text-cyan-300/50 text-sm"
          >
            {isExpanded ? '▲' : '▼'}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}