import type { Metadata } from 'next';
import Script from 'next/script';
import '../../styles/forged.css';

export const metadata: Metadata = {
  "title": "Forged: Men’s Group | Kyle Warren",
  "alternates": {
    "canonical": "/forged"
  },
  "openGraph": {
    "url": "/forged",
    "type": "website"
  }
};

export default function ForgedPage() {
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
              <a href="/#lineage">The Walk</a>
              <a href="/the-forge">The Forge</a>
              <a href="/#offers">Offers</a>
              <a href="/#proof">Stories</a>
              <a href="/fire-audit" className="nav-audit">Take the Audit</a>
              <a href="/the-hearth" className="nav-cta">Join the brotherhood</a>
            </nav>
          </div>
        </header>
        <section className="hh-hero">
          <div className="wrap inner">
            <span className="hh-eyebrow" style={{display: 'block', marginBottom: 6}}>Forged · The Men’s Group</span>
            <h1>You are never meant to <em>walk alone.</em></h1>
            <p className="hh-sub">Forged is a brotherhood of men doing the real work of breath, truth, and the honest check-in, gathered around one fire with Kyle. Walk in as you are. All it asks is your honesty.</p>
            <div className="hh-cta">
              <a href="https://www.meetup.com/forged-mens-group/" target="_blank" rel="noopener" className="btn btn-primary">Join the brotherhood</a>
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
              <p>You don’t need another app or a louder morning routine. You need men who see you, a place to tell the truth, and a fire to sit around. Most men never find it, so the drift wins, one quiet year at a time.</p>
            </div>
            <div className="hh-cards">
              <div className="hh-card"><div className="hh-ic"><svg viewBox="0 0 24 24"><circle cx={12} cy={12} r={8} /><path d="M8 14c1.2 1.4 2.6 2 4 2s2.8-.6 4-2" /></svg></div><h3>No witness</h3><p>No one knows the real you, the 3 a.m. version. So the same loops run unchecked, year after year.</p></div>
              <div className="hh-card"><div className="hh-ic"><svg viewBox="0 0 24 24"><path d="M12 3c2 3 4 4 4 7a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C8 10 8 12 8 12a4 4 0 0 0 8 0c0-4-2-6-4-9z" /></svg></div><h3>No rhythm</h3><p>Motivation spikes and fades. Without a weekly practice and a room that expects you, nothing compounds.</p></div>
              <div className="hh-card"><div className="hh-ic"><svg viewBox="0 0 24 24"><path d="M4 12l4-4 4 4 4-4 4 4" /><path d="M4 16l4-2 4 2 4-2 4 2" /></svg></div><h3>No fire</h3><p>You’ve read the books. What’s missing isn’t information. It’s brotherhood, breath, and a place to begin.</p></div>
            </div>
          </div>
        </section>
        <section className="hh-sec" id="inside" style={{background: 'linear-gradient(180deg,#F4EEE1,#FBF8F1)'}}>
          <div className="wrap reveal">
            <div className="hh-head">
              <span className="hh-eyebrow">What Forged is</span>
              <h2>A fire, a practice, and a brotherhood.</h2>
              <p>Not a course. Not a feed to scroll. A living room of men choosing to come back to themselves, together.</p>
            </div>
            <div className="hh-cards">
              <div className="hh-card"><div className="hh-ic"><svg viewBox="0 0 24 24"><path d="M12 3c2 3 4 4 4 7a4 4 0 0 1-8 0c0-1 .5-2 1-2.5C8 10 8 12 8 12a4 4 0 0 0 8 0c0-4-2-6-4-9z" /></svg></div><h3>A fire to gather around</h3><p>Live fireside drops and open Q&amp;A with Kyle. Show up, listen, ask the real question, and be met.</p></div>
              <div className="hh-card"><div className="hh-ic"><svg viewBox="0 0 24 24"><circle cx={12} cy={12} r={8} /><path d="M8 14c1.2 1.4 2.6 2 4 2s2.8-.6 4-2" /></svg></div><h3>A practice that compounds</h3><p>Weekly breath, mantra, and the honest check-in. Small, repeatable, and built to hold.</p></div>
              <div className="hh-card"><div className="hh-ic"><svg viewBox="0 0 24 24"><path d="M4 12l4-4 4 4 4-4 4 4" /><path d="M4 16l4-2 4 2 4-2 4 2" /></svg></div><h3>A brotherhood that holds</h3><p>Your first council: men on the same path who’ll witness you, challenge you, and not flinch at the truth.</p></div>
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
              <div className="hh-row"><span className="hh-day">Fireside</span><div><h4>Live drops with Kyle</h4><p>Short, potent teachings on fire, sovereignty, and brotherhood, then open the floor.</p></div></div>
              <div className="hh-row"><span className="hh-day">Practice</span><div><h4>Breath &amp; mantra</h4><p>Guided practices to interrupt reactivity and come back to the body. Simple, not easy.</p></div></div>
              <div className="hh-row"><span className="hh-day">Check-in</span><div><h4>The honest check-in</h4><p>Where are you leaking? Where are you strong? Tell the truth to men who won’t flinch.</p></div></div>
              <div className="hh-row"><span className="hh-day">Council</span><div><h4>Brothers on the path</h4><p>Find the men who’ll pick up the phone. The council is where the drift finally ends.</p></div></div>
            </div>
          </div>
        </section>
        <section className="hh-promise">
          <div className="wrap reveal">
            <p className="q">“You have the capacity to be your best self right now. You are never alone. You can do this.”</p>
            <p className="by">Kyle Warren</p>
          </div>
        </section>
        <section className="hh-sec" style={{background: '#FBF8F1'}}>
          <div className="wrap reveal">
            <div className="hh-guide">
              <div className="hh-portrait"><img src="/assets/img/forged-drum.jpg" alt="Kyle Warren" /></div>
              <div>
                <span className="hh-eyebrow">Your guide</span>
                <h2>I’ll keep the fire lit.</h2>
                <p>I know the man who looks like he has it together and feels, underneath, like he’s leaking out. I met my own blind spots and the places I wasn’t showing up for myself. I didn’t read my way out. I was forged, and I didn’t do it alone.</p>
                <p className="pull">“Simple, not easy. Come back to self, back to nature, back to the men who hold you.”</p>
                <p>Forged is where I keep the door open, real, and held. Take the work seriously and yourself lightly. Just come sit by the fire.</p>
                <p className="sign">Kyle Warren, Modern Initiator</p>
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
              <div className="hh-t"><p>“I’ve worked alongside Kyle for years, in coaching training, as event collaborators, and as fellow practitioners. He brings formal education, lived experience, and a grounded, calming presence that people naturally feel safe around. What I respect most is that the life he helps others build is one he has actively built himself. He listens carefully, responds with sincerity, and has a particular gift for working with men searching for direction and purpose. If you want a coach with genuine care and real depth, talk to Kyle.”</p><span className="who">Kale B. · Coaching practitioner &amp; collaborator</span></div>
              <div className="hh-t"><p>“I hadn’t been to a men’s group in months, and just like that I felt at home again: heard, supported, not alone. There’s nothing like connecting with brothers who are craving the inner work, and the space Kyle created was all of that and more. He held it gently but firmly, structured yet flowing. It was exactly what I needed at that moment. I’ll be at any future men’s group Kyle hosts.”</p><span className="who">Kyle H. · Men’s circle</span></div>
              <div className="hh-t"><p>“I walked in not knowing anyone and immediately felt welcome, like I belonged. The amplified energy of men supporting men was palpable. I was reminded that we need each other, that it’s okay to be vulnerable, and that it feels really good to be heard. Kyle did an excellent job guiding us and holding the space. I left lighter than I came in, and I’ll definitely be at the next one.”</p><span className="who">Brien · Men’s circle</span></div>
              <div className="hh-t"><p>“The men’s circle gave me a safe space to share what had been troubling me. Life throws a lot of obstacles at us, and they’re tough to carry alone. The breath of fire helped me release old trauma and stress I’d been holding in my body, and the meditation at the end was deeply relaxing. I left recentered and clearer than when I arrived. It’s a space I’ll keep coming back to.”</p><span className="who">Pierre · Men’s circle</span></div>
              <div className="hh-t"><p>“Kyle’s men’s container was perfectly timed for me. The space he created let me connect more deeply with myself and with other brothers, while also bringing me into confrontation with the parts of myself I’d been avoiding. Through relational, physical, and spiritual practice, I was challenged, supported, and ultimately left with a deep sense of gratitude for my life and for the experience. Thank you, Kyle.”</p><span className="who">Markwell · Men’s circle</span></div>
              <div className="hh-t"><p>“It had been a long time since I’d been in a room with men doing this kind of work, and I didn’t realize how much I’d been missing it until I sat down. Kyle held the space with real care and facilitated breathwork that moved something loose in me, and the conversations that followed went somewhere honest fast. I came in carrying weight I hadn’t named. I shared it, let some of it go, and walked out lighter.”</p><span className="who">David P. · Men’s circle</span></div>
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
              <div className="hh-q"><h4>What’s the catch?</h4><p>None. No trial games, no bait. Forged is the open door into the work. The only ask is that you show up honestly.</p></div>
              <div className="hh-q"><h4>Do I have to share or perform?</h4><p>Never. Come and listen for as long as you need. The men who speak set the tone: steady, real, no posturing. You move at your own pace.</p></div>
              <div className="hh-q"><h4>I’ve tried men’s groups before and drifted off. Why is this different?</h4><p>Because it has a rhythm and a fire: a weekly cadence and a guide who keeps it lit. You’re not left to self-motivate. You’re expected, and you’re held.</p></div>
              <div className="hh-q"><h4>What if I want to go deeper?</h4><p>When you’re ready, Forged opens onto the day retreat and the full 16-week Forge. But there’s no pressure. Start here, and let the fire draw you.</p></div>
            </div>
          </div>
        </section>
        <section className="hh-band">
          <div className="wrap reveal">
            <h2>Pull up a seat at the fire.</h2>
            <p>The fire’s already lit and the men are already here. You have the capacity to begin right now, and you won’t walk in alone.</p>
            <a href="https://www.meetup.com/forged-mens-group/" target="_blank" rel="noopener" className="btn btn-primary">Join the brotherhood</a>
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
      
      <Script src="/js/forged.js" strategy="afterInteractive" />
    </>
  );
}
