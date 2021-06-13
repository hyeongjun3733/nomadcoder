const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
    SHWING_CN = "showing";

function paintgreeting(text){
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}


function loadName(){
    const currentUser = localStroage.getItem(USER_LS);
    if(currnetUser === null){

    } else {
        paintgreeting(currentUser);
    }
}

function init(){

}

init();