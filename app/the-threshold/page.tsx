import type { Metadata } from 'next';
import Script from 'next/script';
import '../../styles/the-threshold.css';

export const metadata: Metadata = {
  "title": "The Threshold — Kyle Warren",
  "description": "Three quick questions, then the eight spokes of your life. In five minutes, see which areas are strong, which are short, and the one edge worth working.",
  "alternates": {
    "canonical": "/the-threshold"
  },
  "openGraph": {
    "url": "/the-threshold",
    "type": "website",
    "title": "The Threshold — Map Your Wheel | Kyle Warren",
    "description": "Three quick questions, then the eight spokes of your life. In five minutes, see which areas are strong, which are short, and the one edge worth working.",
    "images": [
      "/assets/img/img-27ad0e8b07.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "The Threshold — Map Your Wheel | Kyle Warren",
    "description": "Three quick questions, then the eight spokes of your life. In five minutes, see which areas are strong, which are short, and the one edge worth working."
  }
};

export default function TheThresholdPage() {
  return (
    <>
      
        {/* ===== HERO ===== */}
        <section id="hero" className="screen active">
          <div className="hero-inner">
            <img className="hero-logo" src="/assets/img/img-27ad0e8b07.png" alt="Kyle Warren — Modern Initiator" />
            <span className="eyebrow">Fire · Sovereignty · Brotherhood</span>
            <h1 className="threshold-title">THE THRESHOLD</h1>
            <div className="hero-rule" />
            <p className="hero-h">Where do you actually stand?</p>
            <p className="hero-p">Three quick questions, then the eight spokes of your life — the full Wheel. In five minutes you’ll see which areas are strong, which are short, and the one edge worth a real conversation with Kyle.</p>
            <button className="btn" data-onclick="startQualify()">Step in</button>
            <div className="meta">3 + 16 questions · ~5 minutes · bring the truth</div>
          </div>
        </section>
        {/* ===== QUALIFY (3 questions) ===== */}
        <section id="qualify" className="screen audit">
          <div className="topbar">
            <div className="wrap">
              <div className="tb-row">
                <div className="tb-mark"><img src="/assets/img/img-71181a8c48.png" alt="" loading="lazy" decoding="async" /><span>THE THRESHOLD</span></div>
                <div className="tb-count">STEP 1 · THE FIT</div>
              </div>
            </div>
          </div>
          <div className="wrap">
            <div className="phase-head">
              <div className="phase-num">BEFORE WE BEGIN</div>
              <h2 className="phase-name">THE FIT</h2>
              <p className="phase-line">“Three questions. Answer straight — this decides whether the rest is worth your time.”</p>
            </div>
            <div id="qualList" />
            <div className="navrow">
              <button className="link-back" data-onclick="go('hero')">← Back</button>
              <div className="nudge" id="qualNudge">Answer all three to continue.</div>
              <button className="btn" data-onclick="submitQualify()">Continue to the wheel</button>
            </div>
          </div>
        </section>
        {/* ===== WHEEL ASSESSMENT ===== */}
        <section id="audit" className="screen audit">
          <div className="topbar">
            <div className="wrap">
              <div className="tb-row">
                <div className="tb-mark"><img src="/assets/img/img-71181a8c48.png" alt="" loading="lazy" decoding="async" /><span>THE THRESHOLD</span></div>
                <div className="tb-count" id="tbCount">PART 1 OF 4</div>
              </div>
              <div className="ascent" id="ascent">
                <div className="step"><i /></div><div className="step"><i /></div>
                <div className="step"><i /></div><div className="step"><i /></div>
              </div>
            </div>
          </div>
          <div className="wrap">
            <div className="phase-head">
              <div className="phase-num" id="phaseNum">PART 01</div>
              <h2 className="phase-name" id="phaseName">THE WHEEL</h2>
              <p className="phase-line" id="phaseLine" />
              <p className="phase-sub" id="phaseSub" />
            </div>
            <div id="qList" />
            <div className="navrow">
              <button className="link-back" id="backBtn" data-onclick="prevPhase()">← Back</button>
              <div className="nudge" id="nudge">Answer every line before you move forward.</div>
              <button className="btn" id="nextBtn" data-onclick="nextPhase()">Continue</button>
            </div>
          </div>
        </section>
        {/* ===== GATE ===== */}
        <section id="gate" className="screen">
          <div className="gate-inner">
            <img className="flame" src="/assets/img/img-71181a8c48.png" alt="" loading="lazy" decoding="async" />{' '}
            <span className="eyebrow">Your wheel is drawn</span>
            <h2 className="gate-h">SEE WHERE YOU STAND</h2>
            <p className="gate-p">Your Wheel of Life and the reading beneath it are ready. Tell me who’s looking at them.</p>
            <div className="field">
              <label htmlFor="fname">First name</label>
              <input id="fname" type="text" placeholder="Your name" autoComplete="given-name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@email.com" autoComplete="email" />
            </div>
            <div className="err" id="gateErr" />
            <button className="btn" style={{width: '100%', marginTop: 8}} data-onclick="reveal()">Reveal my wheel</button>
            <p className="gate-note">No spam. Your wheel and an invitation to a call with Kyle — nothing else.</p>
          </div>
        </section>
        {/* ===== RESULTS ===== */}
        <section id="results" className="screen">
          <div className="res-hero">
            <div className="wrap">
              <span className="eyebrow res-eye">Your Wheel of Life</span>
              <p className="res-greet" id="greet" />
              <div className="score-big" id="scoreBig">0<span>%</span></div>
              <div className="tier" id="tierWord" />
              <p className="tier-read" id="tierRead" />
            </div>
          </div>
          <div className="res-section">
            <div className="wrap">
              <div className="res-label">The Wheel</div>
              <h3 className="res-h">HOW ROUND IS YOUR LIFE RIGHT NOW</h3>
              <div className="wheel-wrap"><div id="wheelHost" /></div>
              <div className="wheel-legend">
                <span className="lg-str"><i />Your fire — strongest spoke</span>
                <span className="lg-gap"><i />Your gap — shortest spoke</span>
              </div>
            </div>
          </div>
          <div className="res-section" style={{paddingTop: 0}}>
            <div className="wrap">
              <div className="res-label">The Reading</div>
              <h3 className="res-h">WHERE THE WORK IS</h3>
              <div className="diag" id="gapBox">
                <div className="diag-k">Your gap · the spoke costing you most</div>
                <div className="diag-name" id="gapName" />
                <div className="diag-body" id="gapBody" />
              </div>
              <div className="diag strength" id="strBox">
                <div className="diag-k">Your fire · where you already stand</div>
                <div className="diag-name" id="strName" />
                <div className="diag-body" id="strBody" />
              </div>
            </div>
          </div>
          <div className="wrap">
            <div className="cta">
              <img className="flame" src="/assets/img/img-71181a8c48.png" alt="" loading="lazy" decoding="async" />
              <span className="eyebrow cta-eye">The next move</span>
              <h3 className="cta-h">BOOK A CALL WITH KYLE</h3>
              <p className="cta-p">One conversation. Direct, embodied, no throat-clearing. We take your shortest spoke — <b id="ctaGap" style={{color: 'var(--ember-light)', fontWeight: 700}} /> — and find the single edge that, if you met it, brings the whole wheel back into round.</p>
              <ul className="cta-list">
                <li>A clear read on where you actually stand as a man right now</li>
                <li>The one spoke draining the most energy, time, and self-respect</li>
                <li>The first edge to meet — and what it costs to keep avoiding it</li>
                <li>Whether The Forge is the right fire for you</li>
              </ul>
              <a className="btn" id="bookBtn" href="#" target="_blank" rel="noopener">Book your call</a>
              <p className="cta-close">“A man who can stand in fire. A man who keeps his word.”<br />— Kyle</p>
            </div>
          </div>
          <div className="res-foot">
            <button className="restart" data-onclick="restart()">↻ Retake the wheel</button>
          </div>
        </section>
      
      <Script src="/js/the-threshold.js" strategy="afterInteractive" />
    </>
  );
}
