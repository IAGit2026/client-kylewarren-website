document.querySelectorAll('[data-onclick]').forEach(function(el){el.setAttribute('onclick',el.getAttribute('data-onclick'));});

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

;

/* =====================================================================
   FIRE AUDIT LEAD CAPTURE
   Set FA_ENDPOINT to your form handler (Formspree, Kit, Mailchimp,
   a Zapier catch hook, etc). Leave it blank and the popup still works,
   it just will not send the lead anywhere.
   ===================================================================== */
var FA_ENDPOINT = "https://services.leadconnectorhq.com/hooks/f3luAybuQTM6j6gDRzty/webhook-trigger/486e9bdf-b3d7-4308-a501-b4855060d375"; // GHL Inbound Webhook (Fire Audit Lead Capture)
var FA_AUDIT_URL = "/fire-audit";

function openFireAudit(e){
  if(e) e.preventDefault();
  document.getElementById('faOverlay').classList.add('open');
  document.body.style.overflow='hidden';
  try{ sessionStorage.setItem('faSeen','1'); }catch(err){}
  setTimeout(function(){ var n=document.getElementById('faName'); if(n) n.focus(); },120);
}
function closeFireAudit(){
  document.getElementById('faOverlay').classList.remove('open');
  document.body.style.overflow='';
  try{ sessionStorage.setItem('faSeen','1'); }catch(err){}
}
document.getElementById('faOverlay').addEventListener('click', function(ev){
  if(ev.target === this) closeFireAudit();
});
document.addEventListener('keydown', function(ev){
  if(ev.key === 'Escape') closeFireAudit();
});

function submitFireAudit(){
  var name=document.getElementById('faName').value.trim();
  var email=document.getElementById('faEmail').value.trim();
  var phone=document.getElementById('faPhone').value.trim();
  var handle=document.getElementById('faHandle').value.trim();
  var err=document.getElementById('faErr');
  if(!name){ err.textContent="Enter your first name to begin."; return; }
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ err.textContent="Enter a valid email so we can send your score."; return; }
  err.textContent="";
  if(FA_ENDPOINT){
    try{
      fetch(FA_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({source:"Fire Audit popup",event:"audit_started",name:name,email:email,phone:phone,handle:handle})});
    }catch(e){}
  }
  window.location.href = FA_AUDIT_URL+"?name="+encodeURIComponent(name)+
    "&email="+encodeURIComponent(email)+"&phone="+encodeURIComponent(phone)+
    "&handle="+encodeURIComponent(handle);
}

/* Open once per visit: after 30 seconds, or the moment the cursor
   leaves the top of the window. Never nags twice. */
(function(){
  function seen(){ try{ return sessionStorage.getItem('faSeen')==='1'; }catch(e){ return false; } }
  function maybeOpen(){ if(!seen()) openFireAudit(); }
  setTimeout(maybeOpen, 30000);
  document.addEventListener('mouseout', function(ev){
    if(!ev.relatedTarget && ev.clientY <= 0) maybeOpen();
  });
})();
