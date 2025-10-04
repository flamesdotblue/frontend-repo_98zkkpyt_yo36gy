import React from 'react';
import { Menu } from 'lucide-react';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeEmbed from './components/CodeEmbed';
import Trust from './components/Trust';

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="inline-flex items-center gap-2 font-semibold tracking-tight">
            <span className="h-5 w-5 rounded-sm bg-gradient-to-tr from-cyan-400 to-emerald-500" />
            <span>Vanish</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#code" className="transition hover:text-white">Code</a>
            <a href="#trust" className="transition hover:text-white">Trust</a>
            <a href="#waitlist" className="rounded-md bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90">Join waitlist</a>
          </nav>
          <button aria-label="Menu" className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu size={22} />
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-white/80">
              <a href="#features" onClick={() => setOpen(false)} className="transition hover:text-white">Features</a>
              <a href="#code" onClick={() => setOpen(false)} className="transition hover:text-white">Code</a>
              <a href="#trust" onClick={() => setOpen(false)} className="transition hover:text-white">Trust</a>
              <a href="#waitlist" onClick={() => setOpen(false)} className="rounded-md bg-white px-4 py-2 text-center font-medium text-black transition hover:bg-white/90">Join waitlist</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Features />
        <CodeEmbed />
        <Trust />

        <section id="waitlist" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute right-10 top-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>
          <div className="mx-auto max-w-2xl px-6 py-20 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Get early access</h2>
            <p className="mt-3 text-white/70">Sign up to get invited to the private beta. No spam, ever.</p>
            <form className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full flex-1 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-white/20"
              />
              <button
                type="button"
                className="w-full rounded-md bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90 sm:w-auto"
                title="Prelaunch – submitting disabled"
              >
                Notify me
              </button>
            </form>
            <p className="mt-3 text-xs text-white/50">By signing up, you agree to receive product updates about Vanish.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/50">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} Vanish, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
