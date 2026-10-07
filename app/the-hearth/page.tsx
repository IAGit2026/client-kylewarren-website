import type { Metadata } from 'next';
import Script from 'next/script';
import '../../styles/the-hearth.css';

export const metadata: Metadata = {
  "title": "The Hearth — Kyle Warren",
  "description": "A brotherhood of men doing the real work — breath, truth, and the honest check-in — gathered around one fire with Kyle. Walk in as you are.",
  "alternates": {
    "canonical": "/the-hearth"
  },
  "openGraph": {
    "url": "/the-hearth",
    "type": "website",
    "title": "The Hearth — The Brotherhood | Kyle Warren",
    "description": "A brotherhood of men doing the real work — breath, truth, and the honest check-in — gathered around one fire with Kyle. Walk in as you are.",
    "images": [
      "/assets/img/img-5293910210.jpg"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "The Hearth — The Brotherhood | Kyle Warren",
    "description": "A brotherhood of men doing the real work — breath, truth, and the honest check-in — gathered around one fire with Kyle. Walk in as you are."
  }
};

export default function TheHearthPage() {
  return (
    <>
      
        <header className="nav">
          <div className="nav-inner">
            <a className="brand" href="/">
              <img src="/assets/img/img-0e8561ba06.png" alt="Kyle Warren flame mark" />
              <span className="wm"><span className="bn">KYLE WARREN</span><span className="bt">Modern Initiator</span></span>
            </a>
            <nav className="nav-links">
              <a href="/#guide">About</a>
              <a href="/#lineage">Lineage</a>
              <a href="/#forge">The Forge</a>
              <a href="/#offers">Offers</a>
              <a href="/#proof">Stories</a>
              <a href="/the-hearth" className="nav-cta">Join the brotherhood</a>
            </nav>
          </div>
        </header>
        <section className="hh-hero">
          <div className="wrap inner">
            <span className="hh-eyebrow" style={{display: 'block', marginBottom: 6}}>The Hearth · Brotherhood</span>
            <h1>You are never meant to <em>walk alone.</em></h1>
            <p className="hh-sub">The Hearth is a brotherhood of men doing the real work — breath, truth, and the honest check-in — gathered around one fire with Kyle. Walk in as you are. All it asks is your honesty.</p>
            <div className="hh-cta">
              <a href="https://kwinitiations.com/" target="_blank" rel="noopener" className="btn btn-primary">Join the brotherhood</a>
              <a href="#inside" className="btn btn-ghost">See what’s inside</a>
            </div>
            <div className="mark-rule" style={{margin: '34px auto 0'}}><span className="dot" /><span className="line" /><span className="ring" /><span className="line" /><span className="dot" /></div>
            <p className="hh-tag">“A man was never built to forge alone.”</p>
          </div>
        </section>
        <section className="hh-sec" style={{background: '#FBF8F1'}}>
          <div className="wrap reveal">
            <div className="hh-head">
              <span className="hh-eyebrow">The quiet drift</span>
              <h2>Doing it all alone is the slowest way to disappear.</h2>
              <p>You don’t need another app or a louder morning routine. You need men who see you, a place to tell the truth, and a fire to sit around. Most men never find it — so the drift wins, one quiet year at a time.</p>
            </div>
            <div className="hh-cards">
              <div className="hh-card"><div className="hh-ic"><svg viewBox="0 0 24 24"><circle cx={12} cy={12} r={8} /><path d="M8 14c1.2 1.4 2.6 2 4 2s2.8-.6 4-2" /></svg></div><h3>No witness</h3><p>No one knows the real you — the 3 a.m. version. So the same loops run unchecked, year after year.</p></div>
              <div className="hh-card"><div className="hh-ic"><svg viewBox="0 0 24 24"><path d="M12 3c2 3 4 4 4 7a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C8 10 8 12 8 12a4 4 0 0 0 8 0c0-4-2-6-4-9z" /></svg></div><h3>No rhythm</h3><p>Motivation spikes and fades. Without a weekly practice and a room that expects you, nothing compounds.</p></div>
              <div className="hh-card"><div className="hh-ic"><svg viewBox="0 0 24 24"><path d="M4 12l4-4 4 4 4-4 4 4" /><path d="M4 16l4-2 4 2 4-2 4 2" /></svg></div><h3>No fire</h3><p>You’ve read the books. What’s missing isn’t information — it’s brotherhood, breath, and a place to begin.</p></div>
            </div>
          </div>
        </section>
        <section className="hh-sec" id="inside" style={{background: 'linear-gradient(180deg,#F4EEE1,#FBF8F1)'}}>
          <div className="wrap reveal">
            <div className="hh-head">
              <span className="hh-eyebrow">What the Hearth is</span>
              <h2>A fire, a practice, and a brotherhood.</h2>
              <p>Not a course. Not a feed to scroll. A living room of men choosing to come back to themselves — together.</p>
            </div>
            <div className="hh-cards">
              <div className="hh-card"><div className="hh-ic"><svg viewBox="0 0 24 24"><path d="M12 3c2 3 4 4 4 7a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C8 10 8 12 8 12a4 4 0 0 0 8 0c0-4-2-6-4-9z" /></svg></div><h3>A fire to gather around</h3><p>Live fireside drops and open Q&amp;A with Kyle. Show up, listen, ask the real question, and be met.</p></div>
              <div className="hh-card"><div className="hh-ic"><svg viewBox="0 0 24 24"><circle cx={12} cy={12} r={8} /><path d="M8 14c1.2 1.4 2.6 2 4 2s2.8-.6 4-2" /></svg></div><h3>A practice that compounds</h3><p>Weekly breath, mantra, and the honest check-in. Small, repeatable, and built to hold.</p></div>
              <div className="hh-card"><div className="hh-ic"><svg viewBox="0 0 24 24"><path d="M4 12l4-4 4 4 4-4 4 4" /><path d="M4 16l4-2 4 2 4-2 4 2" /></svg></div><h3>A brotherhood that holds</h3><p>Your first council — men on the same path who’ll witness you, challenge you, and not flinch at the truth.</p></div>
            </div>
          </div>
        </section>
        <section className="hh-sec" style={{background: '#FBF8F1'}}>
          <div className="wrap reveal">
            <div className="hh-head">
              <span className="hh-eyebrow">The weekly rhythm</span>
              <h2>What happens inside</h2>
              <p>A simple cadence you can actually keep. Come for one thing, stay for the fire.</p>
            </div>
            <div className="hh-rhythm">
              <div className="hh-row"><span className="hh-day">Fireside</span><div><h4>Live drops with Kyle</h4><p>Short, potent teachings on fire, sovereignty, and brotherhood — then open the floor.</p></div></div>
              <div className="hh-row"><span className="hh-day">Practice</span><div><h4>Breath &amp; mantra</h4><p>Guided practices to interrupt reactivity and come back to the body. Simple, not easy.</p></div></div>
              <div className="hh-row"><span className="hh-day">Check-in</span><div><h4>The honest check-in</h4><p>Where are you leaking? Where are you strong? Tell the truth to men who won’t flinch.</p></div></div>
              <div className="hh-row"><span className="hh-day">Council</span><div><h4>Brothers on the path</h4><p>Find the men who’ll pick up the phone. The council is where the drift finally ends.</p></div></div>
            </div>
          </div>
        </section>
        <section className="hh-promise">
          <div className="wrap reveal">
            <p className="q">“You have the capacity to be your best self right now. You are never alone. You can do this.”</p>
            <p className="by">— Kyle Warren</p>
          </div>
        </section>
        <section className="hh-sec" style={{background: '#FBF8F1'}}>
          <div className="wrap reveal">
            <div className="hh-guide">
              <div className="hh-portrait"><img src="/assets/img/img-45ab42d94e.jpg" alt="Kyle Warren" loading="lazy" decoding="async" /></div>
              <div>
                <span className="hh-eyebrow">Your guide</span>
                <h2>I’ll keep the fire lit.</h2>
                <p>I know the man who looks like he has it together and feels, underneath, like he’s leaking out. I met my own blind spots and the places I wasn’t showing up for myself. I didn’t read my way out — I was forged, and I didn’t do it alone.</p>
                <p className="pull">“Simple, not easy. Come back to self, back to nature, back to the men who hold you.”</p>
                <p>The Hearth is where I keep the door open — real, and held. Take the work seriously and yourself lightly. Just come sit by the fire.</p>
                <p className="sign">— Kyle Warren, Modern Initiator</p>
              </div>
            </div>
          </div>
        </section>
        <section className="hh-sec hh-tst">
          <div className="wrap reveal">
            <div className="hh-head">
              <span className="hh-eyebrow">From the men around the fire</span>
              <h2>You’ll be in good company</h2>
            </div>
            <div className="hh-tgrid">
              <div className="hh-t feat"><p>"Kyle brings together formal coaching education, lived experience, emotional intelligence and a grounded, calming presence that people naturally feel safe around. The life he speaks about creating is one he has actively built himself. He has a special gift for working with men searching for direction, confidence, and a stronger connection to themselves — patient, steady, and able to hold space without judgment."</p><span className="who">— Kale Black · Coaching practitioner &amp; collaborator</span></div>
              <div className="hh-t"><p>"I came in numb and busy. I walked out with a calendar I own, a body I trust, and three brothers who'd pick up the phone at 3 a.m. The fog is gone."</p><span className="who">— Replace with a real client · 37, in tech</span></div>
              <div className="hh-t"><p>"I'd done the books, the podcasts, the morning routines. This was the first thing that landed in my body. I lead my family differently now."</p><span className="who">— Replace with a real client · founder</span></div>
            </div>
          </div>
        </section>
        <section className="hh-sec" style={{background: '#FBF8F1'}}>
          <div className="wrap reveal">
            <div className="hh-head">
              <span className="hh-eyebrow">Before you knock</span>
              <h2>Questions men ask at the door</h2>
            </div>
            <div className="hh-faq">
              <div className="hh-q"><h4>What’s the catch?</h4><p>None. No trial games, no bait. The Hearth is the open door into the work — the only ask is that you show up honestly.</p></div>
              <div className="hh-q"><h4>Do I have to share or perform?</h4><p>Never. Come and listen for as long as you need. The men who speak set the tone — steady, real, no posturing. You move at your own pace.</p></div>
              <div className="hh-q"><h4>I’ve tried men’s groups before and drifted off. Why is this different?</h4><p>Because it has a rhythm and a fire — a weekly cadence and a guide who keeps it lit. You’re not left to self-motivate. You’re expected, and you’re held.</p></div>
              <div className="hh-q"><h4>What if I want to go deeper?</h4><p>When you’re ready, the Hearth opens onto the day retreat and the full 16-week Forge. But there’s no pressure — start here, and let the fire draw you.</p></div>
            </div>
          </div>
        </section>
        <section className="hh-band">
          <div className="wrap reveal">
            <h2>Pull up a seat at the fire.</h2>
            <p>The fire’s already lit and the men are already here. You have the capacity to begin right now — and you won’t walk in alone.</p>
            <a href="https://kwinitiations.com/" target="_blank" rel="noopener" className="btn btn-primary">Join the brotherhood</a>
          </div>
        </section>
        <footer className="footer">
          <div className="wrap footer-inner">
            <div className="fbrand">KYLE WARREN</div>
            <div className="ft">Modern Initiator</div>
            <p className="ftag">Fire · Sovereignty · Brotherhood</p>
            <div className="mark-rule"><span className="dot" /><span className="line" /><span className="ring" /><span className="line" /><span className="dot" /></div>
            <p className="fcontact"><a href="mailto:info@kwinitiations.com">info@kwinitiations.com</a> &nbsp;·&nbsp; <a href="https://kwinitiations.com/" target="_blank" rel="noopener">kwinitiations.com</a></p>
            <div className="fsocial"><a href="https://instagram.com/kwinitiations" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x={3} y={3} width={18} height={18} rx={5} /><circle cx={12} cy={12} r={4} /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" /></svg></a></div>
          </div>
        </footer>
      
      <Script src="/js/the-hearth.js" strategy="afterInteractive" />
    </>
  );
}
