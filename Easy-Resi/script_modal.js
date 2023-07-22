

//BOUTON MODAL

let modalContainer = document.querySelector('.fenetre_modal');
let bouton = document.querySelector('.clickacle');
let le_flou = document.querySelector('.le_flou');
let ferme_modal = document.querySelector('.ferme_modal')

bouton.onclick = function(){
    modalContainer.classList.add("active");
}

le_flou.onclick = function(){
    modalContainer.classList.remove("active");
}
ferme_modal.onclick = function(){
    modalContainer.classList.remove("active");
}
    
    




//1110002
//Les fenetre mot de passe et parametres

//let fenetre_password = document.querySelector('.fenetre_password');
//let fenetre_parametre = document.querySelector('.fenetre_parametre');
//let contour_1 = document.querySelector('.contour_1');
//let contour_2 = document.querySelector('.contour_2');


//contour_1.onclick = function(){
//    fenetre_password.classList.toggle("active");
  //  fenetre_parametre.classList.remove("active");}
//contour_2.onclick = function(){
  //  fenetre_parametre.classList.remove("active");
    //fenetre_password.classList.remove("active");}



//let button = document.querySelector('.button');

//button.onclick =  function(){}



//1110002