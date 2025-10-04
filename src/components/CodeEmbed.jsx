import React from 'react';
import { Copy, Check } from 'lucide-react';

const SNIPPETS = {
  JavaScript: `// Install: npm i @vanish/auth\nimport { init } from '@vanish/auth';\n\n// One line to enable passkeys\ninit('prj_demo_123');`,
  Python: `# Install: pip install vanish-auth\nfrom vanish import init\n\n# One line to enable passkeys\ninit('prj_demo_123')`,
  cURL: `# No SDK? Hit the edge endpoint directly\ncurl -X POST https://api.vanish.dev/v1/init \\\n  -H 'Authorization: Bearer sk_demo_xxx' \\\n  -H 'Content-Type: application/json' \\\n  -d '{"project":"prj_demo_123"}'`
};

export default function CodeEmbed() {
  const [tab, setTab] = React.useState('JavaScript');
  const [copied, setCopied] = React.useState(false);

  const code = SNIPPETS[tab];

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (_) {}
  }

  return (
    <section id="code" className="relative border-t border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-10 top-10 h-60 w-60 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold md:text-3xl">One line of code, enterprise-grade auth</h2>
            <div className="hidden text-xs text-white/60 md:block">Passkeys • WebAuthn • FIDO2</div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/60 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
              <div className="flex items-center gap-2">
                {Object.keys(SNIPPETS).map((name) => (
                  <button
                    key={name}
                    className={`rounded-md px-3 py-1.5 text-xs transition ${tab === name ? 'bg-white text-black' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                    onClick={() => setTab(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <button onClick={copy} className="inline-flex items-center gap-1 rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/10">
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="max-h-[420px] overflow-auto p-4 text-sm leading-relaxed [tab-size:2]"><code className="block whitespace-pre text-white/90">{code}</code></pre>
          </div>

          <div className="mt-4 text-xs text-white/50">
            Example API surface — prelaunch. Final SDKs and endpoints may change.
          </div>
        </div>
      </div>
    </section>
  );
}
