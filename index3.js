const title = document.querySelector("#title");

const BASE_COLOR = "rgb(109, 170, 221)"; //왜 rgb 값으로 넣어줘야 하는지?
const OTHER_COLOR = "#e74c3c";

function handleClick() {
    const currentColor = title.style.color;
    console.log(currentColor)

    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

function handleOnline() {
    console.log("lalala")
}

window.addEventListener("online", handleOnline)
