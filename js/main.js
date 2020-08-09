function zoom(){
    window.onload = function() {
        document.body.className += ' loaded';
      };

}

zoom();



let showMenu = false;
const headline = document.querySelector('.headline');
let navicon = document.querySelector('.nav-icon');
let sidemenu = document.querySelector('.side-nav');

   


navicon.addEventListener('click', toggleMenu, false);


function toggleMenu(event){
    if(!showMenu){
      if(sidemenu.style.width = '250px');
         headline.style.opacity="0.7";
        //Set Menu state
        showMenu = true;
    }else{
      sidemenu.style.width = '0px';
      headline.style.opacity="0.2";
        //Set Menu State
        showMenu = false;

    }
}

let closed = document.querySelector('.btn-close');
closed.addEventListener("click", toggleBtn);

function toggleBtn(event){
    sidemenu.style.width = '0px';
     headline.style.opacity = '0.2';
  
    

    showMenu = false;

     
}


 