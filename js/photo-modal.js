class PhotoModal {
    constructor() {
        this.image = document.getElementsByClassName('')[0];
        this.closeButton = document.getElementsByClassName('modal-exit')[0];
        this.events();
    }

    events() {
        this.openImage.addEventListener("click", this.openModal.bind(this));
        this.closeButton.addEventListener("click", this.closeModal.bind(this));
    }

    openMenu() {
        this.menu.style.display = 'block';
        this.closeButton.style.display = 'block';
        this.openButton.style.display = 'none';
    }

    closeMenu() {
        this.menu.style.display = 'none';
        this.closeButton.style.display = 'none';
        this.openButton.style.display = 'block';
    }
}

let burgerMenu = new BurgerMenu();