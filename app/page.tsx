'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Shield, ArrowRight, Globe, MapPin, Home, Key, Orbit, Satellite, Layers, Database, Telescope, Building } from 'lucide-react';
import NetSheetCalculator from '@/components/NetSheetCalculator';

const LOGO_URL = "https://images.squarespace-cdn.com/content/v1/5f4d40b11b4f1e6a11b920b5/1598967776211-2JVFU1R4U8PQM71BWUVE/WorldClassTitle_Logos-RGB-Primary.png?format=1500w";

export default function LandingPage() {
  return (
    <div className="min-h-screen selection:bg-mars/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="relative h-10 w-48">
            <Image 
              src={LOGO_URL} 
              alt="World Class Title" 
              fill 
              className="object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-zinc-500">
            <Link href="#press-release" className="hover:text-black transition-colors">Press</Link>
            <Link href="#technology" className="hover:text-black transition-colors">Technology</Link>
            <Link href="#calculator" className="px-4 py-2 bg-black text-white rounded hover:bg-zinc-800 transition-all">Calculator</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20 bg-black">
        <div className="absolute inset-0 overflow-hidden">
          {/* Starry Background Pattern */}
          <div className="absolute inset-0 opacity-20" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          {/* Floating Icons */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 text-mars/20"
          >
            <Orbit size={300} strokeWidth={0.5} />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/4 text-white/5"
          >
            <Home size={250} strokeWidth={0.5} />
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 text-mars/10"
          >
            <Key size={150} strokeWidth={1} />
          </motion.div>

          {/* Subtle Parcel Overlays */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 border border-mars/20 rotate-12 flex items-center justify-center">
              <span className="text-[10px] text-mars/40 font-mono -rotate-12">PARCEL M-001 BOUNDARY</span>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mars/10 border border-mars/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-mars animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-mars">Interplanetary Initiative</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              The Future of Title Is <span className="text-mars">Interplanetary</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 mb-10 font-light leading-relaxed">
              World Class Title Announces the World’s First Verified Title Search on Mars
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#press-release" 
                className="px-8 py-4 bg-black text-white rounded-lg font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group"
              >
                Read the Press Release
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#calculator" 
                className="px-8 py-4 bg-white text-black border border-zinc-200 rounded-lg font-bold hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
              >
                View Martian Parcel M-001
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Press Release Section */}
      <section id="press-release" className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 text-zinc-400 font-mono text-sm uppercase tracking-widest">
            <MapPin className="w-4 h-4" />
            <span>Columbus, Ohio</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300" />
            <span>April 1, 2026</span>
          </div>
          
          <div className="prose prose-zinc prose-lg max-w-none">
            <p className="lead text-2xl font-medium text-zinc-900 mb-8">
              World Class Title today announced the successful completion of the world’s first AI powered extraterrestrial title search on the planet Mars.
            </p>
            
            <p className="mb-8 text-zinc-600 leading-relaxed">
              Leveraging proprietary Smart Spaces infrastructure, AI driven search logic, and multi jurisdictional validation layers, the company has verified fee simple ownership of Parcel M-001 located within the Olympus Mons Development District.
            </p>

            <h3 className="text-xl font-bold text-black mb-6 uppercase tracking-wider">The search included:</h3>
            <ul className="space-y-4 mb-12 list-none p-0">
              {[
                "AI planetary deed reconstruction",
                "Historical crater encumbrance analysis",
                "Interplanetary lien indexing",
                "Mineral rights validation across Quadrant 7",
                "Terraforming covenant review"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-zinc-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-mars flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-32 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full border-l border-zinc-700 rotate-12 translate-x-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">How Smart Made It Possible</h2>
              <p className="text-lg text-zinc-400 mb-12 leading-relaxed">
                Our Smart Spaces platform performed layered validation to ensure absolute integrity in the Martian frontier. By integrating publicly available orbital mapping data and advanced aerospace infrastructure, we&apos;ve created the most secure extraterrestrial title search in history.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Dual Search Comparison", desc: "Redundant AI logic paths for zero-error validation." },
                  { title: "Abstractor Oversight", desc: "Human-in-the-loop verification for complex Martian claims." },
                  { title: "Fraud Detection", desc: "Advanced modeling to prevent interplanetary identity theft." },
                  { title: "Chain of Title", desc: "Reconstruction of historical orbital data and land grants." }
                ].map((feature, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-bold text-mars-light uppercase tracking-widest text-xs">{feature.title}</h4>
                    <p className="text-sm text-zinc-500">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-8 border-t border-zinc-800 flex items-center gap-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">Data Sources</span>
                <div className="flex gap-8 opacity-40 grayscale">
                  <span className="font-bold tracking-tighter text-xl">NASA</span>
                  <span className="font-bold tracking-tighter text-xl italic">SPACEX</span>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center">
              <div className="absolute inset-0 opacity-10" 
                   style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)', backgroundSize: '20px 20px' }} />
              
              <div className="relative z-10 grid grid-cols-2 gap-8 p-12">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="flex flex-col items-center gap-2 text-mars-light"
                >
                  <Satellite size={48} />
                  <span className="text-[10px] font-mono opacity-50">ORBITAL_SCAN</span>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="flex flex-col items-center gap-2 text-white"
                >
                  <Layers size={48} />
                  <span className="text-[10px] font-mono opacity-50">DATA_LAYERS</span>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity }}
                  className="flex flex-col items-center gap-2 text-white"
                >
                  <Database size={48} />
                  <span className="text-[10px] font-mono opacity-50">LEDGER_SYNC</span>
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity }}
                  className="flex flex-col items-center gap-2 text-mars-light"
                >
                  <Building size={48} />
                  <span className="text-[10px] font-mono opacity-50">STRUCTURE_ID</span>
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10">
                  <Shield className="w-5 h-5 text-mars-light" />
                  <span className="text-sm font-mono tracking-wider">SMART SPACES v4.0 (MARS)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-3xl md:text-5xl font-bold mb-12 leading-tight tracking-tight">
              “We have successfully cleared over 17,000 properties on Earth. Mars was the natural next step.”
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-mars mb-6" />
              <cite className="not-italic">
                <span className="block text-xl font-bold text-black">Chris Sauerzopf</span>
                <span className="block text-zinc-500 uppercase tracking-widest text-xs mt-1">Founder, World Class Title</span>
              </cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <NetSheetCalculator />

      {/* Footer / Reveal */}
      <footer className="py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16 max-w-2xl mx-auto">
            <p className="text-zinc-400 text-sm leading-relaxed">
              While Martian closings are not yet recognized by the Ohio Department of Insurance, World Class Title remains committed to pioneering title integrity wherever humanity expands.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            <div className="relative h-8 w-32 opacity-30 grayscale">
              <Image 
                src={LOGO_URL} 
                alt="World Class Title" 
                fill 
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-zinc-900 font-bold uppercase tracking-[0.5em] text-xs">
              Happy April 1.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
