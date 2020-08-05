function zoom(){
    window.onload = function() {
        document.body.className += ' loaded';
      };

}

zoom();


let showMenu = false;
const headline = document.querySelector('.headline');
let navicon = document.querySelector('.nav-icon');
const close = document.querySelector('.btn-close');

   


navicon.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
      document.getElementById('side-menu').style.width = '250px';
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

close.addEventListener("click", () => {
  document.getElementById('side-menu').style.width = '0px';
  headline.style.opacity="0.7";
});