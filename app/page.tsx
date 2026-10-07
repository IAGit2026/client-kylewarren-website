import type { Metadata } from 'next';
import Script from 'next/script';
import '../styles/index.css';

export const metadata: Metadata = {
  "title": "Kyle Warren · Modern Initiator",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "url": "/",
    "type": "website"
  }
};

export default function IndexPage() {
  return (
    <>
      
        {/* NAV */}
        <header className="nav">
          <div className="nav-inner">
            <a className="brand" href="#top">
              <img src="/assets/img/img-0e8561ba06.png" alt="Kyle Warren flame mark" />
              <span className="wm"><span className="bn">KYLE WARREN</span><span className="bt">Modern Initiator</span></span>
            </a>
            <nav className="nav-links">
              <a href="#guide">About</a>
              <a href="#lineage">The Walk</a>
              <a href="/the-forge">The Forge</a>
              <a href="#offers">Offers</a>
              <a href="#proof">Stories</a>
              <a href="#" className="nav-audit" data-onclick="openFireAudit(event)">Take the Audit</a>
              <a href="#hearth" className="nav-cta">Join the brotherhood</a>
            </nav>
          </div>
        </header>
        {/* HERO */}
        <section className="hero" id="top">
          <div className="wrap hero-inner">
            <span className="eyebrow">Fire · Sovereignty · Brotherhood</span>
            <h1>Become a man who can <em>stand in fire.</em></h1>
            <p className="hero-sub">You've felt the slow numbing: the days that blur, the edges you keep avoiding, the man you know you're meant to be standing just out of reach. The Forge is where you close the gap.</p>
            <div className="hero-actions">
              <a href="#hearth" className="btn btn-primary">Join the brotherhood</a>
            </div>
            <div className="hero-tag">
              <div className="mark-rule"><span className="dot" /><span className="line" /><span className="ring" /><span className="line" /><span className="dot" /></div>
              <p className="q" style={{marginTop: 22}}>"Awakening the heart of man."</p>
            </div>
          </div>
        </section>
        <div className="mline" />
        {/* PROBLEM / STAKES */}
        <section className="section dark problem atmos">
          <div className="wrap reveal">
            <span className="eyebrow">The thing no one says out loud</span>
            <h2>Life has a way of bending a man's spine until he submits.</h2>
            <p className="lede">You're functional. Competent on the outside. And quietly, you've started to wonder if this flat, foggy, half-lived version is just what being a man becomes. It isn't.</p>
            <div className="pains">
              <div className="pain">
                <h3>The drift</h3>
                <p>Energy leaking everywhere. No clear priorities, weak follow-through, the same loops running you. Busy, but not moving.</p>
              </div>
              <div className="pain">
                <h3>The 3 a.m. voice</h3>
                <p>The shame you carry alone: "I should be further by now." Numbness dressed up as fine. Anxiety, stagnation, a self-respect that's quietly draining.</p>
              </div>
              <div className="pain">
                <h3>The isolation</h3>
                <p>Doing it all solo. No council, no witness, no men who'll tell you the truth and not flinch. A man was never built to forge alone.</p>
              </div>
            </div>
            <p className="turn">You don't need another hack or a louder morning routine. <b>You need to be forged.</b></p>
          </div>
        </section>
        {/* GUIDE / ABOUT KYLE */}
        <section className="section guide lit-elem glow-left" id="guide">
          <div className="wrap">
            <div className="guide-grid">
              <div className="portrait reveal">
                <img src="/assets/img/img-09c4ef5bb4.jpg" alt="Kyle Warren" />
                <div className="ptint" />
                <span className="cap">Kyle Warren · Modern Initiator</span>
              </div>
              <div className="reveal">
                <span className="eyebrow">Your guide</span>
                <h2>I've stood where you're standing.</h2>
                <p>I know the version of a man who looks like he has it together and feels, underneath, like he's leaking out. I've met my own blind spots, the places I was out of integrity, the ways I wasn't showing up for myself. I didn't read my way out. I was forged.</p>
                <p className="pull">"I've had to give up the little me, the ego, to reach deeper levels of containment. That's the work. Simple, not easy."</p>
                <p>Today I help men do the same: name what's true, build the daily architecture that holds them, meet their edges on purpose, and become men who lead. Not theory. Embodied. Around fire, among men, in the body. I'll take the work seriously and you lightly, and I won't let you do it alone.</p>
                <p className="sign">Kyle Warren, Modern Initiator</p>
              </div>
            </div>
          </div>
        </section>
        <div className="mline" />
        {/* LINEAGE / AUTHORITY */}
        <section className="section steel lineage atmos" id="lineage">
          <div className="wrap reveal">
            <div className="lineage-head">
              <span className="eyebrow">What forged the guide</span>
              <h2>This work was lived before it was taught.</h2>
              <p>Two decades of seeking, training and initiation across philosophy, the body and the breath, distilled into a way of holding men. The lineage behind the fire.</p>
            </div>
            <div className="lineage-grid">
              <div className="lstep">
                <span className="ln">I</span>
                <div>
                  <h4>The old questions</h4>
                  <p>A teenage pull toward ancient philosophy: Plato, Socrates, Aristotle. The first hunger to know how a man ought to live.</p>
                </div>
              </div>
              <div className="lstep">
                <span className="ln">II</span>
                <div>
                  <h4>The inward turn</h4>
                  <p>In his early twenties, the teachings of Eckhart Tolle opened the door to mindfulness, breathwork and meditation. Presence as a practice, not a concept.</p>
                </div>
              </div>
              <div className="lstep">
                <span className="ln">III</span>
                <div>
                  <h4>Initiation abroad</h4>
                  <p>At twenty-six, six weeks in a tent on the foothills of a Hare Krishna farm and temple in Australia, unofficially initiated, with a deep love for Bhakti yoga.</p>
                </div>
              </div>
              <div className="lstep">
                <span className="ln">IV</span>
                <div>
                  <h4>Ashram &amp; silence</h4>
                  <p>A month of karma yoga and asana at a Satyananda ashram, then a ten-day Vipassana silent retreat in the Blue Mountains. The discipline of staying.</p>
                </div>
              </div>
              <div className="lstep">
                <span className="ln">V</span>
                <div>
                  <h4>The energetic arts</h4>
                  <p>Level&nbsp;2 Reiki practitioner and qualified in Pangu Shengong qi gong, moving and non-moving forms, under Master Ou through Chris Bale.</p>
                </div>
              </div>
              <div className="lstep">
                <span className="ln">VI</span>
                <div>
                  <h4>Trained to guide</h4>
                  <p>Landmark Forum graduate and a certified professional coach through iPEC, supporting men on their growth since 2019, grounded by three years as a working train conductor.</p>
                </div>
              </div>
            </div>
            <div className="creds">
              <span>iPEC Certified Coach</span>
              <span>Guiding men since 2019</span>
              <span>Vipassana</span>
              <span>Ashram-trained</span>
              <span>Bhakti Yoga</span>
              <span>Landmark Graduate</span>
              <span>Reiki L2</span>
              <span>Pangu Shengong Qi Gong</span>
            </div>
          </div>
        </section>
        {/* PLAN */}
        <section className="section plan lit-elem">
          <div className="wrap reveal">
            <span className="eyebrow">The path is simple</span>
            <h2>Three steps to standing in fire</h2>
            <p className="sub">No fifty-point plan. A man with three clear moves walks faster than a man with fifty.</p>
            <div className="steps">
              <div className="step">
                <span className="num">01</span>
                <h3>Step into the fire</h3>
                <p>Start in the brotherhood, or step into an Iron and Fire day. Meet the work and the men. No leap of faith required. Just show up.</p>
              </div>
              <div className="step">
                <span className="num">02</span>
                <h3>Walk the four phases</h3>
                <p>Inside The Forge you move through Awareness, Foundation, Momentum and Lead. Sixteen weeks of disciplines that compound and a brotherhood that holds.</p>
              </div>
              <div className="step">
                <span className="num">03</span>
                <h3>Become the man who leads</h3>
                <p>Walk out sovereign and grounded, keeping your word, holding clean space, and creating a result that serves the men coming behind you.</p>
              </div>
            </div>
          </div>
        </section>
        {/* FIRE AUDIT */}
        <section className="section faband" id="fire-audit">
          <div className="wrap reveal">
            <span className="eyebrow">Free · 5 minutes</span>
            <h2>The Fire Audit</h2>
            <p className="lede">Most men cannot say where their fire actually goes. This gives you a number, and a map.</p>
            <p className="lede">Sixteen honest statements across the eight areas of your life. You get your Fire Score, the areas already burning, and the three asking for more intention and focus.</p>
            <div className="fapill">
              <span>16 statements</span><span>8 areas</span><span>About 5 minutes</span><span>Instant score</span>
            </div>
            <a href="#" className="btn btn-primary" data-onclick="openFireAudit(event)">Get my Fire Score</a>
            <p className="fanote">“A life of passion is built the same way a fire is. Attention, fuel, and air.”</p>
          </div>
        </section>
        <div className="mline" />
        <div className="coals-band" />
        {/* THE FORGE SEQUENCE */}
        <section className="section forge atmos" id="forge">
          <div className="forge-atmos" />
          <div className="spark-layer" />
          <div className="wrap">
            <div className="forge-head reveal">
              <span className="eyebrow">The flagship · 16 weeks</span>
              <h2>The Forge</h2>
              <p className="q">"The man who finishes is not the man who started."</p>
              <p className="forge-lead">Sixteen weeks of real initiation. Four phases, eight tools, a council of men and Kyle's direct hand on the work, moving you from naming what's true to leading from it. Not content to consume. A fire to walk through.</p>
            </div>
            <div className="phases reveal">
              <div className="phase-line fireline" />
              <div className="phase-list">
                <div className="phase">
                  <span className="pnum">I</span>
                  <div>
                    <span className="pname">Awareness</span>
                    <span className="pmonth">Month One</span>
                    <p className="pdesc">The audit. We don't fix anything yet. We name what is. The leaks, the lies, the loops, the vices. Awareness is the first fire; it burns nothing but illusion.</p>
                  </div>
                </div>
                <div className="phase">
                  <span className="pnum">II</span>
                  <div>
                    <span className="pname">Foundation</span>
                    <span className="pmonth">Month Two</span>
                    <p className="pdesc">The build. We lay the daily and weekly architecture that holds the man you're becoming. Disciplines, not perfection. A 90-day map you can actually walk.</p>
                  </div>
                </div>
                <div className="phase">
                  <span className="pnum">III</span>
                  <div>
                    <span className="pname">Momentum</span>
                    <span className="pmonth">Month Three</span>
                    <p className="pdesc">Where the work starts to carry you. We expand the pillars, meet the edges head-on, and gamify the line. A man in momentum doesn't need motivation.</p>
                  </div>
                </div>
                <div className="phase">
                  <span className="pnum">IV</span>
                  <div>
                    <span className="pname">Lead</span>
                    <span className="pmonth">Month Four</span>
                    <p className="pdesc">The turn outward. The work was never just for you. You create a result beyond yourself: in your family, your council, your mission. This is transmission.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="forge-incl reveal">
              <div className="fi"><div className="k">16</div><div className="v">weeks of guided initiation</div></div>
              <div className="fi"><div className="k">04</div><div className="v">phases that compound</div></div>
              <div className="fi"><div className="k">08</div><div className="v">tools, mastered by repetition</div></div>
              <div className="fi"><div className="k">01</div><div className="v">council of men beside you</div></div>
            </div>
          </div>
        </section>
        <div className="mline" />
        {/* QUALIFIER */}
        <section className="section steel qual atmos">
          <div className="wrap reveal">
            <span className="eyebrow">Before you step in</span>
            <h2>Is this your fire to walk?</h2>
            <p className="sub">The Forge isn't for everyone, and it isn't meant to be. Read both columns honestly.</p>
            <div className="q-grid">
              <div className="q-col yes">
                <span className="lbl">Step in if</span>
                <ul>
                  <li>You're functional on the outside but quietly know you're capable of far more</li>
                  <li>You're done with hacks and ready to be changed in your body, not just your head</li>
                  <li>You want men who'll tell you the truth and not flinch</li>
                  <li>You'll do the daily work between sessions, not just show up to talk</li>
                </ul>
              </div>
              <div className="q-col no">
                <span className="lbl">Not yet if</span>
                <ul>
                  <li>You're looking for a quick fix or one more motivational hit</li>
                  <li>You want to stay an observer and keep the work at arm's length</li>
                  <li>You're not willing to be witnessed by other men</li>
                  <li>Nothing in you is actually ready to change right now</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* OFFERS / VALUE LADDER */}
        <section className="section offers lit-elem" id="offers">
          <div className="wrap reveal">
            <span className="eyebrow">Choose your entry</span>
            <h2>Three ways to stand in the fire</h2>
            <p className="sub">Start where you are. Every door leads to the same forge.</p>
            <div className="ladder">
              {/* HEARTH */}
              <div className="card" id="hearth">
                <div className="top">
                  <span className="tier">Ongoing · Brotherhood</span>
                  <div className="oname">Forged: Men’s Group</div>
                </div>
                <div className="body">
                  <ul>
                    <li>A community of men doing the work, your first council</li>
                    <li>Weekly practices: breath, mantra, the honest check-in</li>
                    <li>Live fireside drops and Q&amp;A with Kyle</li>
                    <li>Take your place in the circle today</li>
                  </ul>
                  <a href="/the-hearth" className="btn btn-ghost">Join Now</a>
                </div>
              </div>
              {/* DAY RETREAT */}
              <div className="card">
                <div className="top">
                  <span className="tier">One day · In person</span>
                  <div className="oname">Iron and Fire</div>
                </div>
                <div className="body">
                  <ul>
                    <li>A single day around fire: cold, breath, movement, council</li>
                    <li>The honest mirror: name your leaks and your edges in one sitting</li>
                    <li>Walk out with a 90-day map and a brotherhood</li>
                    <li>A small circle, one fire. Apply to hold your seat</li>
                  </ul>
                  <a href="/iron-and-fire" className="btn btn-ghost">Apply Now</a>
                </div>
              </div>
              {/* THE FORGE */}
              <div className="card feature">
                <div className="ribbon">The full initiation</div>
                <div className="top">
                  <span className="tier">16 weeks · Flagship</span>
                  <div className="oname">The Forge</div>
                </div>
                <div className="body">
                  <ul>
                    <li>Four phases: Awareness, Foundation, Momentum, Lead</li>
                    <li>The eight tools, mastered by repetition across the program</li>
                    <li>Weekly intentions, activations and integration work</li>
                    <li>A council of men and Kyle's direct guidance throughout</li>
                  </ul>
                  <a href="/the-forge" className="btn btn-primary">Apply Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TESTIMONIALS */}
        <section className="section proof atmos" id="proof">
          <div className="proof-mtn" />
          <div className="wrap reveal">
            <span className="eyebrow">From the men who walked it</span>
            <h2>The work speaks for itself</h2>
            <div className="quotes">
              <div className="quote"><p>“I’ve worked alongside Kyle for years, in coaching training, as event collaborators, and as fellow practitioners. He brings formal education, lived experience, and a grounded, calming presence that people naturally feel safe around. What I respect most is that the life he helps others build is one he has actively built himself. He listens carefully, responds with sincerity, and has a particular gift for working with men searching for direction and purpose. If you want a coach with genuine care and real depth, talk to Kyle.”</p><span className="who">Kale B. · Coaching practitioner &amp; collaborator</span></div>
              <div className="quote"><p>“I hadn’t been to a men’s group in months, and just like that I felt at home again: heard, supported, not alone. There’s nothing like connecting with brothers who are craving the inner work, and the space Kyle created was all of that and more. He held it gently but firmly, structured yet flowing. It was exactly what I needed at that moment. I’ll be at any future men’s group Kyle hosts.”</p><span className="who">Kyle H. · Men’s circle</span></div>
              <div className="quote"><p>“I walked in not knowing anyone and immediately felt welcome, like I belonged. The amplified energy of men supporting men was palpable. I was reminded that we need each other, that it’s okay to be vulnerable, and that it feels really good to be heard. Kyle did an excellent job guiding us and holding the space. I left lighter than I came in, and I’ll definitely be at the next one.”</p><span className="who">Brien · Men’s circle</span></div>
              <div className="quote"><p>“The men’s circle gave me a safe space to share what had been troubling me. Life throws a lot of obstacles at us, and they’re tough to carry alone. The breath of fire helped me release old trauma and stress I’d been holding in my body, and the meditation at the end was deeply relaxing. I left recentered and clearer than when I arrived. It’s a space I’ll keep coming back to.”</p><span className="who">Pierre · Men’s circle</span></div>
              <div className="quote"><p>“Kyle’s men’s container was perfectly timed for me. The space he created let me connect more deeply with myself and with other brothers, while also bringing me into confrontation with the parts of myself I’d been avoiding. Through relational, physical, and spiritual practice, I was challenged, supported, and ultimately left with a deep sense of gratitude for my life and for the experience. Thank you, Kyle.”</p><span className="who">Markwell · Men’s circle</span></div>
              <div className="quote"><p>“It had been a long time since I’d been in a room with men doing this kind of work, and I didn’t realize how much I’d been missing it until I sat down. Kyle held the space with real care and facilitated breathwork that moved something loose in me, and the conversations that followed went somewhere honest fast. I came in carrying weight I hadn’t named. I shared it, let some of it go, and walked out lighter.”</p><span className="who">David P. · Men’s circle</span></div>
            </div>
          </div>
        </section>
        {/* TWO PATHS */}
        <section className="section paths">
          <div className="wrap reveal">
            <div className="paths-grid">
              <div className="path stay">
                <span className="lbl">Stay as you are</span>
                <h3>The slow cost of doing nothing</h3>
                <ul>
                  <li>Stagnation and regret, a life unlived</li>
                  <li>Energy that has nowhere to go turns to numbness</li>
                  <li>The same loops, the same vices, the same year repeated</li>
                  <li>Doing it alone, indefinitely</li>
                </ul>
              </div>
              <div className="divider" />
              <div className="path walk">
                <span className="lbl">Walk through the fire</span>
                <h3>The man waiting on the other side</h3>
                <ul>
                  <li>Clarity, boundaries, and a self you can rely on</li>
                  <li>Resilience and a real enthusiasm for living</li>
                  <li>Brotherhood, belonging, and clean clear space</li>
                  <li>The sovereign choice over how you spend your days</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="mline" />
        {/* FINAL CTA */}
        <section className="section final atmos">
          <div className="final-glow" />
          <div className="ember-field" />
          <div className="final-mtn" />
          <div className="wrap final-inner reveal">
            <img src="/assets/img/img-0e8561ba06.png" alt="" />
            <h2>Decide <em>now.</em></h2>
            <p>You have the capacity to be your best self right now. The path forward is real, and you don't walk it alone. Step in.</p>
            <div className="hero-actions">
              <a href="#hearth" className="btn btn-primary">Join the brotherhood</a>
            </div>
            <div className="final-audit">
              <span className="fa-k">Free · 5 minutes</span>
              <h3>Not sure where to start?</h3>
              <p>Take the Fire Audit. Sixteen honest statements across the eight areas of your life, and you walk away with your Fire Score, the areas already burning, and the three asking for more intention and focus.</p>
              <a href="#" className="btn btn-ghost on-dark" data-onclick="openFireAudit(event)">Take the Audit</a>
            </div>
            <p className="q">"A man who can stand in fire. A man who keeps his word."<br />Kyle Warren</p>
          </div>
        </section>
        {/* FOOTER */}
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
        {/* FIRE AUDIT POPUP */}
        <div className="fa-ov" id="faOverlay" role="dialog" aria-modal="true" aria-labelledby="faTitle">
          <div className="fa-modal">
            <button className="fa-x" data-onclick="closeFireAudit()" aria-label="Close">×</button>
            <img className="famark" src="/assets/img/img-0e8561ba06.png" alt="" />
            <span className="faeye">Free · 5 minutes</span>
            <h3 id="faTitle">Take the Fire Audit</h3>
            <p className="fap">Get your Fire Score across the eight areas of your life, and see which ones are asking for more intention and focus. Tell me where to send it.</p>
            <div className="fa-f">
              <label htmlFor="faName">First name</label>
              <input id="faName" type="text" placeholder="Your name" autoComplete="given-name" />
            </div>
            <div className="fa-f">
              <label htmlFor="faEmail">Email</label>
              <input id="faEmail" type="email" placeholder="you@email.com" autoComplete="email" />
            </div>
            <div className="fa-f">
              <label htmlFor="faPhone">Phone <span style={{color: 'var(--stone)', letterSpacing: '.1em'}}>(optional)</span></label>
              <input id="faPhone" type="tel" placeholder="(555) 555 5555" autoComplete="tel" />
            </div>
            <div className="fa-f">
              <label htmlFor="faHandle">Social handle <span style={{color: 'var(--stone)', letterSpacing: '.1em'}}>(optional)</span></label>
              <input id="faHandle" type="text" placeholder="@yourhandle" autoComplete="off" />
            </div>
            <div className="fa-err" id="faErr" />
            <button className="btn btn-primary" data-onclick="submitFireAudit()">Start the audit</button>
            <p className="fa-note">No spam. Your score and the occasional note from Kyle. Unsubscribe any time.</p>
            <button className="fa-skip" data-onclick="closeFireAudit()">Not right now</button>
          </div>
        </div>
      
      <Script src="/js/index.js" strategy="afterInteractive" />
    </>
  );
}
