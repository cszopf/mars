'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Rocket, Shield, Map, FileText, ChevronRight } from 'lucide-react';

export default function NetSheetCalculator() {
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<null | {
    total: string;
    items: { label: string; value: string }[];
  }>(null);

  const handleCalculate = () => {
    setIsCalculating(true);
    setResult(null);
    
    setTimeout(() => {
      setIsCalculating(false);
      setResult({
        total: "4.25 BTC (Martian Equivalent)",
        items: [
          { label: "Atmospheric Entry Recording Fee", value: "0.45 BTC" },
          { label: "Terraforming Escrow Reserve", value: "1.20 BTC" },
          { label: "Rover Transfer Tax", value: "0.35 BTC" },
          { label: "Zero Gravity Notary Fee", value: "0.15 BTC" },
          { label: "Olympus Mons Infrastructure Assessment", value: "2.10 BTC" },
        ]
      });
    }, 1500);
  };

  return (
    <section id="calculator" className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Martian Net Sheet Calculator</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Estimate your interplanetary closing costs with our proprietary Smart Spaces logic.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <label className="block text-sm font-semibold uppercase tracking-wider text-zinc-500">Property Location</label>
                <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 font-medium">
                  Olympus Mons Development District
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-semibold uppercase tracking-wider text-zinc-500">Jurisdiction</label>
                <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 font-medium">
                  Quadrant 7 (Extraterrestrial)
                </div>
              </div>
            </div>

            <button
              onClick={handleCalculate}
              disabled={isCalculating}
              className="w-full py-4 bg-black text-white rounded-lg font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isCalculating ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Calculator className="w-5 h-5" />
                </motion.div>
              ) : (
                <Calculator className="w-5 h-5" />
              )}
              {isCalculating ? "Processing AI Validation..." : "Calculate Martian Closing Costs"}
            </button>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-12 pt-12 border-t border-zinc-100"
                >
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-mars" />
                    Estimated Net Sheet
                  </h3>
                  <div className="space-y-4">
                    {result.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-zinc-50">
                        <span className="text-zinc-600">{item.label}</span>
                        <span className="font-mono font-medium">{item.value}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center pt-6 mt-4 border-t-2 border-black">
                      <span className="text-lg font-bold uppercase tracking-tighter">Total Estimated Cost</span>
                      <span className="text-2xl font-bold text-mars">{result.total}</span>
                    </div>
                  </div>
                  <p className="mt-8 text-xs text-zinc-400 italic text-center">
                    * Estimates subject to atmospheric fluctuations and orbital alignment.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
