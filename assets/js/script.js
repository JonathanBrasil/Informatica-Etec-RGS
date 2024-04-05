
class MobileNavbar{
    constructor(mobileMenu, menu, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.menu = document.querySelector(menu);
        this.navLinks =  document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);


    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation 
            ? (link.style.animation = "")    
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
    
    handleClick(){
        this.menu.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass)
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu){
            this.addClickEvent();  
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu",
    ".menu li",
);

mobileNavbar.init();