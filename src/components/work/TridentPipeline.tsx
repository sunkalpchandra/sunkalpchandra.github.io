/**
 * TRIDENT architecture figure: signal → encoder → latent → reasoning →
 * personalization → decoder → intent, with the multi-agent teacher
 * distilling into the real-time path. Pure SVG + SMIL; pulses hidden
 * under prefers-reduced-motion via the `motion-safe` utility.
 */
export function TridentPipeline() {
  return (
    <figure className="my-4">
      <div className="overflow-x-auto rounded-xl border border-line bg-paper-raised p-6 sm:p-8">
        <svg
          viewBox="0 0 940 320"
          role="img"
          aria-label="TRIDENT architecture: EEG and fMRI signals flow through an encoder into a latent representation, then through reasoning and personalization stages to a decoder that outputs intent. A multi-agent teacher system is distilled into the real-time path."
          className="min-w-[760px] text-ink"
        >
          {/* ---- teacher system (training time) ---- */}
          <g className="text-ink-muted" style={{ color: "var(--ink-muted)" }}>
            <ellipse
              cx="520"
              cy="70"
              rx="118"
              ry="44"
              fill="none"
              stroke="var(--line-strong)"
              strokeDasharray="3 5"
            />
            {[
              [472, 62],
              [508, 48],
              [546, 60],
              [530, 88],
              [488, 86],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="var(--ink-muted)" opacity="0.7" />
            ))}
            {/* agent links */}
            <g stroke="var(--line-strong)" strokeWidth="1">
              <path d="M472 62 L508 48 L546 60 L530 88 L488 86 Z M508 48 L530 88 M472 62 L546 60" fill="none" opacity="0.6" />
            </g>
            <text x="655" y="62" fontFamily="var(--font-plex-mono)" fontSize="10" fill="var(--ink-muted)" letterSpacing="1.5">
              MULTI-AGENT TEACHER
            </text>
            <text x="655" y="78" fontFamily="var(--font-plex-mono)" fontSize="9" fill="var(--ink-faint)" letterSpacing="1">
              deliberate · training time
            </text>
            {/* distillation arrow */}
            <path d="M520 116 L520 172" stroke="var(--accent)" strokeWidth="1.2" strokeDasharray="4 4" fill="none" markerEnd="url(#arrowAccent)" />
            <text x="532" y="148" fontFamily="var(--font-plex-mono)" fontSize="9" fill="var(--accent)" letterSpacing="1">
              distill
            </text>
          </g>

          <defs>
            <marker id="arrowAccent" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0 0 L8 4 L0 8 Z" fill="var(--accent)" />
            </marker>
          </defs>

          {/* ---- main real-time path ---- */}
          <path d="M96 210 H878" stroke="var(--line-strong)" strokeWidth="1.2" fill="none" />

          {/* pulses (hidden under reduced motion) */}
          <g className="motion-reduce:hidden">
            {[0, 2.4, 4.8].map((begin) => (
              <circle key={begin} r="3" fill="var(--accent)">
                <animateMotion path="M96,210 L878,210" dur="7.2s" begin={`${begin}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.06;0.94;1" dur="7.2s" begin={`${begin}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>

          {/* 1 · signal */}
          <g>
            <path
              d="M40 210 q6 -26 12 0 q5 22 10 0 q4 -34 9 0 q5 18 10 0 q5 -12 10 0"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="1.4"
            />
            <text x="66" y="252" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="10" fill="var(--ink)" letterSpacing="1.5">
              SIGNAL
            </text>
            <text x="66" y="268" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="9" fill="var(--ink-faint)" letterSpacing="1">
              EEG · fMRI
            </text>
          </g>

          {/* 2 · encoder */}
          <g>
            <rect x="176" y="178" width="48" height="64" rx="7" fill="var(--paper-sunken)" stroke="var(--ink)" strokeWidth="1.2" />
            <path d="M186 194 h28 M186 210 h28 M186 226 h28" stroke="var(--line-strong)" strokeWidth="1" />
            <text x="200" y="252" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="10" fill="var(--ink)" letterSpacing="1.5">
              ENCODER
            </text>
          </g>

          {/* 3 · latent */}
          <g>
            <ellipse cx="340" cy="210" rx="40" ry="30" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="2 4" />
            {[
              [324, 202],
              [340, 194],
              [354, 206],
              [332, 218],
              [348, 222],
              [340, 210],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="2.6" fill="var(--accent)" opacity={i === 5 ? 1 : 0.55} />
            ))}
            <text x="340" y="262" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="10" fill="var(--ink)" letterSpacing="1.5">
              LATENT
            </text>
            <text x="340" y="278" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="9" fill="var(--ink-faint)" letterSpacing="1">
              neural representation
            </text>
          </g>

          {/* 4 · reasoning / routing (distilled) */}
          <g>
            <circle cx="520" cy="210" r="30" fill="var(--paper-sunken)" stroke="var(--ink)" strokeWidth="1.2" />
            <circle cx="510" cy="202" r="3" fill="var(--ink)" />
            <circle cx="530" cy="204" r="3" fill="var(--ink)" />
            <circle cx="520" cy="222" r="3" fill="var(--ink)" />
            <path d="M510 202 L530 204 L520 222 Z" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
            <text x="520" y="262" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="10" fill="var(--ink)" letterSpacing="1.5">
              REASONING
            </text>
            <text x="520" y="278" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="9" fill="var(--ink-faint)" letterSpacing="1">
              temporal context · routing
            </text>
          </g>

          {/* 5 · personalization */}
          <g>
            <circle cx="672" cy="210" r="26" fill="none" stroke="var(--accent)" strokeWidth="1.2" opacity="0.35" />
            <circle cx="672" cy="210" r="17" fill="none" stroke="var(--accent)" strokeWidth="1.2" opacity="0.6" />
            <circle cx="672" cy="210" r="8" fill="none" stroke="var(--accent)" strokeWidth="1.3" />
            <circle cx="672" cy="210" r="2.4" fill="var(--accent)" />
            <text x="672" y="262" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="10" fill="var(--ink)" letterSpacing="1.5">
              PERSONALIZE
            </text>
            <text x="672" y="278" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="9" fill="var(--ink-faint)" letterSpacing="1">
              neural identity · Bayesian
            </text>
          </g>

          {/* 6 · decoder */}
          <g>
            <rect x="778" y="184" width="42" height="52" rx="7" fill="var(--paper-sunken)" stroke="var(--ink)" strokeWidth="1.2" />
            <path d="M788 198 h22 M788 210 h22 M788 222 h22" stroke="var(--line-strong)" strokeWidth="1" />
            <text x="799" y="262" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="10" fill="var(--ink)" letterSpacing="1.5">
              DECODER
            </text>
          </g>

          {/* 7 · intent */}
          <g>
            <path d="M872 196 L898 210 L872 224 Z" fill="var(--accent)" />
            <text x="886" y="252" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="10" fill="var(--ink)" letterSpacing="1.5">
              INTENT
            </text>
          </g>

          {/* real-time bracket */}
          <path d="M176 300 H820" stroke="var(--line)" strokeWidth="1" />
          <path d="M176 295 V300 M820 295 V300" stroke="var(--line)" strokeWidth="1" />
          <text x="498" y="314" textAnchor="middle" fontFamily="var(--font-plex-mono)" fontSize="9" fill="var(--ink-faint)" letterSpacing="1.5">
            STUDENT · REAL TIME
          </text>
        </svg>
      </div>
      <figcaption className="mt-3 font-mono text-[11px] leading-relaxed text-ink-muted">
        Fig. 1 — The deliberation happens at training time; inference doesn&apos;t pay for it.
      </figcaption>
    </figure>
  );
}
