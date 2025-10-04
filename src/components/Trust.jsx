import React from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';

export default function Trust() {
  return (
    <section id="trust" className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Security you can show your CISO</h2>
            <p className="mt-3 text-white/70">We build on open standards and modern cryptography to deliver phishing-resistant authentication that scales.</p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 text-emerald-400" size={18} /> FIDO2 and WebAuthn compatible</li>
              <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 text-emerald-400" size={18} /> Device-bound credentials and attestation</li>
              <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 text-emerald-400" size={18} /> Just-in-time enrollment and recovery flows</li>
              <li className="flex items-start gap-3"><CheckCircle className="mt-0.5 text-emerald-400" size={18} /> SOC 2 Type II (in progress)</li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"><Shield size={14} /> WebAuthn</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"><Lock size={14} /> Passkeys</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"><Shield size={14} /> FIDO2</span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <figure className="space-y-4">
              <blockquote className="text-white/80">“We replaced our SMS OTP flow with Vanish in an afternoon. Conversion went up, support tickets went down, and the team sleeps better.”</blockquote>
              <figcaption className="flex items-center gap-3 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">RK</div>
                <div>
                  <div className="font-medium">Riley K.</div>
                  <div className="text-white/50">Staff Engineer, fintech</div>
                </div>
              </figcaption>
            </figure>
            <div className="mt-8 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <div className="text-2xl font-semibold">99.99%</div>
                <div className="text-xs text-white/60">Uptime target</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <div className="text-2xl font-semibold"><span className="text-emerald-400">↓</span>42%</div>
                <div className="text-xs text-white/60">Drop-offs vs. OTP</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <div className="text-2xl font-semibold"><span className="text-emerald-400">↑</span>23%</div>
                <div className="text-xs text-white/60">Login success</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                <div className="text-2xl font-semibold"><span className="text-emerald-400">↓</span>68%</div>
                <div className="text-xs text-white/60">Support tickets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
