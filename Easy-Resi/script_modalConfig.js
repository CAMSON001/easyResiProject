
//FUNCTION BUTTON FERME FENETRE CONFIDENTIALITE ET VERSION
let feneapp = document.querySelector('.feneapp');
let ferme_fen =  document.querySelector('.ferme_fen');
let open = document.querySelector('.apropos');


open.onclick = function(){
    feneapp.classList.add("active")
}

ferme_fen.onclick = function(){
    feneapp.classList.remove("active");
}


 





