
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const menu=document.querySelector('.menu'), links=document.querySelector('.links');
if(menu) menu.addEventListener('click',()=>{links.style.display=links.style.display==='flex'?'none':'flex'; links.style.flexDirection='column'; links.style.position='absolute'; links.style.top='68px'; links.style.left='0'; links.style.right='0'; links.style.padding='18px'; links.style.background='#fff'; links.style.borderBottom='1px solid #e6ece9';});
document.querySelectorAll('form[data-whatsapp]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const name=form.querySelector('[name=name]')?.value||'';
    const phone=form.querySelector('[name=phone]')?.value||'';
    const service=form.querySelector('[name=service]')?.value||'';
    const msg=form.querySelector('[name=message]')?.value||'';
    const text=`Hello Biotin Clinic, I would like to book an appointment.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(msg)}`;
    window.open('https://wa.me/917358624141?text='+text,'_blank');
  });
});
