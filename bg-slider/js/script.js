const body = document.body;
const slide = document.querySelectorAll(".slide");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let counter = 0;

next.addEventListener("click", () => {
    counter++;
    counter > slide.length - 1 ? counter = 0 : "";
    body.style.backgroundImage =  slide[counter].style.backgroundImage;
    activeSlideState();
});

prev.addEventListener("click", () => {
    counter--;
    counter < 0 ? counter = slide.length - 1 : "";
    body.style.backgroundImage =  slide[counter].style.backgroundImage;
    activeSlideState();
});

function activeSlideState () {
    slide.forEach(item =>{
        item.classList.remove("active");
        slide[counter].classList.add("active");
    });
}