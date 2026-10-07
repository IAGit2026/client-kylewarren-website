document.querySelectorAll('[data-onclick]').forEach(function(el){el.setAttribute('onclick',el.getAttribute('data-onclick'));});

/* =======================================================================
   THE FIRE AUDIT
   Leads: set FORM_ENDPOINT to your form handler (Formspree, ConvertKit,
   Kit, Mailchimp, Zapier catch hook, etc). Leave it blank and the audit
   still works, it just will not send the lead anywhere.
   ======================================================================= */
var FORM_ENDPOINT = "https://services.leadconnectorhq.com/hooks/f3luAybuQTM6j6gDRzty/webhook-trigger/486e9bdf-b3d7-4308-a501-b4855060d375"; // GHL Inbound Webhook (Fire Audit Lead Capture)

var AREAS = [
 { name:"Body & Vitality", label:"BODY",
   frame:"The body is the first thing you lead. Everything else runs through it.",
   q:["My body has the energy, strength, and sleep to meet my life, not just survive it.",
      "I train and fuel my body on purpose, not on whatever is left over."],
   gap:"Your body is running on fumes, and every other area is quietly paying the tax. Energy, clarity, presence and discipline all draw from this same well, and right now it is low. This is the base layer. Rebuild it and everything above it gets easier.",
   str:"Your body is a foundation, not a liability. The energy and discipline you have built here is the engine the rest of your life runs on.",
   focus:"Pick one non negotiable for the next thirty days. Same wake time, one real training session a day, or food you actually chose. One thing, held." },
 { name:"Purpose & Work", label:"PURPOSE",
   frame:"A man needs work that is his, not just a job that has him.",
   q:["My work is aligned with something I actually care about, not just a paycheck.",
      "I know what I am building and why it matters."],
   gap:"You are pouring yourself into something that is not yours. There is no fire in it, so it costs more than it gives back. A man without a mission he owns eventually goes numb, and that is the real risk here.",
   str:"You know what you are for. Your work has meaning behind it, and that clarity of mission is rarer than any skill. It pulls the rest of your life into line.",
   focus:"Write one sentence on what you are actually building and why it matters. Read it before you start work each morning until it either fires you up or forces a change." },
 { name:"Money & Provision", label:"MONEY",
   frame:"Money is not the point. But a man who cannot provide is not free.",
   q:["My finances are stable enough that money is not quietly running my decisions.",
      "I feel capable and grounded as a provider, not anxious or avoidant about it."],
   gap:"Money is quietly running you. The anxiety or avoidance here leaks into every other room: how you show up at home, the risks you will not take, the sleep you do not get. Sovereignty starts with not being owned.",
   str:"You have built ground under your feet. Money is not driving your decisions from the shadows, and that stability frees you to lead everywhere else.",
   focus:"Look at the real numbers this week, all of them, in one sitting. Avoidance is the expensive part. Clarity costs an hour." },
 { name:"Love & Intimacy", label:"LOVE",
   frame:"The way you love is the truest test of the man you have become.",
   q:["I am present, open, and honest in my intimate relationship, not guarded or checked out.",
      "The love in my life feels alive and chosen, not just familiar or dutiful."],
   gap:"You have gone quiet where it matters most. Guarded, checked out, or going through the motions, the intimacy has flattened. This is often the last place a man lets himself feel the cost, and the first place attention changes things.",
   str:"You show up in love with your chest open. Present, honest and chosen. That willingness to be seen up close is a mark of real strength, not softness.",
   focus:"Say the one true thing you have been holding back. Not a whole conversation, one sentence. Then stay in the room for what comes next." },
 { name:"Family & Home", label:"FAMILY",
   frame:"Home is where your character is either built or exposed.",
   q:["I am the man I want to be inside my own home, with my family and my closest people.",
      "My home life feels grounded and connected, not tense, distant, or on autopilot."],
   gap:"The man the world sees is not always the one your family gets. Home is where the gap between your image and your character shows, and right now there is tension, distance, or autopilot running the place that should be your ground.",
   str:"You are the same man at home as anywhere else. Grounded, present and connected. Your family gets your best, not your leftovers, and that integrity is the whole point.",
   focus:"Give one person at home twenty undistracted minutes a day, phone in another room. Presence is the only currency that works here." },
 { name:"Brotherhood", label:"BROTHERS",
   frame:"A man with no brothers is a man with no witnesses.",
   q:["I have men in my life who truly know me, challenge me, and will not flinch at the truth.",
      "I show up as a brother to other men, not just waiting for them to show up for me."],
   gap:"You are carrying it alone. No council, no witnesses, no men who can call you on your edges, and a man alone drifts without noticing. This is the loneliest gap most men will not admit to, and the fastest one to close.",
   str:"You do not stand alone. You are witnessed, challenged and held by real men, and you hold them back. That brotherhood is what keeps a man honest under pressure.",
   focus:"Call one man this week and tell him something true that you would normally keep to yourself. That is the whole move. Repeat monthly." },
 { name:"Inner Ground", label:"INNER GROUND",
   frame:"Underneath everything is the ground you stand on when no one is watching.",
   q:["There is space between my urge and my action. I do not get run by every impulse or emotion.",
      "I have an inner life, stillness, faith or practice, that steadies me when things get loud."],
   gap:"There is no still center yet. When pressure comes you get run by impulse, emotion and reaction, because there is nothing underneath holding you steady. Every other area shakes when this one is empty. This is the deepest work, and the most freeing.",
   str:"You have a floor beneath the noise. Space between impulse and action, and a practice that steadies you. That inner ground is what lets you stay sovereign when everything gets loud.",
   focus:"Ten minutes a day, same time, no phone. Breath, prayer, stillness, whatever is yours. The point is not the ten minutes, it is proving you can keep a promise to yourself." },
 { name:"Play & Freedom", label:"FREEDOM",
   frame:"A man who cannot play has forgotten why he is fighting.",
   q:["There is genuine aliveness, play, and adventure in my life, not just duty and grind.",
      "I make real space for what lights me up, without guilt."],
   gap:"You have traded aliveness for grind. All duty, no play, and a man who cannot feel joy eventually forgets what he is working for. It looks like the least important area. It is often the one holding the whole wheel back from turning.",
   str:"You still know how to be alive. Play, adventure, and the things that light you up are protected, and that is what keeps the discipline from curdling into grind.",
   focus:"Put one thing in the calendar this month purely because it excites you. No productive reason. Book it before you talk yourself out of it." }
];

var STEPS = [ [0,1], [2,3], [4,5], [6,7] ];
var STEP_LINE = [
  "Rate each line for how true it is, not how it should be. How it is.",
  "Keep going. The truth you skip is the area that stays cold.",
  "These are the ones most men flinch at. Stay honest.",
  "Last two, then you will see the whole picture."
];

var TIERS = [
  {min:80, word:"BLAZING",     read:"Your fire is lit and it shows. Most areas of your life are getting real intention, and the work now is depth rather than repair."},
  {min:62, word:"BURNING",     read:"There is real fire here, but it is uneven. One or two areas are running on far less than they deserve, and you feel the drag everywhere else."},
  {min:44, word:"SMOULDERING", read:"The fire is there and it is banked. Some areas are genuinely alive, others have been running on duty alone for a long time."},
  {min:0,  word:"EMBERS",      read:"Right now most of your life is running on obligation rather than fire. The honest news is that embers relight faster than most men expect."}
];

var answers = {};
var cur = 0;

function go(id){
  document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active')});
  document.getElementById(id).classList.add('active');
}
function startAudit(){ go('audit'); renderStep(); window.scrollTo(0,0); }

function renderStep(){
  var pair=STEPS[cur];
  document.getElementById('phaseNum').textContent="PART 0"+(cur+1);
  document.getElementById('phaseLine').textContent="“"+STEP_LINE[cur]+"”";
  document.getElementById('phaseSub').textContent="Two areas of your life. Four statements. Answer as you are today.";
  document.getElementById('tbCount').textContent="PART "+(cur+1)+" OF 4";
  document.getElementById('backBtn').style.visibility = cur===0 ? 'hidden':'visible';
  document.getElementById('nextBtn').textContent = cur===3 ? 'See my score' : 'Continue';

  var steps=document.querySelectorAll('#ascent .step');
  steps.forEach(function(s,i){ s.classList.remove('done','cur'); if(i<cur)s.classList.add('done'); if(i===cur)s.classList.add('cur'); });

  var html='';
  pair.forEach(function(ai){
    var a=AREAS[ai];
    html+='<div class="area-head"><div class="area-k">The Area</div><div class="area-name">'+a.name+'</div><div class="area-frame">“'+a.frame+'”</div></div>';
    a.q.forEach(function(text,si){
      var key=ai+'_'+si, sel=answers[key];
      html+='<div class="q tight"><div class="q-text">'+text+'</div><div class="scale">';
      for(var v=1;v<=5;v++){ html+='<button class="opt'+(sel===v?' sel':'')+'" onclick="pick('+ai+','+si+','+v+',this)">'+v+'</button>'; }
      html+='</div><div class="scale-labels"><span>Not me</span><span>Deeply true</span></div></div>';
    });
  });
  document.getElementById('qList').innerHTML=html;
  document.getElementById('nudge').classList.remove('show');
  window.scrollTo({top:0,behavior:'auto'});
}
function pick(ai,si,v,el){
  answers[ai+'_'+si]=v;
  el.parentNode.querySelectorAll('.opt').forEach(function(o){o.classList.remove('sel')});
  el.classList.add('sel');
  document.getElementById('nudge').classList.remove('show');
}
function stepComplete(){
  var pair=STEPS[cur];
  for(var j=0;j<pair.length;j++){ var ai=pair[j];
    for(var si=0;si<AREAS[ai].q.length;si++){ if(!answers[ai+'_'+si]) return false; } }
  return true;
}
function nextPhase(){
  if(!stepComplete()){ document.getElementById('nudge').classList.add('show'); return; }
  if(cur<3){ cur++; renderStep(); }
  else {
    var pre = prefill();
    if(pre.email && pre.name){
      window.__lead = {name:pre.name, email:pre.email, phone:pre.phone, handle:pre.handle};
      var fn=document.getElementById('fname'); if(fn) fn.value=pre.name;
      var em=document.getElementById('email'); if(em) em.value=pre.email;
      var ph=document.getElementById('phone'); if(ph) ph.value=pre.phone;
      var hd=document.getElementById('handle'); if(hd) hd.value=pre.handle;
      computeAndShow(pre.name);
    }
    else { go('gate'); window.scrollTo(0,0); }
  }
}
function prevPhase(){ if(cur>0){ cur--; renderStep(); } }

/* read name/email handed over from the landing page popup */
function prefill(){
  var p=new URLSearchParams(window.location.search);
  return { name:(p.get('name')||'').trim(), email:(p.get('email')||'').trim(), phone:(p.get('phone')||'').trim(), handle:(p.get('handle')||'').trim() };
}

function sendLead(data){
  if(!FORM_ENDPOINT) return;
  try{
    fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
  }catch(e){}
}

function reveal(){
  var name=document.getElementById('fname').value.trim();
  var email=document.getElementById('email').value.trim();
  var phone=document.getElementById('phone').value.trim();
  var handle=document.getElementById('handle').value.trim();
  var err=document.getElementById('gateErr');
  if(!name){ err.textContent="Enter your name to continue."; return; }
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ err.textContent="Enter a valid email to unlock your score."; return; }
  err.textContent="";
  window.__lead = {name:name, email:email, phone:phone, handle:handle};
  sendLead({source:"Fire Audit", event:"audit_started", name:name, email:email, phone:phone, handle:handle});
  computeAndShow(name);
}

/* ---------- wheel svg ---------- */
function buildWheel(scores, minI, maxI){
  var cx=180, cy=180, maxR=118, n=scores.length, i, ang, rad;
  function pt(idx, frac){ ang=-90+idx*(360/n); rad=ang*Math.PI/180; return [cx+Math.cos(rad)*maxR*frac, cy+Math.sin(rad)*maxR*frac]; }
  var svg='<svg id="wheelSvg" viewBox="0 0 360 360" role="img" aria-label="Your fire across eight areas">';
  [0.25,0.5,0.75,1].forEach(function(f){
    var pts=''; for(i=0;i<n;i++){ var p=pt(i,f); pts+=(i?' ':'')+p[0].toFixed(1)+','+p[1].toFixed(1); }
    svg+='<polygon points="'+pts+'" fill="none" stroke="rgba(155,123,62,'+(f===1?0.42:0.20)+')" stroke-width="1"/>';
  });
  for(i=0;i<n;i++){ var e=pt(i,1); svg+='<line x1="180" y1="180" x2="'+e[0].toFixed(1)+'" y2="'+e[1].toFixed(1)+'" stroke="rgba(155,123,62,.16)" stroke-width="1"/>'; }
  for(i=0;i<n;i++){
    ang=-90+i*(360/n); rad=ang*Math.PI/180;
    var lx=cx+Math.cos(rad)*(maxR+18), ly=cy+Math.sin(rad)*(maxR+18);
    var c=Math.cos(rad), anchor = c>0.3?'start':(c<-0.3?'end':'middle');
    var dy = Math.sin(rad)<-0.5? -4 : (Math.sin(rad)>0.5? 12 : 4);
    var col = i===minI?'#C9A668':(i===maxI?'#C9583E':'#9a9284');
    svg+='<text x="'+lx.toFixed(1)+'" y="'+(ly+dy).toFixed(1)+'" text-anchor="'+anchor+'" font-family="Cinzel,serif" font-weight="700" font-size="10.5" letter-spacing="1.4" fill="'+col+'">'+AREAS[i].label+'</text>';
    svg+='<text x="'+lx.toFixed(1)+'" y="'+(ly+dy+13).toFixed(1)+'" text-anchor="'+anchor+'" font-family="Cinzel,serif" font-weight="600" font-size="9" fill="#857E70">'+scores[i]+'%</text>';
  }
  var dpts='';
  for(i=0;i<n;i++){ var d=pt(i,scores[i]/100); dpts+=(i?' ':'')+d[0].toFixed(1)+','+d[1].toFixed(1); }
  svg+='<g class="wheel-data">';
  svg+='<polygon points="'+dpts+'" fill="rgba(201,88,62,.26)" stroke="#C9583E" stroke-width="2" stroke-linejoin="round"/>';
  for(i=0;i<n;i++){ var d2=pt(i,scores[i]/100);
    if(i===minI){ svg+='<circle cx="'+d2[0].toFixed(1)+'" cy="'+d2[1].toFixed(1)+'" r="6" fill="#9B7B3E" stroke="#F2EBDC" stroke-width="1.5"/>'; }
    else if(i===maxI){ svg+='<circle cx="'+d2[0].toFixed(1)+'" cy="'+d2[1].toFixed(1)+'" r="6" fill="#C9583E" stroke="#F2EBDC" stroke-width="1.5"/>'; }
    else { svg+='<circle cx="'+d2[0].toFixed(1)+'" cy="'+d2[1].toFixed(1)+'" r="3.4" fill="#C9583E"/>'; }
  }
  svg+='</g></svg>';
  return svg;
}

function computeAndShow(name){
  var scores=AREAS.map(function(a,ai){
    var sum=0; a.q.forEach(function(_,si){ sum+=answers[ai+'_'+si]||0; });
    return Math.round((sum/(a.q.length*5))*100);
  });
  var overall=Math.round(scores.reduce(function(x,y){return x+y},0)/scores.length);
  var tier=TIERS.find(function(t){return overall>=t.min;});

  document.getElementById('greet').textContent="Here is your fire, "+name+".";
  document.getElementById('tierWord').textContent=tier.word;
  document.getElementById('tierRead').textContent="“"+tier.read+"”";

  var minI=0,maxI=0;
  scores.forEach(function(s,i){ if(s<scores[minI])minI=i; if(s>scores[maxI])maxI=i; });
  if(minI===maxI){ maxI = (minI===0?1:0); }

  document.getElementById('wheelHost').innerHTML=buildWheel(scores,minI,maxI);
  document.getElementById('strName').textContent=AREAS[maxI].name+"  ·  "+scores[maxI]+"%";
  document.getElementById('strBody').textContent=AREAS[maxI].str;
  document.getElementById('gapName').textContent=AREAS[minI].name+"  ·  "+scores[minI]+"%";
  document.getElementById('gapBody').textContent=AREAS[minI].gap;

  /* three lowest areas, each with one concrete thing to focus on */
  var order=scores.map(function(s,i){return {i:i,s:s}}).sort(function(a,b){return a.s-b.s}).slice(0,3);
  var fh='';
  order.forEach(function(o,rank){
    var a=AREAS[o.i];
    fh+='<li class="focus-item"><div class="focus-rank">FOCUS 0'+(rank+1)+'</div>'+
        '<div class="focus-name">'+a.name+' <em>'+o.s+'%</em></div>'+
        '<div class="focus-do"><b>Put your intention here</b>'+a.focus+'</div></li>';
  });
  document.getElementById('focusList').innerHTML=fh;

  /* fire audit_completed with the full score payload for the CRM/email merge fields */
  var lead = window.__lead || {};
  var gv=function(id){ var el=document.getElementById(id); return el?el.value.trim():''; };
  sendLead({
    source:"Fire Audit",
    event:"audit_completed",
    name: lead.name || name || gv('fname'),
    email: lead.email || gv('email'),
    phone: lead.phone || gv('phone'),
    handle: lead.handle || gv('handle'),
    fire_score: overall,
    fire_tier: tier.word,
    fire_tier_reading: tier.read,
    top_area: AREAS[maxI].name,
    top_score: scores[maxI],
    low_area: AREAS[minI].name,
    low_score: scores[minI],
    results_link: "https://kwinitiations.com/fire-audit.html"
  });

  go('results'); window.scrollTo(0,0);
  var big=document.getElementById('scoreBig'), n2=0;
  var iv=setInterval(function(){ n2+=Math.max(1,Math.round(overall/28)); if(n2>=overall){n2=overall;clearInterval(iv);} big.innerHTML=n2+'<span>%</span>'; },28);
  setTimeout(function(){ var sv=document.getElementById('wheelSvg'); if(sv) sv.classList.add('in'); },260);
}

function restart(){
  answers={}; cur=0;
  document.getElementById('fname').value=''; document.getElementById('email').value=''; document.getElementById('phone').value=''; document.getElementById('handle').value='';
  go('hero'); window.scrollTo(0,0);
}

/* if the landing page popup already captured them, skip straight in */
(function(){
  var p=prefill();
  if(p.name && p.email){
    document.getElementById('fname').value=p.name;
    document.getElementById('email').value=p.email;
    document.getElementById('phone').value=p.phone;
    document.getElementById('handle').value=p.handle;
    window.__lead = {name:p.name, email:p.email, phone:p.phone, handle:p.handle};
    startAudit();
  }
})();
