import React from 'react';
import Spline from '@splinetool/react-spline';
import { Fingerprint, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-blue-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-500/20 via-emerald-500/10 to-blue-500/20 blur-3xl pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles size={14} className="text-emerald-400" />
              <span>Prelaunch • Passwordless SDK</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Auth that disappears.</h1>
            <p className="max-w-xl leading-relaxed text-white/70">
              Ship biometric logins your users love, with a single line of code. Passkeys, WebAuthn, and device biometrics—streamlined for developers.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#waitlist" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90">
                Join the waitlist
              </a>
              <a href="#code" className="inline-flex items-center gap-2 text-white/80 transition hover:text-white">
                <Fingerprint size={18} />
                See one-line setup
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Live demo scene
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                Passkeys • WebAuthn
              </div>
            </div>
          </div>

          <div className="relative h-[420px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 md:h-[520px]">
            <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
