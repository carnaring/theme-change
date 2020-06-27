let bouton = document.querySelector('#mode');
let span = document.querySelector('span');

function modeSombre(){
  
  document.querySelector('body').className = 'dark';
  span.textContent = 'Thème Clair';
  localStorage.setItem('theme','sombre');
}
if(localStorage.getItem('theme')){
  if(localStorage.getItem('theme') == 'sombre'){
    modeSombre();
  }
} 

bouton.addEventListener('click', function (){
 
  if(document.body.classList.contains('dark')){
    document.body.className = ''
    span.textContent = 'Thème sombre';
    localStorage.setItem('theme','clair');
  }else{
    modeSombre();
  }
 
});