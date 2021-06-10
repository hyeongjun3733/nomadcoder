const title = document.querySelector("#title");

// function handleResize(event) {
//     console.log(event);
// }

// // window.addEventListener("resize", handleResize);


function handleClick() {
    title.style.color = "blue";
}


title.addEventListener("click", handleClick)

// if ("10" === "java") {
//     console.log("hi");
// } else {
//     console.log("ho");
// }

const age = prompt("How old are you");
console.log(age)

if(age > 18) {
    console.log("You can drink")
} else {
    console.log("You can't")
}

// and = && , or = ||