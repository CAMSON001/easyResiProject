    
    
//Barre notif

let notifications = document.querySelector('.notifications');
let notif_box = document.querySelector('.notif_box ');



notifications.onclick = function(){
    notif_box.classList.toggle("active");
    box_utilisateur.classList.remove("active");
}


//Utilisateur 
let page_principale = document.querySelector('.page_principale');
let utilisateur = document.querySelector('.utilisateur');
let box_utilisateur = document.querySelector('.box_utilisateur');
let element_1 = document.querySelector("element_1")

utilisateur.onclick = function(){
    box_utilisateur.classList.toggle("active");
    notif_box.classList.remove("active");
}

page_principale.onclick = function(){
    notif_box.classList.remove("active");
    box_utilisateur.classList.remove("active");
}
element_1.onclick = function(){
    box_utilisateur.classList.remove("active");
}


//survolle du bouton utilisateur 
let compte = document.querySelector('.compte');


utilisateur.onmouseover = function(){
    compte.classList.add('active')
    
}

utilisateur.onmouseout = function(){
    compte.classList.remove('active')
    
    
}


//Survole du bouton notifications
let notificat = document.querySelector('.notificat');


notifications.onmouseover = function(){
    notificat.classList.add('active')
    
}

notifications.onmouseout = function(){
    notificat.classList.remove('active')
    
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









