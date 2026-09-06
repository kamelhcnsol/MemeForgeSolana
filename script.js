(function(){
const p=new URLSearchParams(location.search);if(p.get('utm_source')||p.get('utm_medium')||p.get('utm_campaign'))localStorage.setItem('mf_attribution',JSON.stringify({source:p.get('utm_source')||'',medium:p.get('utm_medium')||'',campaign:p.get('utm_campaign')||'',first_seen:new Date().toISOString()}));
document.querySelectorAll('.track').forEach(x=>x.addEventListener('click',()=>{if(typeof gtag==='function'&&!String(x.dataset.event).includes('XXXXXXXXXX'))gtag('event',x.dataset.event,{link_url:x.href,page_location:location.href})}));
})();
