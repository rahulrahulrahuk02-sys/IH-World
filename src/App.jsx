import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Menu, X, ChevronRight, Zap, Target, Award } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-hidden flex flex-col relative w-full">
      {/* -------------------- HEADER -------------------- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 border-b transition-all duration-300 ${
          isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-white/10' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="text-2xl font-black tracking-tighter text-[#D4AF37] font-[family-name:var(--font-heading)]">IH RAHUL 66</div>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] font-medium opacity-60">
          <button onClick={() => scrollToSection('technology')} className="hover:text-[#D4AF37] hover:opacity-100 transition-colors cursor-pointer">Technology</button>
          <button onClick={() => scrollToSection('crew')} className="hover:text-[#D4AF37] hover:opacity-100 transition-colors cursor-pointer">Crew</button>
          <a href="#" className="hover:text-[#D4AF37] hover:opacity-100 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors relative"
          >
            <ShoppingCart className="w-4 h-4 text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4AF37] text-black text-[10px] font-bold flex items-center justify-center rounded-full leading-none">2</span>
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
          </button>
        </div>
      </header>

      {/* -------------------- MOBILE MENU -------------------- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 z-40 md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              <button onClick={() => scrollToSection('technology')} className="text-xs uppercase tracking-[0.2em] font-medium text-white/60 hover:text-[#D4AF37] transition-colors text-left">Technology</button>
              <button onClick={() => scrollToSection('crew')} className="text-xs uppercase tracking-[0.2em] font-medium text-white/60 hover:text-[#D4AF37] transition-colors text-left">Crew</button>
              <a href="#" className="text-xs uppercase tracking-[0.2em] font-medium text-white/60 hover:text-[#D4AF37] transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* -------------------- CART DRAWER -------------------- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#111] border-l border-white/10 z-[70] p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold italic uppercase tracking-wider text-[#D4AF37]">Quick Add</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5">
                  <div className="w-16 h-20 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded overflow-hidden relative">
                     <div className="absolute inset-0 flex items-center justify-center text-[#D4AF37] font-black text-[10px] opacity-70 border border-[#D4AF37]/20 m-1 rounded-sm">CAN</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold uppercase text-sm">v1.066_LTD Edition</h4>
                    <p className="text-xs text-white/50">Current Drop</p>
                  </div>
                  <div className="font-mono">$24.00</div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5">
                  <div className="w-16 h-20 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded overflow-hidden relative">
                     <div className="absolute inset-0 flex items-center justify-center text-[#D4AF37] font-black text-[10px] opacity-70 border border-[#D4AF37]/20 m-1 rounded-sm">CAN</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold uppercase text-sm">v1.066_LTD Edition</h4>
                    <p className="text-xs text-white/50">Current Drop</p>
                  </div>
                  <div className="font-mono">$24.00</div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex justify-between mb-4 text-sm">
                  <span className="text-white/60">Subtotal</span>
                  <span>$48.00</span>
                </div>
                <button className="w-full py-4 bg-[#D4AF37] text-black font-black uppercase tracking-widest text-sm hover:opacity-90 transition-opacity rounded-lg">
                  Checkout Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* -------------------- MAIN HERO -------------------- */}
      <main className="min-h-screen relative flex items-center pt-24 pb-32 overflow-hidden">
        {/* Vertical Type */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden lg:block opacity-60">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">High-Torque Performance</span>
        </div>

        <div className="w-full flex flex-col items-center justify-center z-10 px-4">
          <div className="relative w-full max-w-5xl mx-auto text-center flex flex-col items-center">
            {/* Bold Typography Statement */}
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              className="text-[60px] md:text-[120px] lg:text-[180px] font-black leading-[0.8] tracking-tighter mb-[-10px] md:mb-[-20px] mix-blend-difference z-20"
            >
              RAHUL<span className="text-[#D4AF37]">66</span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="mt-8 z-30"
            >
              <p className="text-[12px] md:text-[14px] uppercase tracking-[0.5em] md:tracking-[1em] whitespace-normal md:whitespace-nowrap bg-black px-4 md:px-6 py-2 border border-[#D4AF37]/40">
                Performance in every drop
              </p>
            </motion.div>
          </div>
          
          {/* Conceptual Product Image / DNA Box */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }} animate={{ opacity: 0.8, y: 0 }} transition={{ delay: 0.2, duration: 1 }}
            className="w-[260px] md:w-[320px] h-[380px] md:h-[480px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] border border-white/10 rounded-2xl shadow-[0_0_100px_rgba(212,175,55,0.1)] flex flex-col items-center justify-end p-8 z-[5] overflow-hidden"
          >
            <div className="absolute -inset-10 bg-gradient-to-tr from-transparent via-[#D4AF37]/5 to-transparent blur-2xl z-[-1] animate-pulse"></div>
            <div className="w-full h-full bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end z-10">
              <div className="text-center">
                 <div className="text-[60px] md:text-[80px] font-black text-white/5">DNA</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating CTA */}
        <div className="absolute right-0 left-0 bottom-12 md:bottom-auto md:left-auto md:right-12 md:top-1/2 md:-translate-y-1/2 flex flex-col items-center md:items-end gap-6 z-40">
          <motion.button 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#D4AF37] text-black font-black text-xs uppercase tracking-widest leading-none shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-shadow flex items-center justify-center text-center"
            onClick={() => setIsCartOpen(true)}
          >
            Get The<br/>Drink
          </motion.button>
          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="text-[10px] uppercase font-bold text-white/40">Limited Edition</span>
            <span className="text-sm font-mono tracking-widest">v1.066_LTD</span>
          </div>
        </div>
      </main>

      {/* -------------------- CAPABILITY ROW -------------------- */}
      <section id="technology" className="px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#0F0F0F] border-y border-white/5 relative z-20">
        <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 rounded-lg hover:border-[#D4AF37]/30 transition-colors group">
          <Target className="w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:-translate-y-2 transition-transform" />
          <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">01. Torque Boost</div>
          <h3 className="text-2xl font-bold mb-3 italic">Instant Kinetic Energy</h3>
          <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">Nootropic precision engineered for immediate reaction times.</p>
        </div>
        <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 rounded-lg hover:border-[#D4AF37]/30 transition-colors group">
          <Zap className="w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:-translate-y-2 transition-transform" />
          <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">02. Glitch Formula</div>
          <h3 className="text-2xl font-bold mb-3 italic">Zero Crash Tech</h3>
          <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">A steady stream of premium metabolic acceleration without the volatility.</p>
        </div>
        <div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-8 rounded-lg hover:border-[#D4AF37]/30 transition-colors group">
          <Award className="w-8 h-8 text-[#D4AF37] mb-6 opacity-80 group-hover:-translate-y-2 transition-transform" />
          <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">03. IH Heritage</div>
          <h3 className="text-2xl font-bold mb-3 italic">Limited 66 Series</h3>
          <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">The definitive standard in elite performance hydration.</p>
        </div>
      </section>

      {/* -------------------- CREW REVIEWS -------------------- */}
      <section id="crew" className="px-6 md:px-12 py-32 bg-[#050505] relative z-20">
        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-16 text-center">
          Transmission from the <span className="text-[#D4AF37]">IH Crew</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 p-8 rounded-lg border border-white/5 flex flex-col gap-6 hover:bg-white/10 transition-colors">
              <div className="flex text-[#D4AF37] gap-1">
                 {[...Array(5)].map((_, idx) => <span key={idx}>★</span>)}
              </div>
              <p className="text-sm text-white/70 tracking-wide uppercase leading-relaxed">"The torque is real. Absolutely zero crash. v1.066 is the standard now."</p>
              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">User_{1024 * i}</span>
                <span className="text-[10px] text-white/40 uppercase">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- FOOTER -------------------- */}
      <footer className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-8 text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em] font-medium bg-[#0A0A0A] border-t border-[#D4AF37]/20 gap-4">
        <span>©2026 IH WORLD HQ</span>
        <div className="text-[#D4AF37] font-bold tracking-[0.3em]">Join the Crew // #IH66</div>
        <span>Design / Engineering / Liquid</span>
      </footer>
    </div>
  );
}
