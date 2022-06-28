const navBar = document.getElementById("nav__bar");
const buttonClose = document.getElementById("nav__button--close");
const buttonOpen = document.getElementById("nav__button--open");

const openNav = () => {
    buttonOpen.onclick = (e) => {
        e.preventDefault();
        navBar.style.width = "100%";
    }
}

const closeNav = () => {
    buttonClose.onclick = (e) => {
        e.preventDefault();
        navBar.style.width = "0%";
    }
}



