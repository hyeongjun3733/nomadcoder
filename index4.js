const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    
    title.classList.toggle(CLICKED_CLASS); //토글은 아래의 classlist에 추가,제거하는 것과 같은 기능을 한다
   
    // const hasClass = title.classList.contains(CLICKED_CLASS); // 여러개의 클래스 한번에 적용하는 방법(btn, clicked)
    // if (!hasClass) {
    //     title.classList.add(CLICKED_CLASS);
    // } else {
    //     title.classList.remove(CLICKED_CLASS);
    // }
    
    
    // if (currentClass !== CLICKED_CLASS) {
    //     title.className = CLICKED_CLASS;
    // } else {
    //     title.className = "";
    // }
    
    console.log(current)
}


function init(){
    title.addEventListener("click", handleClick);
}

init();
