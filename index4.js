const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    
    title.classList.toggle(CLICKED_CLASS); //����� �Ʒ��� classlist�� �߰�,�����ϴ� �Ͱ� ���� ����� �Ѵ�
   
    // const hasClass = title.classList.contains(CLICKED_CLASS); // �������� Ŭ���� �ѹ��� �����ϴ� ���(btn, clicked)
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
