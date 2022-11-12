"use strict";

const imgItems = document.querySelectorAll(".main .img-item");
const img = document.querySelectorAll(".main .img-item img");
const btnPrev = document.querySelector(".wrapper .btn.prev");
const btnNext = document.querySelector(".wrapper .btn.next");
const bgImg = document.querySelector(".wrapper .bg");
const btns = document.querySelectorAll(".btn")
const bodyBg = document.querySelector(".body-bg");
const bgImgSrc = ["img/img3.jpg", "img/img2.jpg", "img/img7.jpg", "img/img4.jpg", "img/img5.jpg", "img/img6.jpg"];
let counter = 0;

btnPrev.addEventListener("click", () => {
    counter--;
    counter < 0 ? counter = bgImgSrc.length - 1 : "";
    bodyBg.style.backgroundImage = `url(${bgImgSrc[counter]})`;
    bgImg.style.backgroundImage = `url(${bgImgSrc[counter]})`;
})

btnNext.addEventListener("click", () => {
    counter++;
    counter === bgImgSrc.length ? counter = 0 : "";
    bodyBg.style.backgroundImage = `url(${bgImgSrc[counter]})`;
    bgImg.style.backgroundImage = `url(${bgImgSrc[counter]})`;
})

img.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.cssText = `
            width: 220px;
            height: 170px;
            object-position: 60% center;
        `;
    })
    item.addEventListener("mouseleave", () => {
        item.style.cssText = `
        width: 200px;
        height: 150px;
        object-position: 50% 50%;
    `;
    })
})

imgItems.forEach((item,index) => {
    item.addEventListener("click", () => {
        counter = index;
        bodyBg.style.backgroundImage = `url(${bgImgSrc[counter]})`;
        bgImg.style.backgroundImage = `url(${bgImgSrc[counter]})`;
    })
});

btns.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.background = `rgb(0,0,0, 0.6)`;
        item.style.fontSize = `28px`;
    })
    item.addEventListener("mouseleave", () => {
        item.style.background = `rgb(0,0,0, 0.3)`;
        item.style.fontSize = `23px`;
    })
})