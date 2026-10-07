document.querySelectorAll('[data-onclick]').forEach(function(el){el.setAttribute('onclick',el.getAttribute('data-onclick'));});

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
