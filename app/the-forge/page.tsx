import type { Metadata } from 'next';
import Script from 'next/script';
import '../../styles/the-forge.css';

export const metadata: Metadata = {
  "title": "The Forge | Kyle Warren",
  "alternates": {
    "canonical": "/the-forge"
  },
  "openGraph": {
    "url": "/the-forge",
    "type": "website"
  }
};

export default function TheForgePage() {
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
              <a href="mailto:info@kwinitiations.com?subject=The%20Forge%20Application" className="nav-cta">Apply Now</a>
            </nav>
          </div>
        </header>
        <section className="fg-hero">
          <div className="wrap inner">
            <span className="fg-badge">16 weeks · The full initiation</span>
            <h1>Become the man who can <em>stand in fire.</em></h1>
            <p className="fg-sub">The Forge is a sixteen-week initiation: four phases, eight tools, one brotherhood. Awareness, Foundation, Momentum, Lead. This is not self-improvement. It is a forge. The man who finishes is not the man who started.</p>
            <div className="fg-cta">
              <a href="mailto:info@kwinitiations.com?subject=The%20Forge%20Application" className="btn btn-primary">Apply Now</a>
              <a href="#phases" className="btn btn-ghost on-dark">See the four phases</a>
            </div>
            <p className="fg-tag">“The man who finishes is not the man who started.”</p>
          </div>
        </section>
        <section className="fg-sec">
          <div className="wrap reveal">
            <div className="fg-head"><span className="fg-eyebrow">What this is</span>
              <h2>Not a program. A forge.</h2>
              <p>The work is simple, not easy. The disciplines compound. The brotherhood holds. The fire reveals. What you bring to it matters more than what you read.</p>
            </div>
            <div className="fg-pts">
              <div className="fg-pt"><div className="n">16</div><h3>Weeks</h3><p>Four phases of one month each, long enough for insight to become architecture, and architecture to become a life.</p></div>
              <div className="fg-pt"><div className="n">8</div><h3>Tools</h3><p>Mastered by repetition, not novelty. The same breath that stops reactivity in week one regulates other men by week sixteen.</p></div>
              <div className="fg-pt"><div className="n">1</div><h3>Brotherhood</h3><p>A council that witnesses you, challenges you, and holds the line when your own structure cracks.</p></div>
            </div>
          </div>
        </section>
        <section className="fg-sec fg-alt">
          <div className="wrap reveal">
            <div className="fg-head"><span className="fg-eyebrow">Why sixteen weeks</span>
              <h2>A weekend high fades. A forged man doesn’t.</h2>
              <p>Real change isn’t a breakthrough. It’s architecture. Anything shorter is a spark that goes out.</p>
            </div>
            <div className="fg-pts">
              <div className="fg-pt"><div className="n">01</div><h3>The reset loop</h3><p>You break through, then slide back. Without daily structure, insight leaks out the bottom within weeks.</p></div>
              <div className="fg-pt"><div className="n">02</div><h3>Unmet edges</h3><p>Growth lives at the edge you keep avoiding. Alone, you negotiate your way out of it every time.</p></div>
              <div className="fg-pt"><div className="n">03</div><h3>No transmission</h3><p>The work stays about you. A sovereign man builds a result beyond himself: family, brotherhood, mission.</p></div>
            </div>
          </div>
        </section>
        <section className="fg-sec" id="phases">
          <div className="wrap reveal">
            <div className="fg-head"><span className="fg-eyebrow">The journey</span><h2>Four phases of fire</h2>
              <p>Each week inside a phase holds three movements: an intention, an activation, and integration.</p></div>
            <div className="fg-phase"><div className="fg-num">I</div><div><span className="fg-pmonth">Month One</span><div className="fg-pname">Awareness</div><p className="fg-pq">“Before a man can stand, he has to see where he’s standing.”</p><p className="d">The audit. We don’t fix anything yet. We name what is. The leaks, the lies, the loops, the vices. Awareness is the first fire; it burns nothing but illusion.</p></div></div><div className="fg-phase"><div className="fg-num">II</div><div><span className="fg-pmonth">Month Two</span><div className="fg-pname">Foundation</div><p className="fg-pq">“What you do daily is what you become.”</p><p className="d">The build. We lay the daily and weekly architecture that holds the man you’re becoming. Disciplines, not perfection. Calendar, not chaos. A 90-day map you can actually walk.</p></div></div><div className="fg-phase"><div className="fg-num">III</div><div><span className="fg-pmonth">Month Three</span><div className="fg-pname">Momentum</div><p className="fg-pq">“Momentum is what discipline becomes when you stop negotiating with it.”</p><p className="d">Where the work starts to carry you. The disciplines become habit, the edges get met on purpose, and resistance stops running the show.</p></div></div><div className="fg-phase"><div className="fg-num">IV</div><div><span className="fg-pmonth">Month Four</span><div className="fg-pname">Lead</div><p className="fg-pq">“A man who has done the work owes the work to the men coming behind him.”</p><p className="d">The turn outward. What you’ve become must serve something larger: family, brotherhood, mission. This phase is transmission.</p></div></div>
            <div className="fg-cta-row reveal"><p className="sub">Four phases. Sixteen weeks. One man on the other side.</p><a href="mailto:info@kwinitiations.com?subject=The%20Forge%20Application" className="btn btn-primary">Apply Now</a></div>
          </div>
        </section>
        <section className="fg-sec fg-alt">
          <div className="wrap reveal">
            <div className="fg-head"><span className="fg-eyebrow">The instrument</span><h2>Eight tools, one mastery</h2>
              <p>The same eight tools run through all four phases. They don’t change. Their function does. You master them by repetition, not novelty.</p></div>
            <div className="fg-tools">
              <div className="fg-tool"><div className="tn"><span className="tnum">I</span><h3>Breath</h3></div><p className="td">Conscious breathing (box breath, breath of fire, and the long exhale), practised daily and used on demand.</p><div className="tb"><b>The benefit</b>You stop reacting. Breath is the fastest lever you have on your own nervous system: it interrupts anger, anxiety and shutdown in under two minutes. By week sixteen you can steady a room, not just yourself.</div><div className="tarc">Stop reactivity → Anchor daily → Amplify energy → Regulate others</div></div>
              <div className="fg-tool"><div className="tn"><span className="tnum">II</span><h3>Mantra</h3></div><p className="td">One chosen line, repeated until it outruns the old one running underneath it.</p><div className="tb"><b>The benefit</b>The loop that has been narrating your life gets replaced with something you chose. Under pressure you fall back on a default that serves you instead of one that sabotages you, and other men feel the clarity in how you speak.</div><div className="tarc">Interrupt the old loop → Rewire belief → Focus intention → Transmit clarity</div></div>
              <div className="fg-tool"><div className="tn"><span className="tnum">III</span><h3>Meditation</h3></div><p className="td">A daily seat. Witnessing thought without obeying it. Short, consistent, and unglamorous.</p><div className="tb"><b>The benefit</b>Space opens between the trigger and the response. You stop being your thoughts, build the consistency everything else compounds on, and gain the capacity to hold complexity without flinching.</div><div className="tarc">Witness thoughts → Build consistency → Expand awareness → Hold complexity</div></div>
              <div className="fg-tool"><div className="tn"><span className="tnum">IV</span><h3>Somatics</h3></div><p className="td">Working directly with what the body is holding: shaking, tension release, and felt-sense inquiry.</p><div className="tb"><b>The benefit</b>The stress and old trauma stored in your body finally moves out of it. You regulate faster, feel more, and stay present under pressure instead of numbing out or bracing through it.</div><div className="tarc">Release stored trauma → Regulate the system → Embodied power → Presence under pressure</div></div>
              <div className="fg-tool"><div className="tn"><span className="tnum">V</span><h3>Visualization</h3></div><p className="td">Deliberate rehearsal of the man you are becoming and the moves he actually makes.</p><div className="tb"><b>The benefit</b>You stop drifting toward whatever happens. The path gets specific, hard conversations get pre-paved, and you start leading from a vision instead of reacting to circumstance.</div><div className="tarc">See the possible self → Clarify the path → Pre-pave outcomes → Lead with vision</div></div>
              <div className="fg-tool"><div className="tn"><span className="tnum">VI</span><h3>Gratitude</h3></div><p className="td">A daily, specific practice, named out loud or on the page. Not a vague good feeling.</p><div className="tb"><b>The benefit</b>It stabilises the foundation on the hard days and fuels momentum on the good ones. Gratitude is what keeps a disciplined man from quietly becoming a bitter one.</div><div className="tarc">Stabilize foundation → Fuel momentum → Sustain service</div></div>
              <div className="fg-tool"><div className="tn"><span className="tnum">VII</span><h3>Prayer</h3></div><p className="td">Whatever surrender looks like for you: asking, offering, listening. No dogma required.</p><div className="tb"><b>The benefit</b>You stop white-knuckling everything. Control loosens its grip, purpose sharpens, and you carry a steadiness that doesn’t depend on things going your way.</div><div className="tarc">Surrender control → Align with purpose → Transmit intention</div></div>
              <div className="fg-tool"><div className="tn"><span className="tnum">VIII</span><h3>Body</h3></div><p className="td">Strength, cold, movement, sleep and food treated as practice rather than vanity.</p><div className="tb"><b>The benefit</b>Numbness breaks. You build real physical capacity and a sense of safety in your own frame, and you carry an authority men feel before you say a word.</div><div className="tarc">Interrupt numbness → Build safety → Express strength → Embody authority</div></div>
            </div>
            <div className="fg-cta-row reveal"><p className="sub">Eight tools you will actually own by week sixteen.</p><a href="mailto:info@kwinitiations.com?subject=The%20Forge%20Application" className="btn btn-primary">Apply Now</a></div>
          </div>
        </section>
        <section className="fg-sec">
          <div className="wrap reveal">
            <div className="fg-head"><span className="fg-eyebrow">The weekly rhythm</span><h2>How each week moves</h2></div>
            <div className="fg-triad">
              <div><div className="k">Intention</div><h4>Anchor the theory</h4><p>The teaching for the week: the frame that reorders how you see and stand.</p></div>
              <div><div className="k">Activation</div><h4>Put it in the body</h4><p>The exercise. Cold, breath, movement, audit, map: the work that makes it real.</p></div>
              <div><div className="k">Integration</div><h4>Take it to the mirror</h4><p>Journal reflections that turn the week into self-knowledge you can’t un-see.</p></div>
            </div>
          </div>
        </section>
        <section className="fg-sec fg-alt">
          <div className="wrap reveal">
            <div className="fg-head"><span className="fg-eyebrow">The container</span><h2>What’s included</h2></div>
            <ul className="fg-incl">
              <li><b>Four phases, sixteen weeks</b>Awareness, Foundation, Momentum, and Lead. A full arc of initiation.</li>
              <li><b>The eight tools</b>Breath, mantra, meditation, somatics, visualization, gratitude, prayer, body.</li>
              <li><b>Weekly intentions &amp; activations</b>A teaching and an embodied exercise every week. Theory in the body.</li>
              <li><b>Integration work</b>Journal reflections that turn the work into lasting self-knowledge.</li>
              <li><b>A council of men</b>Brotherhood that witnesses you, challenges you, and holds the line.</li>
              <li><b>Kyle’s direct guidance</b>Steady, grounded, and honest, throughout the full sixteen weeks.</li>
              <li><b>The 90-day map</b>A concrete plan of disciplines you actually walk, not a wish list.</li>
              <li><b>The vow</b>You close the forge with a line you draw and refuse to cross.</li>
            </ul>
            <div className="fg-cta-row reveal"><p className="sub">Everything above, for one cohort of men at a time.</p><a href="mailto:info@kwinitiations.com?subject=The%20Forge%20Application" className="btn btn-primary">Apply Now</a></div>
          </div>
        </section>
        <section className="fg-sec">
          <div className="wrap reveal">
            <div className="fg-head"><span className="fg-eyebrow">Readiness</span><h2>Who The Forge is for</h2>
              <p>This only works with the right men in the room. Be honest with yourself.</p></div>
            <ul className="fg-ready">
              <li>You’re successful on paper and know you’re built for more</li>
              <li>You’re done with breakthroughs that fade by Monday</li>
              <li>You’ll keep your word to yourself, even when no one is watching</li>
              <li>You’re willing to meet the edge you’ve been avoiding</li>
              <li>You want to be forged, not entertained</li>
            </ul>
            <div className="fg-cta-row reveal"><p className="sub">If you read that list and something in you said yes, apply.</p><a href="mailto:info@kwinitiations.com?subject=The%20Forge%20Application" className="btn btn-primary">Apply Now</a></div>
          </div>
        </section>
        <section className="fg-vow">
          <div className="wrap inner reveal">
            <span className="fg-eyebrow">The vow · week sixteen</span>
            <p className="q">“I am a man who can stand in fire. A man who sees God in everything. A man who keeps his word. Clear boundaries. Holds clean, clear space. Resolved within himself. Always looking for his next edge.”</p>
            <p className="by">The Forge closes with your vow</p>
            <div className="fg-cta-row reveal"><p className="sub">Sixteen weeks from now, that could be your vow.</p><a href="mailto:info@kwinitiations.com?subject=The%20Forge%20Application" className="btn btn-primary">Apply Now</a></div>
          </div>
        </section>
        <section className="fg-sec">
          <div className="wrap reveal">
            <div className="fg-guide">
              <div className="fg-portrait"><img src="/assets/img/img-45ab42d94e.jpg" alt="Kyle Warren" /></div>
              <div>
                <span className="fg-eyebrow">Your guide</span>
                <h2>I’ve stood where you’re standing.</h2>
                <p>I know the man who looks like he has it together and feels, underneath, like he’s leaking out. I met my own blind spots, the places I was out of integrity, the ways I wasn’t showing up for myself. I didn’t read my way out. I was forged.</p>
                <p className="pull">“I’ve had to give up the little me, the ego, to reach deeper levels of containment. That’s the work. Simple, not easy.”</p>
                <p>Today I help men do the same: name what’s true, build the architecture that holds them, meet their edges, and become men who lead. Embodied. Around fire, among men. I won’t let you do it alone.</p>
                <p className="sign">Kyle Warren, Modern Initiator</p>
              </div>
            </div>
          </div>
        </section>
        <section className="fg-sec fg-alt">
          <div className="wrap reveal">
            <div className="fg-head"><span className="fg-eyebrow">From the men who walked it</span><h2>The work speaks for itself</h2></div>
            <div className="fg-tgrid">
              <div className="fg-t"><p>“I’ve worked alongside Kyle for years, in coaching training, as event collaborators, and as fellow practitioners. He brings formal education, lived experience, and a grounded, calming presence that people naturally feel safe around. What I respect most is that the life he helps others build is one he has actively built himself. He listens carefully, responds with sincerity, and has a particular gift for working with men searching for direction and purpose. If you want a coach with genuine care and real depth, talk to Kyle.”</p><span className="who">Kale B. · Coaching practitioner &amp; collaborator</span></div>
              <div className="fg-t"><p>“I hadn’t been to a men’s group in months, and just like that I felt at home again: heard, supported, not alone. There’s nothing like connecting with brothers who are craving the inner work, and the space Kyle created was all of that and more. He held it gently but firmly, structured yet flowing. It was exactly what I needed at that moment. I’ll be at any future men’s group Kyle hosts.”</p><span className="who">Kyle H. · Men’s circle</span></div>
              <div className="fg-t"><p>“I walked in not knowing anyone and immediately felt welcome, like I belonged. The amplified energy of men supporting men was palpable. I was reminded that we need each other, that it’s okay to be vulnerable, and that it feels really good to be heard. Kyle did an excellent job guiding us and holding the space. I left lighter than I came in, and I’ll definitely be at the next one.”</p><span className="who">Brien · Men’s circle</span></div>
              <div className="fg-t"><p>“The men’s circle gave me a safe space to share what had been troubling me. Life throws a lot of obstacles at us, and they’re tough to carry alone. The breath of fire helped me release old trauma and stress I’d been holding in my body, and the meditation at the end was deeply relaxing. I left recentered and clearer than when I arrived. It’s a space I’ll keep coming back to.”</p><span className="who">Pierre · Men’s circle</span></div>
              <div className="fg-t"><p>“Kyle’s men’s container was perfectly timed for me. The space he created let me connect more deeply with myself and with other brothers, while also bringing me into confrontation with the parts of myself I’d been avoiding. Through relational, physical, and spiritual practice, I was challenged, supported, and ultimately left with a deep sense of gratitude for my life and for the experience. Thank you, Kyle.”</p><span className="who">Markwell · Men’s circle</span></div>
              <div className="fg-t"><p>“It had been a long time since I’d been in a room with men doing this kind of work, and I didn’t realize how much I’d been missing it until I sat down. Kyle held the space with real care and facilitated breathwork that moved something loose in me, and the conversations that followed went somewhere honest fast. I came in carrying weight I hadn’t named. I shared it, let some of it go, and walked out lighter.”</p><span className="who">David P. · Men’s circle</span></div>
            </div>
          </div>
        </section>
        <section className="fg-sec">
          <div className="wrap reveal">
            <div className="fg-head"><span className="fg-eyebrow">Before you apply</span><h2>Honest answers</h2></div>
            <div className="fg-q"><h4>Why is it an application, not a checkout?</h4><p>The Forge only works with the right men in the room. A short application and a conversation with Kyle make sure it’s the right fire for you, and you for it.</p></div>
            <div className="fg-q"><h4>How much time does it take each week?</h4><p>Enough to change you, not enough to break your life. An intention to read, an activation to do, and integration to journal. The disciplines are built to compound, not overwhelm.</p></div>
            <div className="fg-q"><h4>What if I’m not sure I’m ready?</h4><p>Start with Forged: Men’s Group or a day of Iron and Fire. Meet the work and the men first. The Forge will still be here when the fire has caught.</p></div>
            <div className="fg-q"><h4>Is this therapy?</h4><p>No. It’s initiation: embodied, disciplined, and led. Kyle is a coach and guide, not a therapist, and The Forge is not a substitute for mental-health care.</p></div>
            <div className="fg-cta-row reveal"><p className="sub">Still reading? That’s usually the answer.</p><a href="mailto:info@kwinitiations.com?subject=The%20Forge%20Application" className="btn btn-primary">Apply Now</a></div>
          </div>
        </section>
        <section className="fg-final">
          <div className="wrap reveal">
            <h2>Step into <em>The Forge.</em></h2>
            <p>Sixteen weeks. The hardest, truest work you’ll do, and you won’t do it alone. If you’re ready to be forged, apply today.</p>
            <a href="mailto:info@kwinitiations.com?subject=The%20Forge%20Application" className="btn btn-primary">Apply Now</a>
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
      
      <Script src="/js/the-forge.js" strategy="afterInteractive" />
    </>
  );
}
