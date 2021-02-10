export default class Carousel {
    constructor(wrapper, items, itemActive, dots, dotActive) {
        this.wrapper = document.querySelector(wrapper);
        this.items = document.querySelectorAll(items);
        this.itemActive = itemActive;
        this.dots = document.querySelectorAll(dots);
        this.dotActive = dotActive;
        this.filmLength = +window.getComputedStyle(this.wrapper).width.slice(0, -2);
        this.slideLength = +window.getComputedStyle(this.items[0]).width.slice(0, -2)
        this.offset = 0;
        this.slideIndex = 2;
    }

    removeDotActive() {
        this.dots.forEach(dot => {
            dot.classList.remove(this.dotActive);
        });
    }

    addDotActive(i) {
        this.dots[i].classList.add(this.dotActive);
    }

    bindTriggers() {
        this.dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                this.moveToDot(i);
                this.slideIndex = i;
                this.removeDotActive();
                this.addDotActive(i);
            });
        });
    }

    moveToDot(i) {
        this.offset = this.slideLength * i;
        this.wrapper.style.transform = `translateX(-${this.offset}px)`;
    }

    init() {
        this.moveToDot(this.slideIndex);
        this.bindTriggers();
    }
}