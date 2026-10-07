import type { Metadata } from 'next';
import Script from 'next/script';
import '../../styles/fire-audit.css';

export const metadata: Metadata = {
  "title": "The Fire Audit | Kyle Warren",
  "alternates": {
    "canonical": "/fire-audit"
  },
  "openGraph": {
    "url": "/fire-audit",
    "type": "website"
  }
};

export default function FireAuditPage() {
  return (
    <>
      
        <header className="nav">
          <div className="nav-inner">
            <a className="brand" href="/">
              <img src="/assets/img/img-71181a8c48.png" alt="Kyle Warren flame mark" />
              <span className="wm"><span className="bn">KYLE WARREN</span><span className="bt">Modern Initiator</span></span>
            </a>
            <nav className="nav-links">
              <a href="/#guide">About</a>
              <a href="/#lineage">The Walk</a>
              <a href="/the-forge">The Forge</a>
              <a href="/#offers">Offers</a>
              <a href="/#proof">Stories</a>
              <a href="/the-hearth" className="nav-cta">Join the brotherhood</a>
            </nav>
          </div>
        </header>
        {/* ===== HERO ===== */}
        <section id="hero" className="screen active">
          <div className="hero-inner">
            <span className="eyebrow">Fire · Sovereignty · Brotherhood</span>
            <h1>The <em>Fire Audit.</em></h1>
            <p className="hero-h">How much fire are you actually bringing?</p>
            <p className="hero-p">Sixteen honest statements across the eight areas of a man’s life. Rate each one as it is today, not as it should be.</p>
            <ul className="hero-get">
              <li>Your Fire Score: the fire and purpose you bring to your life right now</li>
              <li>The areas already burning, and what is fuelling them</li>
              <li>The areas asking for more intention and focus</li>
              <li>One concrete thing to put your attention on in each</li>
            </ul>
            <button className="btn" data-onclick="startAudit()">Begin the audit</button>
            <div className="meta">16 statements · about 5 minutes · bring the truth</div>
            <div className="hero-tag">
              <div className="mark-rule"><span className="dot" /><span className="line" /><span className="ring" /><span className="line" /><span className="dot" /></div>
              <p className="q">“A life of passion is built the same way a fire is. Attention, fuel, and air.”</p>
            </div>
          </div>
        </section>
        {/* ===== AUDIT ===== */}
        <section id="audit" className="screen audit">
          <div className="topbar">
            <div className="wrap">
              <div className="tb-row">
                <div className="tb-mark"><img src="/assets/img/img-71181a8c48.png" alt="" /><span>THE FIRE AUDIT</span></div>
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
              <h2 className="phase-name" id="phaseName">THE EIGHT FIRES</h2>
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
            <img className="flame" src="/assets/img/img-71181a8c48.png" alt="" />
            <span className="eyebrow">Your score is ready</span>
            <h2 className="gate-h">SEE YOUR FIRE SCORE</h2>
            <p className="gate-p">Your score, your wheel, and where to put your intention next. Tell me who is looking at them.</p>
            <div className="field">
              <label htmlFor="fname">First name</label>
              <input id="fname" type="text" placeholder="Your name" autoComplete="given-name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@email.com" autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone <span style={{color: 'var(--stone)', letterSpacing: '.1em'}}>(optional)</span></label>
              <input id="phone" type="tel" placeholder="(555) 555 5555" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="handle">Social handle <span style={{color: 'var(--stone)', letterSpacing: '.1em'}}>(optional)</span></label>
              <input id="handle" type="text" placeholder="@yourhandle" autoComplete="off" />
            </div>
            <div className="err" id="gateErr" />
            <button className="btn" style={{width: '100%', marginTop: 8}} data-onclick="reveal()">Reveal my score</button>
            <p className="gate-note">No spam. Your results and the occasional note from Kyle. Unsubscribe any time.</p>
          </div>
        </section>
        {/* ===== RESULTS ===== */}
        <section id="results" className="screen">
          <div className="res-hero">
            <div className="wrap">
              <span className="eyebrow res-eye">Your Fire Score</span>
              <p className="res-greet" id="greet" />
              <div className="score-big" id="scoreBig">0<span>%</span></div>
              <div className="tier" id="tierWord" />
              <p className="tier-read" id="tierRead" />
            </div>
          </div>
          <div className="res-section">
            <div className="wrap">
              <div className="res-label">The Wheel</div>
              <h3 className="res-h">WHERE YOUR FIRE BURNS</h3>
              <div className="wheel-wrap"><div id="wheelHost" /></div>
              <div className="wheel-legend">
                <span className="lg-str"><i />Burning brightest</span>
                <span className="lg-gap"><i />Asking for air</span>
              </div>
            </div>
          </div>
          <div className="res-section" style={{paddingTop: 0}}>
            <div className="wrap">
              <div className="res-label">The Reading</div>
              <h3 className="res-h">WHAT YOUR SCORE IS TELLING YOU</h3>
              <div className="diag strength" id="strBox">
                <div className="diag-k">Burning brightest</div>
                <div className="diag-name" id="strName" />
                <div className="diag-body" id="strBody" />
              </div>
              <div className="diag" id="gapBox">
                <div className="diag-k">Asking for more intention</div>
                <div className="diag-name" id="gapName" />
                <div className="diag-body" id="gapBody" />
              </div>
            </div>
          </div>
          <div className="wrap">
            <div className="focus">
              <img className="flame" src="/assets/img/img-71181a8c48.png" alt="" />
              <span className="eyebrow focus-eye">Where to put your fire next</span>
              <h3 className="focus-h">THREE AREAS WORTH YOUR INTENTION</h3>
              <p className="focus-p">These are your three lowest areas. Not failures, just the places running on duty instead of fire. Give any one of them real attention for thirty days and the whole wheel starts to turn differently.</p>
              <ul className="focus-list" id="focusList" />
              <p className="focus-close">“A life of passion is built the same way a fire is. Attention, fuel, and air.”</p>
            </div>
          </div>
          <div className="res-foot">
            <a className="btn" href="https://api.leadconnectorhq.com/widget/booking/jcNuHaIos1H25H0lO6rA" target="_blank" rel="noopener">Book Your Breakthrough Session</a>
          </div>
        </section>
        <footer className="footer">
          <div className="wrap">
            <div className="fbrand">KYLE WARREN</div>
            <div className="ft">Modern Initiator</div>
            <p className="ftag">Fire · Sovereignty · Brotherhood</p>
            <p className="fcontact"><a href="mailto:info@kwinitiations.com">info@kwinitiations.com</a> &nbsp;·&nbsp; <a href="https://kwinitiations.com/" target="_blank" rel="noopener">kwinitiations.com</a></p>
          </div>
        </footer>
      
      <Script src="/js/fire-audit.js" strategy="afterInteractive" />
    </>
  );
}
