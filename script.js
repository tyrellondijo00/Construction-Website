const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-links");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navLink.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLink.classList.remove("active");
}))