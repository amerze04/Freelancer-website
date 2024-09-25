let navbar = document.querySelector("nav");

window.onscroll = function() {

    if(window.scrollY > 0) {
        navbar.style.background = "#eefff9";
    } else {
        navbar.style.background = "transparent";
    }

}

let menuLinks = document.getElementById("menu-links");
menuLinks.style.maxHeight = "0px";

function toggleMenu() {
    menuLinks.style.maxHeight = (menuLinks.style.maxHeight === "0px") ? "60px" : "0px";

    console.log(menuLinks.style.maxHeight);
    
}