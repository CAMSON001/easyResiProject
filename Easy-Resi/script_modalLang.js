//FUNCTION BUTTON LANGUAGE

let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let deroule_fl = document.getElementById("deroule_fl");



selectField.onclick = function(){
    list.classList.toggle("hide");
    deroule_fl.classList.toggle("rotate");
}
for (option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide");
        deroule_fl.classList.toggle("rotate");
    }
}




 





