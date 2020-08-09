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

function toggleMenu(){
    if(!showMenu){
      sidemenu.style.width = '250px';
      headline.style.opacity="0.2";
        //Set Menu state
        showMenu = true;
    }else{
      document.getElementById('side-menu').style.width = '0px';
      headline.style.opacity="0.7";

        //Set Menu State
        showMenu = false;

    }
}




/*let closed = document.querySelector('.btn-close');
let closeBtn = false;

closed.addEventListener("click", toggleBtn, false);

function toggleBtn(e){
  if(!closeBtn){
    e.preventDefault();
    document.getElementById('side-menu').style.width = '250px';
    headline.style.opacity="0.2";
    closeBtn = true;
    
    
  
  }else{
    document.getElementById('side-menu').style.width = '0px';
    headline.style.opacity="0.7";

      //Set Menu State
      closeBtn = false;
  }

}*/
 