
//scrollevento é acionado quando um elemento é rolado

//addEventListener receber do paramentro 1 - um event e segundo uma função.
window.addEventListener('scroll', function(){
    
    this.document.querySelector('nav').
    //tootle recebe dos agumentos 1 - o nome da classe segundo uma condição que ativa a classe
    //quald o scroll descer 50px ele implementa a classe window-scroll
    classList.toggle('window-scroll',window.scrollY > 50 );
})


const pegunta = document.querySelectorAll(".perguntas");

pegunta.forEach(p => {
  
    p.addEventListener('click', function(){
        p.classList.toggle("open");
    
        //mundando icone
        const icon = p.querySelector(".pergunta_icon i")
        if(icon.className === "fa-solid fa-plus"){
            icon.className = "fa-solid fa-minus"                
        }else{
            icon.className = "fa-solid fa-plus" 
        }
        })
})

const nav_container = document.querySelector(".nav_menu");
const open_menu = document.querySelector(".open_menu_bt");
const close_menu = document.querySelector(".close_menu_bt");


open_menu.addEventListener('click', function(){    
  nav_container.style.display = "flex";
  close_menu.style.display = "inline-block"
  open_menu.style.display = "none";

  
})

const close = ()=> {   
    nav_container.style.display = "none";
    close_menu.style.display = "none";    
    open_menu.style.display = "inline-block";   
    
}

  close_menu.addEventListener('click', close);
  
  
    
