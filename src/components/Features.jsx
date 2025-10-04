import React from 'react';
import { Zap, Fingerprint, Shield, Terminal } from 'lucide-react';

const items = [
  {
    icon: Zap,
    title: 'One line to start',
    desc: 'Drop in and go. Vanish handles enrollment, recovery, and strong auth flows so you can ship faster.'
  },
  {
    icon: Fingerprint,
    title: 'Biometric by default',
    desc: 'Delight users with passkeys and native biometrics across platforms with WebAuthn under the hood.'
  },
  {
    icon: Shield,
    title: 'Security first',
    desc: 'Standards-compliant, phishing-resistant authentication with strong device-bound credentials.'
  },
  {
    icon: Terminal,
    title: 'Built for devs',
    desc: 'Modern SDKs, clean APIs, and copy-paste examples tailored for frameworks you already use.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Passwordless, without the pain</h2>
          <p className="mt-3 text-white/70">Everything you need to roll out passkeys and WebAuthn with confidence.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                <item.icon size={20} className="text-emerald-300" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
