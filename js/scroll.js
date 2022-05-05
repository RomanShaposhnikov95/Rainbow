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
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("header").style.padding = "13px 0 20px 0";
        document.getElementById("header").style.boxShadow = "0 5px 10px 0 rgba(68,61,102,0.05)";
        document.getElementById("header").style.zIndex = "1002";
    } else {
        document.getElementById("header").style.padding = "33px 0 22px 0";
        document.getElementById("header").style.boxShadow = "unset";
        document.getElementById("header").style.zIndex = "1000";
    }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}












