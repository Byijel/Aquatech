import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Send, AlertCircle, Sparkles } from 'lucide-react';

interface MissionModalProps {
  mission: {
    id: string;
    name: string;
    objective: string;
    parameters: string;
    difficulty: number;
    remainingAttempts: string;
    solved: boolean;
    effect: string;
    categoryName: string;
  };
  onClose: () => void;
  onSubmit: (missionId: string, answer: string) => void;
}

export function MissionModal({ mission, onClose, onSubmit }: MissionModalProps) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim()) {
      onSubmit(mission.id, answer);
      setAnswer('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-gradient-to-br from-[#2a5f6b] to-[#3d7a87] border-2 border-cyan-300/40 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        {/* Header */}
        <div className="relative px-8 pt-8 pb-6 border-b border-cyan-300/20">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-cyan-100"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <div className="text-cyan-300/70 text-sm mb-1">{mission.categoryName}</div>
              <h2 className="text-cyan-50 mb-2">{mission.name}</h2>
              <p className="text-cyan-100/80 text-sm">{mission.effect}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative px-8 py-6 space-y-6">
          {/* Mission Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-cyan-300/20">
              <div className="text-cyan-300/70 text-sm mb-1">Difficulty</div>
              <div className="text-cyan-50">{mission.difficulty}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-cyan-300/20">
              <div className="text-cyan-300/70 text-sm mb-1">Attempts Left</div>
              <div className="text-amber-300">{mission.remainingAttempts}</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-cyan-300/20">
              <div className="text-cyan-300/70 text-sm mb-1">Status</div>
              <div className={mission.solved ? 'text-emerald-400' : 'text-cyan-300'}>
                {mission.solved ? 'Solved' : 'Active'}
              </div>
            </div>
          </div>

          {/* Objective */}
          <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-blue-300 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-blue-200 mb-2">Objective</h3>
                <p className="text-blue-100/90">{mission.objective}</p>
              </div>
            </div>
            
            {/* Parameters */}
            <div className="bg-black/20 rounded-lg p-4 mt-4">
              <div className="text-cyan-300/70 text-sm mb-2">Parameters:</div>
              <code className="text-cyan-100 text-sm break-all font-mono">
                {mission.parameters}
              </code>
            </div>
          </div>

          {/* Answer Form */}
          {!mission.solved && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-cyan-200 mb-2 text-sm">Your Answer</label>
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Enter your solution..."
                  className="w-full px-4 py-3 bg-white/10 border border-cyan-300/30 rounded-xl text-cyan-50 placeholder:text-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={!answer.trim()}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-cyan-500/50 disabled:to-blue-500/50 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                Submit Answer
              </button>
            </form>
          )}

          {mission.solved && (
            <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-6 text-center">
              <div className="text-emerald-400 mb-2">✓ Mission Complete</div>
              <div className="text-emerald-300/80 text-sm">
                This mission has already been solved!
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
