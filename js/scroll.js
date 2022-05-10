let mybutton = document.getElementById("up");


window.onscroll = function () {
    scrollFunction();
    scrollFunctionHeader()
};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}



function scrollFunctionHeader() {
    if (document.body.scrollTop > 1|| document.documentElement.scrollTop > 1) {
        document.getElementById("header").style.boxShadow = "0 5px 10px 0 rgba(68,61,102,0.05)";
        document.getElementById("header").style.zIndex = "1002";
        document.getElementById("header").style.transition = "ease 0.3s";
        if (window.innerWidth > 1450) {
            document.getElementById("header").style.padding = "16px 0 20px 0";
            document.querySelector('.logo-wrap').style.flexDirection = 'row'
            document.querySelector('.header-languages').style.margin = '0 0 0 31px'
            document.querySelector('.logo-wrap').style.alignItems = 'center'
            document.querySelector('.menu').style.marginLeft = '-83px'
        }


    } else {
        document.getElementById("header").style.boxShadow = "unset";
        document.getElementById("header").style.zIndex = "1000";
        document.getElementById("header").style.transition = "all 0.1s";
        if (window.innerWidth > 1450) {
            document.getElementById("header").style.padding = "26px 0 0 0";
            document.querySelector('.logo-wrap').style.flexDirection = 'column'
            document.querySelector('.header-languages').style.margin = '24px 0 0 73px'
            document.querySelector('.logo-wrap').style.alignItems = 'flex-start'
            document.querySelector('.menu').style.marginLeft = '24px'
        }

    }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(menuOpen && menuBtn.classList.contains('collapsed')) {
        menuBtn.classList.remove('open');
        menuOpen = false;
        if(window.innerWidth < 958) {
            document.querySelector(".header-home-page").style.backgroundColor = "#F6EEED";
        }
    } else {
        menuBtn.classList.add('open');
        menuOpen = true;

        if(window.innerWidth < 958) {
            document.querySelector(".header-home-page").style.backgroundColor = "#FFFFFF";
        }
    }
});



const next = document.querySelector('.next')
const prev = document.querySelector('.previous')


if(next) {
    if(window.innerWidth < 640) {
        next.innerHTML = '>'
        prev.innerHTML = '<'
    }
}








