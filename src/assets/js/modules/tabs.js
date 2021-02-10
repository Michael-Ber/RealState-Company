export default class Tabs {
    constructor (items, content, itemActiveClass, contentActiveClass, img) {
        this.item = document.querySelectorAll(items);
        this.content = document.querySelectorAll(content);
        this.itemActiveClass = itemActiveClass;
        this.contentActiveClass = contentActiveClass;
        this.img = document.querySelector(img);
    }

    removeActive() {
        this.item.forEach(item => {
            item.classList.remove(this.itemActiveClass);
        });
        this.content.forEach(content => {
            content.classList.remove(this.contentActiveClass);
        });
    }

    addActive(element, activeClass) {
        element.classList.add(activeClass);
    }

    bindTriggers() {
        this.item.forEach((item, i) => {
            item.addEventListener('click', () => {
                this.removeActive();
                this.addActive(item, this.itemActiveClass);
                this.addActive(this.content[i], this.contentActiveClass);
                if(this.img) {
                    let distance = +item.getAttribute('data-tab');
                    this.img.style.left = distance + 'px';
                    this.img.style.transition = 'all .5s';
                }
                
            });
        });
    }

    init() {
        this.bindTriggers();
    }
}