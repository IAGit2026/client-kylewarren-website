document.querySelectorAll('[data-onclick]').forEach(function(el){el.setAttribute('onclick',el.getAttribute('data-onclick'));});


/* ---- CONFIG: replace with Kyle's real booking link ---- */
var BOOKING_URL = "https://calendly.com/your-link"; // TODO: set this

/* 3 qualifying questions, asked BEFORE the wheel. Single-select.
   qualAnswers[i] holds the chosen option text — send these to your CRM
   alongside name/email so you know the fit before the call. */
var QUALIFIERS = [
  { q:"When you already know something in your life needs to change, what usually happens?",
    opts:[
      "I move on it \u2014 I don\u2019t sit in it long",
      "I start strong, then stall out",
      "I know exactly what it is, and I avoid it",
      "I\u2019ve been circling the same thing for years" ] },
  { q:"Which is closest to where you actually stand right now?",
    opts:[
      "Successful on paper, hollow underneath",
      "Stuck or plateaued \u2014 I can\u2019t break through",
      "In a hard season \u2014 burnout, loss, a marriage on the edge",
      "Doing fine, but I know I\u2019m built for more" ] },
  { q:"If the right guide and the right work were in front of you, are you ready to commit?",
    opts:[
      "Yes \u2014 I\u2019m done waiting",
      "Yes, if it\u2019s the right fit for me",
      "I\u2019m exploring, not decided yet",
      "Honestly, not sure I have the space right now" ] }
];

/* The Wheel of Life \u2014 8 areas, each with 2 statements (rated 1\u20135).
   Grouped into 4 steps of 2 areas for pacing. */
var AREAS = [
 { name:"Body & Vitality", label:"BODY",
   frame:"The body is the first thing you lead. Everything else runs through it.",
   q:["My body has the energy, strength, and sleep to meet my life \u2014 not just survive it.",
      "I train and fuel my body on purpose, not on whatever\u2019s left over."],
   gap:"Your body is running on fumes, and every other area is quietly paying the tax. Energy, clarity, presence, discipline \u2014 they all draw from this same well, and right now it\u2019s low. This is the base layer. Rebuild it and everything above it gets easier.",
   str:"Your body is a foundation, not a liability. The energy and discipline you\u2019ve built here is the engine the rest of your life runs on." },
 { name:"Purpose & Work", label:"PURPOSE",
   frame:"A man needs work that\u2019s his \u2014 not just a job that has him.",
   q:["My work is aligned with something I actually care about, not just a paycheck.",
      "I know what I\u2019m building and why it matters."],
   gap:"You\u2019re pouring yourself into something that isn\u2019t yours. There\u2019s no fire in it, so it costs more than it gives back. A man without a mission he owns eventually goes numb \u2014 that\u2019s the real risk here.",
   str:"You know what you\u2019re for. Your work has meaning behind it, and that clarity of mission is rarer than any skill \u2014 it pulls the rest of your life into line." },
 { name:"Money & Provision", label:"MONEY",
   frame:"Money isn\u2019t the point. But a man who can\u2019t provide isn\u2019t free.",
   q:["My finances are stable enough that money isn\u2019t quietly running my decisions.",
      "I feel capable and grounded as a provider, not anxious or avoidant about it."],
   gap:"Money is quietly running you. The anxiety or avoidance here leaks into every other room \u2014 how you show up at home, the risks you won\u2019t take, the sleep you don\u2019t get. Sovereignty starts with not being owned, and right now money owns a piece of you.",
   str:"You\u2019ve built ground under your feet. Money isn\u2019t driving your decisions from the shadows \u2014 and that stability frees you to lead everywhere else." },
 { name:"Love & Intimacy", label:"LOVE",
   frame:"The way you love is the truest test of the man you\u2019ve become.",
   q:["I\u2019m present, open, and honest in my intimate relationship \u2014 not guarded or checked out.",
      "The love in my life feels alive and chosen, not just familiar or dutiful."],
   gap:"You\u2019ve gone quiet where it matters most. Guarded, checked out, or just going through the motions \u2014 the intimacy has flattened. This is often the last place a man lets himself feel the cost, and the first place the work needs to land.",
   str:"You show up in love with your chest open. Present, honest, chosen \u2014 that willingness to be seen up close is a mark of real strength, not softness." },
 { name:"Family & Home", label:"FAMILY",
   frame:"Home is where your character is either built or exposed.",
   q:["I\u2019m the man I want to be inside my own home \u2014 with my family, my kids, my closest people.",
      "My home life feels grounded and connected, not tense, distant, or on autopilot."],
   gap:"The man the world sees isn\u2019t always the one your family gets. Home is where the gap between your image and your character shows \u2014 and right now there\u2019s tension, distance, or autopilot running the place that should be your ground.",
   str:"You\u2019re the same man at home as anywhere else. Grounded, present, connected \u2014 your family gets your best, not your leftovers. That integrity is the whole point." },
 { name:"Brotherhood", label:"BROTHERS",
   frame:"A man with no brothers is a man with no witnesses.",
   q:["I have men in my life who truly know me, challenge me, and won\u2019t flinch at the truth.",
      "I show up as a brother to other men \u2014 not just waiting for them to show up for me."],
   gap:"You\u2019re carrying it alone. No council, no witnesses, no men who can call you on your edges \u2014 and a man alone drifts without noticing. This is the loneliest gap most men won\u2019t admit to, and the one brotherhood exists to close.",
   str:"You don\u2019t stand alone. You\u2019re witnessed, challenged, and held by real men \u2014 and you hold them back. That brotherhood is what keeps a man honest under pressure." },
 { name:"Inner Ground", label:"INNER GROUND",
   frame:"Underneath everything is the ground you stand on when no one\u2019s watching.",
   q:["There\u2019s space between my urge and my action \u2014 I don\u2019t get run by every impulse or emotion.",
      "I have an inner life \u2014 stillness, faith, or practice \u2014 that steadies me when things get loud."],
   gap:"There\u2019s no still center yet. When pressure comes, you get run \u2014 by impulse, emotion, reaction \u2014 because there\u2019s nothing underneath holding you steady. Every other area shakes when this one is empty. This is the deepest work, and the most freeing.",
   str:"You have a floor beneath the noise. Space between impulse and action, a practice that steadies you \u2014 that inner ground is what lets you stay sovereign when everything gets loud." },
 { name:"Play & Freedom", label:"FREEDOM",
   frame:"A man who can\u2019t play has forgotten why he\u2019s fighting.",
   q:["There\u2019s genuine aliveness, play, and adventure in my life \u2014 not just duty and grind.",
      "I make real space for what lights me up, without guilt."],
   gap:"You\u2019ve traded aliveness for grind. All duty, no play \u2014 and a man who can\u2019t feel joy eventually forgets what he\u2019s working for. It looks like the least important spoke; it\u2019s often the one holding the whole wheel back from turning.",
   str:"You still know how to be alive. Play, adventure, the things that light you up \u2014 you protect that, and it\u2019s what keeps the discipline from curdling into grind." }
];

/* 4 steps, 2 areas each (indices into AREAS) */
var STEPS = [ [0,1], [2,3], [4,5], [6,7] ];
var STEP_LINE = [
  "Rate each line for how true it is \u2014 not how it should be. How it is.",
  "Keep going. The truth you skip is the spoke that stays short.",
  "These are the ones most men flinch at. Stay honest.",
  "Last two. Then you\u2019ll see the whole wheel."
];

var TIERS = [
  {min:80, word:"WHOLE",      read:"The wheel runs true. Your life is integrated across the spokes \u2014 the work now is depth and transmission, not repair."},
  {min:62, word:"TURNING",    read:"The wheel is rolling, but it\u2019s out of round. One or two spokes are short, and you feel the wobble in everything else."},
  {min:44, word:"UNEVEN",     read:"Some spokes are strong, others are barely there. The wheel can\u2019t carry real weight until the short ones come up."},
  {min:0,  word:"SEIZED",     read:"Right now the wheel is buckled. A few areas are dragging the whole life to a stop. The honest news: every spoke can be rebuilt."}
];

var qualAnswers = [];         // index -> chosen option text
var answers = {};             // "area_stmt" -> 1..5
var cur = 0;                  // current wheel step (0..3)

function go(id){
  document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active')});
  document.getElementById(id).classList.add('active');
}

/* ---------- QUALIFY ---------- */
function startQualify(){ go('qualify'); renderQual(); window.scrollTo(0,0); }
function renderQual(){
  var html='';
  QUALIFIERS.forEach(function(item,qi){
    html+='<div class="qual-q"><div class="qual-lead">'+String.fromCharCode(65+qi)+'</div>'+
          '<div class="qual-text">'+item.q+'</div><div class="qopts">';
    item.opts.forEach(function(opt,oi){
      var sel = qualAnswers[qi]===oi ? ' sel' : '';
      html+='<button class="qopt'+sel+'" onclick="pickQual('+qi+','+oi+',this)"><span class="dot"></span>'+opt+'</button>';
    });
    html+='</div></div>';
  });
  document.getElementById('qualList').innerHTML=html;
  document.getElementById('qualNudge').classList.remove('show');
}
function pickQual(qi,oi,el){
  qualAnswers[qi]=oi;
  var parent=el.parentNode;
  parent.querySelectorAll('.qopt').forEach(function(o){o.classList.remove('sel')});
  el.classList.add('sel');
  document.getElementById('qualNudge').classList.remove('show');
}
function submitQualify(){
  for(var i=0;i<QUALIFIERS.length;i++){ if(qualAnswers[i]===undefined){ document.getElementById('qualNudge').classList.add('show'); return; } }
  go('audit'); renderStep(); window.scrollTo(0,0);
}

/* ---------- WHEEL ASSESSMENT ---------- */
function renderStep(){
  var pair=STEPS[cur];
  document.getElementById('phaseNum').textContent="PART 0"+(cur+1);
  document.getElementById('phaseName').textContent="THE WHEEL";
  document.getElementById('phaseLine').textContent="\u201C"+STEP_LINE[cur]+"\u201D";
  document.getElementById('phaseSub').textContent="Two areas of your life. Four statements. Answer as you are today.";
  document.getElementById('tbCount').textContent="PART "+(cur+1)+" OF 4";
  document.getElementById('backBtn').style.visibility = cur===0 ? 'hidden':'visible';
  document.getElementById('backBtn').textContent = cur===0 ? '' : '\u2190 Back';
  document.getElementById('nextBtn').textContent = cur===3 ? 'See my wheel' : 'Continue';

  var steps=document.querySelectorAll('#ascent .step');
  steps.forEach(function(s,i){ s.classList.remove('done','cur'); if(i<cur)s.classList.add('done'); if(i===cur)s.classList.add('cur'); });

  var html='';
  pair.forEach(function(ai){
    var a=AREAS[ai];
    html+='<div class="area-head"><div class="area-k">The Spoke</div><div class="area-name">'+a.name+'</div><div class="area-frame">\u201C'+a.frame+'\u201D</div></div>';
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
  var parent=el.parentNode;
  parent.querySelectorAll('.opt').forEach(function(o){o.classList.remove('sel')});
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
  if(cur<3){ cur++; renderStep(); } else { go('gate'); window.scrollTo(0,0); }
}
function prevPhase(){ if(cur>0){ cur--; renderStep(); } }

/* ---------- GATE ---------- */
function reveal(){
  var name=document.getElementById('fname').value.trim();
  var email=document.getElementById('email').value.trim();
  var err=document.getElementById('gateErr');
  if(!name){ err.textContent="Enter your name to continue."; return; }
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ err.textContent="Enter a valid email to unlock your wheel."; return; }
  err.textContent="";
  /* NOTE: lead is held in the page only. Wire name/email + qualAnswers to your CRM here. */
  computeAndShow(name);
}

/* ---------- WHEEL SVG ---------- */
function buildWheel(scores, minI, maxI){
  var cx=180, cy=180, maxR=118, n=scores.length, i, ang, rad, r, x, y;
  function pt(idx, frac){ ang=-90+idx*(360/n); rad=ang*Math.PI/180; return [cx+Math.cos(rad)*maxR*frac, cy+Math.sin(rad)*maxR*frac]; }
  var svg='<svg id="wheelSvg" viewBox="0 0 360 360" role="img" aria-label="Your Wheel of Life">';
  // guide rings
  [0.25,0.5,0.75,1].forEach(function(f){
    var pts=''; for(i=0;i<n;i++){ var p=pt(i,f); pts+=(i?' ':'')+p[0].toFixed(1)+','+p[1].toFixed(1); }
    svg+='<polygon points="'+pts+'" fill="none" stroke="rgba(155,123,62,'+(f===1?0.42:0.20)+')" stroke-width="1"/>';
  });
  // axes
  for(i=0;i<n;i++){ var e=pt(i,1); svg+='<line x1="180" y1="180" x2="'+e[0].toFixed(1)+'" y2="'+e[1].toFixed(1)+'" stroke="rgba(155,123,62,.16)" stroke-width="1"/>'; }
  // labels
  for(i=0;i<n;i++){
    ang=-90+i*(360/n); rad=ang*Math.PI/180;
    var lx=cx+Math.cos(rad)*(maxR+18), ly=cy+Math.sin(rad)*(maxR+18);
    var c=Math.cos(rad), anchor = c>0.3?'start':(c<-0.3?'end':'middle');
    var dy = Math.sin(rad)<-0.5? -4 : (Math.sin(rad)>0.5? 12 : 4);
    var col = i===minI?'#C9A668':(i===maxI?'#C9583E':'#9a9284');
    svg+='<text x="'+lx.toFixed(1)+'" y="'+(ly+dy).toFixed(1)+'" text-anchor="'+anchor+'" font-family="Cinzel,serif" font-weight="700" font-size="10.5" letter-spacing="1.4" fill="'+col+'">'+AREAS[i].label+'</text>';
    svg+='<text x="'+lx.toFixed(1)+'" y="'+(ly+dy+13).toFixed(1)+'" text-anchor="'+anchor+'" font-family="Cinzel,serif" font-weight="600" font-size="9" fill="#857E70">'+scores[i]+'%</text>';
  }
  // data polygon + dots (animated group)
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

/* ---------- RESULTS ---------- */
function computeAndShow(name){
  var scores=AREAS.map(function(a,ai){
    var sum=0; a.q.forEach(function(_,si){ sum+=answers[ai+'_'+si]||0; });
    return Math.round((sum/(a.q.length*5))*100);
  });
  var overall=Math.round(scores.reduce(function(x,y){return x+y},0)/scores.length);

  var tier=TIERS.find(function(t){return overall>=t.min;});
  document.getElementById('greet').textContent="Here\u2019s your wheel, "+name+".";
  document.getElementById('tierWord').textContent=tier.word;
  document.getElementById('tierRead').textContent="\u201C"+tier.read+"\u201D";

  var minI=0,maxI=0;
  scores.forEach(function(s,i){ if(s<scores[minI])minI=i; if(s>scores[maxI])maxI=i; });
  if(minI===maxI){ maxI = (minI===0?1:0); }

  document.getElementById('wheelHost').innerHTML=buildWheel(scores,minI,maxI);

  document.getElementById('gapName').textContent=AREAS[minI].name+"  \u00B7  "+scores[minI]+"%";
  document.getElementById('gapBody').textContent=AREAS[minI].gap;
  document.getElementById('strName').textContent=AREAS[maxI].name+"  \u00B7  "+scores[maxI]+"%";
  document.getElementById('strBody').textContent=AREAS[maxI].str;
  document.getElementById('ctaGap').textContent=AREAS[minI].name;
  document.getElementById('bookBtn').href=BOOKING_URL;

  go('results'); window.scrollTo(0,0);
  var big=document.getElementById('scoreBig'), n2=0;
  var iv=setInterval(function(){ n2+=Math.max(1,Math.round(overall/28)); if(n2>=overall){n2=overall;clearInterval(iv);} big.innerHTML=n2+'<span>%</span>'; },28);
  setTimeout(function(){ var sv=document.getElementById('wheelSvg'); if(sv) sv.classList.add('in'); },260);
}

function restart(){
  qualAnswers=[]; answers={}; cur=0;
  document.getElementById('fname').value=''; document.getElementById('email').value='';
  go('hero'); window.scrollTo(0,0);
}

