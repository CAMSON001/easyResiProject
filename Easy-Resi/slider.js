 const items = document.querySelectorAll('.slide img');
 const nbSlide = 3;
 const suivant = document.querySelector('.droite');
 const precedent = document.querySelector('.gauche');




 let count = 0;

 function slideSuivant(){
     items[count].classList.remove('active');

     if(count < nbSlide -1 ){
         count++;
     } else{
         count = 0;
     }

     items[count].classList.add('active');
     console.log(count);
 }

 suivant.addEventListener('click', slideSuivant);

 function slidePrecedent(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else{
        count = nbSlide - 1;
    }

    items[count].classList.add('active');
    //console.log(count);
}
precedent.addEventListener('click', slidePrecedent);

function keyPress(e){
    if(e.keyCode === 37){
        slidePrecedent();
    }else if(e.keyCode===39){
        slideSuivant();
    }
}
document.addEventListener('keydown', keyPress)


let sliders = document.querySelectorAll('.menu_sliders');
let reser_ver = document.querySelectorAll('.liste_images .Reserver');
let le_flouX = document.querySelectorAll('.flouX');
let re_tour = document.querySelectorAll('.bouton_retour');

let nb = reser_ver.length
console.log(nb);

for  ( let i in sliders)
{
    re_tour[i].onclick = function(){
        sliders[i].classList.remove("active");
     }
      
    reser_ver[i].onclick = function(){
       sliders[i].classList.add("active");
    }
    
    le_flouX[i].onclick = function(){
       sliders[i].classList.remove("active");
    }
    
}
