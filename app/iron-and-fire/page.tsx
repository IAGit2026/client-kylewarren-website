import type { Metadata } from 'next';
import Script from 'next/script';
import '../../styles/iron-and-fire.css';

export const metadata: Metadata = {
  "title": "Iron and Fire | Kyle Warren",
  "alternates": {
    "canonical": "/iron-and-fire"
  },
  "openGraph": {
    "url": "/iron-and-fire",
    "type": "website"
  }
};

export default function IronAndFirePage() {
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
        <section className="if-hero">
          <div className="wrap inner">
            <span className="if-badge">One day · Limited seats</span>
            <span className="if-eyebrow" style={{display: 'block', marginBottom: 8}}>Iron and Fire · The Retreat</span>
            <h1>One day at the fire that <em>resets everything.</em></h1>
            <p className="if-sub">A single day around real fire (cold, breath, movement, and council) where you name your leaks, meet your edges, and walk out with a 90-day map and a brotherhood. The fastest way to feel what standing in fire actually means.</p>
            <div className="if-cta">
              <a href="https://api.leadconnectorhq.com/widget/bookings/30-minute-discovery-call-kw-initiations" className="btn btn-primary">Apply Today</a>
              <a href="#day" className="btn btn-ghost on-dark">What the day holds</a>
            </div>
            <p className="if-tag">“The man who finishes the day is not the man who arrived.”</p>
          </div>
        </section>
        <section className="if-sec">
          <div className="wrap reveal">
            <div className="if-head">
              <span className="if-eyebrow">Why a day, not a download</span>
              <h2>You already know what to do. You’re just not doing it.</h2>
              <p>Insight isn’t your problem. Another course won’t move you. What breaks a pattern is a day in the body, around fire, with men, where avoidance has nowhere left to hide.</p>
            </div>
            <div className="if-pains">
              <div className="if-pain"><h3>Stuck in your head</h3><p>You’ve read, listened, planned. The work stays theoretical and the edges stay unmet.</p></div>
              <div className="if-pain"><h3>No honest mirror</h3><p>No one holds the mirror clean. The leaks (the screen, the numbness, the avoidance) keep running unnamed.</p></div>
              <div className="if-pain"><h3>No line drawn</h3><p>Big intentions, no map. Without a plan and a witness, Monday erases Sunday’s resolve.</p></div>
            </div>
            <p className="if-turn">You don’t need more information.<b>You need to meet the fire.</b></p>
          </div>
        </section>
        <section className="if-sec if-tl" id="day">
          <div className="wrap reveal">
            <div className="if-head">
              <span className="if-eyebrow">How the day is built</span>
              <h2>The frame of the day</h2>
              <p>Not a schedule to manage. A shape the day moves through. Six elements, one circle, one fire. Every part of it is built to take you out of theory and into your own body, your own truth, and your own next move.</p>
            </div>
            <div className="if-cards">
              <div className="if-hc"><h4>The container</h4><p>One circle of men, one fire, phones down. We set the container, name why each man came, and agree on the single rule the whole day rests on: tell the truth.</p><div className="b"><b>What it gives you</b>Somewhere you can finally stop managing how you come across.</div></div>
              <div className="if-hc"><h4>The body</h4><p>Cold, breath, movement and heat. Not a workout. It is a way of getting you out of your head and into the only place the work actually lands.</p><div className="b"><b>What it gives you</b>You feel what you’ve been carrying, and you feel it move.</div></div>
              <div className="if-hc"><h4>The mirror</h4><p>A guided, non-shaming inventory. The leaks, the vices, the avoidances, the edge you’ve been circling for years, named plainly, out loud, without anyone flinching.</p><div className="b"><b>What it gives you</b>The thing you’ve been half-admitting to yourself finally gets said.</div></div>
              <div className="if-hc"><h4>The council</h4><p>The circle turns to you. Men who listen properly, reflect honestly, and don’t rush to fix you or agree with you.</p><div className="b"><b>What it gives you</b>You stop carrying it alone, and you find out you were never the only one.</div></div>
              <div className="if-hc"><h4>The map</h4><p>The day becomes a plan. Three clear moves and the daily disciplines that carry them, written while the fire is still in you.</p><div className="b"><b>What it gives you</b>You leave with something specific to do on Monday, not a feeling that fades.</div></div>
              <div className="if-hc"><h4>The vow</h4><p>One line you draw and refuse to cross, spoken aloud to the fire and to the men who heard you say it.</p><div className="b"><b>What it gives you</b>A commitment with witnesses is a different kind of commitment.</div></div>
            </div>
            <div className="if-cta-row reveal"><p className="sub">A small circle. One fire. One day that changes the arc.</p><a href="https://api.leadconnectorhq.com/widget/bookings/30-minute-discovery-call-kw-initiations" className="btn btn-primary">Apply Now</a></div>
          </div>
        </section>
        <section className="if-sec">
          <div className="wrap reveal">
            <div className="if-head"><span className="if-eyebrow">The payoff</span><h2>What you walk out with</h2>
              <p>A day is only worth it if Tuesday looks different. Here is what you carry out of the circle and into your life.</p></div>
            <div className="if-cards">
              <div className="if-hc"><h4>A body you trust</h4><p>Cold, breath and movement reconnect you to your own strength and steadiness. You leave knowing your body is an ally, not something you drag around.</p></div>
              <div className="if-hc"><h4>Your edges, named</h4><p>The exact leaks and avoidances that have been quietly running you, finally out in the open, where they lose most of their power.</p></div>
              <div className="if-hc"><h4>A nervous system you can steer</h4><p>You learn, in your body, how to drop your own reactivity in minutes. That’s a tool you keep for every hard conversation that comes after.</p></div>
              <div className="if-hc"><h4>A 90-day map</h4><p>Three clear moves and the disciplines to walk them. Concrete enough to start Monday, honest enough that you’ll actually keep it.</p></div>
              <div className="if-hc"><h4>A brotherhood</h4><p>Men who watched you do it and know exactly what you committed to. The kind of witness that makes drifting back much harder.</p></div>
              <div className="if-hc"><h4>Proof it’s possible</h4><p>One day of doing the thing you’ve been reading about changes what you believe you’re capable of. That belief is the real take-home.</p></div>
            </div>
          </div>
        </section>
        <section className="if-sec if-tst" style={{background: '#0d0a09'}}>
          <div className="wrap reveal">
            <div className="if-head"><span className="if-eyebrow">Who this is for</span><h2>Be honest about the door you’re at</h2></div>
            <div className="if-for">
              <div className="if-col yes"><h3>This is for you if</h3><ul>
                  <li>You’re successful on paper and hollow underneath</li>
                  <li>You’re done reading and ready to do</li>
                  <li>You’ll tell the truth in a room of men</li>
                  <li>You want a real plan, not another high</li></ul></div>
              <div className="if-col no"><h3>This is not for you if</h3><ul>
                  <li>You want a comfortable weekend workshop</li>
                  <li>You’re looking for hype and quick fixes</li>
                  <li>You’re not willing to be uncomfortable</li>
                  <li>You’d rather stay exactly where you are</li></ul></div>
            </div>
          </div>
        </section>
        <section className="if-sec">
          <div className="wrap reveal">
            <div className="if-guide">
              <div className="if-portrait"><img src="/assets/img/img-b8e518a212.jpg" alt="Kyle Warren" /></div>
              <div>
                <span className="if-eyebrow">Your guide for the day</span>
                <h2>I hold the fire. You do the work.</h2>
                <p>I didn’t read my way out of the fog. I was forged. I’ve met my own blind spots and the ways I wasn’t showing up for myself, and I’ve built the life I speak about.</p>
                <p className="pull">“I don’t sell a fantasy. I hand you a mirror and stand next to you while you look.”</p>
                <p>For one day, I’ll take the work seriously and you lightly, and I won’t let you do it alone.</p>
                <p className="sign">Kyle Warren, Modern Initiator</p>
              </div>
            </div>
          </div>
        </section>
        <section className="if-sec if-tst">
          <div className="wrap reveal">
            <div className="if-head"><span className="if-eyebrow">From the men who walked it</span><h2>The day speaks for itself</h2></div>
            <div className="if-tgrid">
              <div className="if-t"><p>“I’ve worked alongside Kyle for years, in coaching training, as event collaborators, and as fellow practitioners. He brings formal education, lived experience, and a grounded, calming presence that people naturally feel safe around. What I respect most is that the life he helps others build is one he has actively built himself. He listens carefully, responds with sincerity, and has a particular gift for working with men searching for direction and purpose. If you want a coach with genuine care and real depth, talk to Kyle.”</p><span className="who">Kale B. · Coaching practitioner &amp; collaborator</span></div>
              <div className="if-t"><p>“I hadn’t been to a men’s group in months, and just like that I felt at home again: heard, supported, not alone. There’s nothing like connecting with brothers who are craving the inner work, and the space Kyle created was all of that and more. He held it gently but firmly, structured yet flowing. It was exactly what I needed at that moment. I’ll be at any future men’s group Kyle hosts.”</p><span className="who">Kyle H. · Men’s circle</span></div>
              <div className="if-t"><p>“I walked in not knowing anyone and immediately felt welcome, like I belonged. The amplified energy of men supporting men was palpable. I was reminded that we need each other, that it’s okay to be vulnerable, and that it feels really good to be heard. Kyle did an excellent job guiding us and holding the space. I left lighter than I came in, and I’ll definitely be at the next one.”</p><span className="who">Brien · Men’s circle</span></div>
              <div className="if-t"><p>“The men’s circle gave me a safe space to share what had been troubling me. Life throws a lot of obstacles at us, and they’re tough to carry alone. The breath of fire helped me release old trauma and stress I’d been holding in my body, and the meditation at the end was deeply relaxing. I left recentered and clearer than when I arrived. It’s a space I’ll keep coming back to.”</p><span className="who">Pierre · Men’s circle</span></div>
              <div className="if-t"><p>“Kyle’s men’s container was perfectly timed for me. The space he created let me connect more deeply with myself and with other brothers, while also bringing me into confrontation with the parts of myself I’d been avoiding. Through relational, physical, and spiritual practice, I was challenged, supported, and ultimately left with a deep sense of gratitude for my life and for the experience. Thank you, Kyle.”</p><span className="who">Markwell · Men’s circle</span></div>
              <div className="if-t"><p>“It had been a long time since I’d been in a room with men doing this kind of work, and I didn’t realize how much I’d been missing it until I sat down. Kyle held the space with real care and facilitated breathwork that moved something loose in me, and the conversations that followed went somewhere honest fast. I came in carrying weight I hadn’t named. I shared it, let some of it go, and walked out lighter.”</p><span className="who">David P. · Men’s circle</span></div>
            </div>
          </div>
        </section>
        <section className="if-sec">
          <div className="wrap reveal">
            <div className="if-head"><span className="if-eyebrow">The details</span><h2>What to know</h2></div>
            <div className="if-log">
              <div><div className="k">Format</div><div className="v">One full day, in person, around real fire</div></div>
              <div><div className="k">The circle</div><div className="v">A small group. It only works small</div></div>
              <div><div className="k">Bring</div><div className="v">Nothing but your honesty and your edges</div></div>
            </div>
          </div>
        </section>
        <section className="if-final">
          <div className="wrap reveal">
            <h2>Claim your seat at the <em>fire.</em></h2>
            <p>A small circle, one day, real fire. If you’re ready to stop circling and meet the edge, apply now.</p>
            <div className="seats">Seats are limited by design</div>
            <a href="https://api.leadconnectorhq.com/widget/bookings/30-minute-discovery-call-kw-initiations" className="btn btn-primary">Apply Today</a>
            <p className="q">“A man who can stand in fire. A man who keeps his word.”<br />Kyle Warren</p>
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
      
      <Script src="/js/iron-and-fire.js" strategy="afterInteractive" />
    </>
  );
}
