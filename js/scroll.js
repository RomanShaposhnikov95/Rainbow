const mybutton = document.getElementById("up");
const header = document.getElementById("header")
const logoWrap = document.querySelector('.logo-wrap')
const hl = document.querySelector('.header-languages')
const menu = document.querySelector('.menu')
const homePageHeader = document.querySelector(".header-home-page")


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

 document.documentElement.scrollTop;


function scrollFunctionHeader() {
    if (document.documentElement.scrollTop >= 10) {
        header.style.cssText = 'box-shadow: 0 5px 10px 0 rgba(68,61,102,0.05); z-index: 1002; transition: all 0.2s';
        if (window.innerWidth > 1450) {
            header.style.padding = "16px 0 20px 0";
            logoWrap.style.flexDirection = 'row'
            logoWrap.style.alignItems = 'center'
            hl.style.margin = '0 0 0 31px'
            menu.style.marginLeft = '-83px'
        }
    } else {
        header.style.cssText ='box-shadow: unset; z-index: 1000; transition: 0.1s';
        if (window.innerWidth > 1450) {
            header.style.padding = "26px 0 0 0";
            logoWrap.style.flexDirection = 'column'
            logoWrap.style.alignItems = 'flex-start'
            hl.style.margin = '24px 0 0 73px'
            menu.style.marginLeft = '24px'
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
            if (homePageHeader) {
                homePageHeader.style.backgroundColor = "#F6EEED";
            }
        }
    } else {
        menuBtn.classList.add('open');
        menuOpen = true;

        if(window.innerWidth < 958) {
            if (homePageHeader) {
                homePageHeader.style.backgroundColor = "#FFFFFF";
            }
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








