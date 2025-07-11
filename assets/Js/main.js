// mobile navbar apear code
let MobileMenu = document.querySelector(".nav-container-mobile");
let MobileOpenButton = document.querySelector("#open-mobile-nav");
let MobileCloseButton = document.querySelector(".close-nav-mobile");

MobileOpenButton.addEventListener("click",function(){
    MobileMenu.classList.add("OpenNav")
    document.body.style.overflow = 'hidden';
})

MobileCloseButton.addEventListener("click",function(){
    MobileMenu.classList.remove("OpenNav")
    document.body.style.overflow = 'unset';
})


// tablet navbar apear code
let TabletMenu = document.querySelector(".nav-container-tablet");
let TabletOpenButton = document.querySelector("#open-tablet-nav");
let TabletCloseButton = document.querySelector(".close-nav-tablet");

TabletOpenButton.addEventListener("click",function(){
    TabletMenu.classList.add("OpenNav")
    document.body.style.overflow = 'hidden';
})

TabletCloseButton.addEventListener("click",function(){
    TabletMenu.classList.remove("OpenNav")
    document.body.style.overflow = 'unset';
})


// desktop navbar apear code
let DesktopMenu = document.querySelector(".nav-container-desktop");
let DesktopOpenButton = document.querySelector("#open-desktop-nav");
let DesktopCloseButton = document.querySelector(".close-nav-desktop");

DesktopOpenButton.addEventListener("click",function(){
    DesktopMenu.classList.add("OpenNav")
})

DesktopCloseButton.addEventListener("click",function(){
    DesktopMenu.classList.remove("OpenNav")
})




// Back to top button js code (hide and show button - scrolling)
const scrollTriggerPosition = 2000;
const BackToTopButton = document.querySelector(".to-the-top");


function showButton() {
    BackToTopButton.classList.add("Apear-toTheTop");
}


function hideButton() {
    BackToTopButton.classList.remove("Apear-toTheTop");
}


window.addEventListener('scroll', function() {
    const currentScrollPosition = window.scrollY || window.pageYOffset;
    
    if (currentScrollPosition >= scrollTriggerPosition) {
        showButton();
    } else {
        hideButton();
    }
});

const backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    
    const scrollDuration = 500;
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
});


// sign in notification code

let notifElement = document.querySelector(".sign-in-notif");

function showNotification() {
    notifElement.classList.add("notif");
}

function hideNotification() {
    notifElement.classList.remove("notif");
}

document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        try {
            if (notifElement) {
                showNotification();
                
                
                setTimeout(hideNotification, 10000);
            } else {
                console.error('المنت .sign-in-notif یافت نشد');
            }
        } catch (e) {
            console.error('خطا در اجرای نوتیفیکیشن:', e);
        }
    }, 2000);
});