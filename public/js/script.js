const clipBoard = document.querySelector('.clipBoard');
const url = document.querySelector('.url');

clipBoard.addEventListener('click' , ()=> {
    // url.select();s   
    var text = url.textContent ;
    const el = document.createElement('textarea');  
    el.value = text;                                
    el.setAttribute('readonly', '');                
    el.style.position = 'absolute';                 
    el.style.left = '-9999px';                     
    document.body.appendChild(el);    
    el.select(); 
    document.execCommand('copy');  
    document.body.removeChild(el); 
    alert('Url Copied to your clipBoard !')
})

