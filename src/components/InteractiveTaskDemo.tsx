import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Cpu, CheckCircle2, Loader2, Sparkles, Terminal } from 'lucide-react';
import { sound } from '../utils/audio';

interface InteractiveTaskDemoProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

interface StepLog {
  title: string;
  status: 'pending' | 'running' | 'done';
}

export const InteractiveTaskDemo: React.FC<InteractiveTaskDemoProps> = ({
  isOpen,
  onClose,
  initialPrompt = "Make an appointment with a doctor for Tuesday at 10 AM",
}) => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [isProcessing, setIsProcessing] = useState(false);
  const [steps, setSteps] = useState<StepLog[]>([]);
  const [finalResult, setFinalResult] = useState<string | null>(null);

  useEffect(() => {
    if (initialPrompt) {
      setPrompt(initialPrompt);
    }
  }, [initialPrompt]);

  const runSimulation = (query: string) => {
    sound.playClick();
    setIsProcessing(true);
    setFinalResult(null);

    setSteps([
      { title: 'Deconstructing semantic intent & calendar constraints', status: 'running' },
      { title: 'Connecting to local health provider booking API', status: 'pending' },
      { title: 'Resolving schedule conflicts in your mobile calendar', status: 'pending' },
      { title: 'Finalizing appointment & creating 24-hr reminder', status: 'pending' },
    ]);

    setTimeout(() => {
      sound.playBlip();
      setSteps((prev) => [
        { ...prev[0], status: 'done' },
        { ...prev[1], status: 'running' },
        prev[2],
        prev[3],
      ]);
    }, 700);

    setTimeout(() => {
      sound.playBlip();
      setSteps((prev) => [
        prev[0],
        { ...prev[1], status: 'done' },
        { ...prev[2], status: 'running' },
        prev[3],
      ]);
    }, 1500);

    setTimeout(() => {
      sound.playBlip();
      setSteps((prev) => [
        prev[0],
        prev[1],
        { ...prev[2], status: 'done' },
        { ...prev[3], status: 'running' },
      ]);
    }, 2200);

    setTimeout(() => {
      sound.playClick();
      setSteps((prev) => prev.map((s) => ({ ...s, status: 'done' })));
      setIsProcessing(false);
      
      if (query.toLowerCase().includes('doctor') || query.toLowerCase().includes('appointment')) {
        setFinalResult(
          "Confirmed: Appointment secured with Dr. Katherine Vance at Apex Health Center for Tuesday, Oct 28 at 10:00 AM. Added to your primary mobile calendar with 24-hr and 1-hr notifications."
        );
      } else if (query.toLowerCase().includes('plan') || query.toLowerCase().includes('business')) {
        setFinalResult(
          "Executive Summary Drafted: 5-pillar strategic roadmap generated including Unit Economics ($42 CAC / $380 LTV), Competitive Moat, and 18-month hiring milestones. Exported to your Notes app."
        );
      } else {
        setFinalResult(
          `Command executed successfully: x720 has synthesized your request "${query}" with verified neural outputs and synchronized state with your mobile device.`
        );
      }
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Demo Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative z-10 w-full max-w-xl rounded-2xl bg-[#090d15] border border-cyan-500/30 p-6 shadow-[0_0_40px_rgba(34,211,238,0.15)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <div className="flex items-center gap-1.5 font-mono text-xs text-cyan-300">
                <Terminal className="w-3.5 h-3.5" />
                <span>x720.ai Autonomous Simulation Shell</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded-full hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick preset suggestions */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {[
              "Make an appointment with a doctor for Tuesday at 10 AM",
              "Develop a SaaS business plan with 18-month projection",
              "Draft executive reply to urgent client inquiry"
            ].map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setPrompt(preset);
                  runSimulation(preset);
                }}
                disabled={isProcessing}
                className="text-[10px] font-sans px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                {preset.slice(0, 36)}...
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isProcessing}
              placeholder="Ask x720 to perform any task..."
              className="flex-1 bg-slate-950 border border-slate-800 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-600 focus:outline-none transition-colors font-sans"
            />
            <button
              type="button"
              onClick={() => runSimulation(prompt)}
              disabled={isProcessing || !prompt.trim()}
              className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-medium text-xs flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(34,211,238,0.4)]"
            >
              {isProcessing ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <span>Run</span>
                  <Send className="w-3 h-3" />
                </>
              )}
            </button>
          </div>

          {/* Reasoning Steps & Result */}
          <div className="mt-5 min-h-[160px] bg-slate-950/70 border border-slate-900 rounded-xl p-4 font-mono text-xs">
            {steps.length === 0 && !finalResult && (
              <div className="h-full flex flex-col items-center justify-center text-slate-600 py-6 text-center">
                <Cpu className="w-8 h-8 text-slate-700 mb-2" />
                <p>Ready. Click "Run" or select a preset to see x720 execute in real time.</p>
              </div>
            )}

            {steps.length > 0 && (
              <div className="space-y-2.5">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center space-x-2.5">
                    {step.status === 'done' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : step.status === 'running' ? (
                      <Loader2 className="w-4 h-4 text-cyan-400 animate-spin shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-800 shrink-0" />
                    )}
                    <span
                      className={`${
                        step.status === 'done'
                          ? 'text-slate-300'
                          : step.status === 'running'
                          ? 'text-cyan-300 font-semibold'
                          : 'text-slate-600'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {finalResult && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 pt-4 border-t border-slate-800/80"
              >
                <div className="text-[10px] uppercase tracking-wider text-cyan-400 flex items-center gap-1 mb-1 font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>x720.ai Output:</span>
                </div>
                <p className="font-sans text-xs text-slate-200 leading-relaxed bg-cyan-950/20 border border-cyan-500/20 p-3 rounded-lg">
                  {finalResult}
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
