let MobileMenu = document.querySelector(".nav-container-mobile");
let MobileOpenButton = document.querySelector("#open-mobile-nav");
let MobileCloseButton = document.querySelector(".close-nav-mobile");

MobileOpenButton.addEventListener("click",function(){
    MobileMenu.classList.add("OpenNav")
})

MobileCloseButton.addEventListener("click",function(){
    MobileMenu.classList.remove("OpenNav")
})



let TabletMenu = document.querySelector(".nav-container-tablet");
let TabletOpenButton = document.querySelector("#open-tablet-nav");
let TabletCloseButton = document.querySelector(".close-nav-tablet");

TabletOpenButton.addEventListener("click",function(){
    TabletMenu.classList.add("OpenNav")
})

TabletCloseButton.addEventListener("click",function(){
    TabletMenu.classList.remove("OpenNav")
})



let DesktopMenu = document.querySelector(".nav-container-desktop");
let DesktopOpenButton = document.querySelector("#open-desktop-nav");
let DesktopCloseButton = document.querySelector(".close-nav-desktop");

DesktopOpenButton.addEventListener("click",function(){
    DesktopMenu.classList.add("OpenNav")
})

DesktopCloseButton.addEventListener("click",function(){
    DesktopMenu.classList.remove("OpenNav")
})