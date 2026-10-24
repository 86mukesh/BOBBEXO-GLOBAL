function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:'smooth'})}
function showToast(msg){let t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000)}
function submitContact(e){
 e.preventDefault();
 let fd=new FormData(e.target);
 let data=Object.fromEntries(fd.entries());
 let list=JSON.parse(localStorage.getItem('bobbexo_leads')||'[]');
 list.push({...data,time:new Date().toISOString()});
 localStorage.setItem('bobbexo_leads',JSON.stringify(list));
 showToast('Thank you! We will contact you within 1 business day.');
 e.target.reset();
}
function subscribeNewsletter(){
 let name=document.getElementById('newsletterName').value.trim();
 let email=document.getElementById('newsletterEmail').value.trim();
 if(!name||!email||!email.includes('@')){showToast('Enter valid name and email');return;}
 let list=JSON.parse(localStorage.getItem('bobbexo_subs')||'[]');
 list.push({name,email,time:new Date().toISOString()});
 localStorage.setItem('bobbexo_subs',JSON.stringify(list));
 showToast('Subscribed! Market updates will come to your inbox.');
}