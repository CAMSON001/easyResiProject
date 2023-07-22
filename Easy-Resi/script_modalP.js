//FUNCTION BUTTON PARAMETRE


let modalParametre = document.querySelector('.fenetre_parametre');
let bouton_parametre = document.querySelector('.element_1');
let flou = document.querySelector('.flou');
let fermeModal = document.querySelector('.ferme_modalP');
let boxBtn =  document.querySelector('.btnBox');
let boutonMobile =  document.querySelector('.btnMobile');
//let somb = document.querySelector('.container_principal') l'effet sombre de la page 


bouton_parametre.onclick = function(){
    modalParametre.classList.add("active");
}

flou.onclick = function(){
    modalParametre.classList.remove("active");

}
fermeModal.onclick =  function(){
    modalParametre.classList.remove("active");
}

boutonMobile.onclick = function(){
    boutonMobile.classList.toggle("active");
    boxBtn.classList.toggle("active");
    //somb.classList.add("active");  l'effet sombre de la page 
}






