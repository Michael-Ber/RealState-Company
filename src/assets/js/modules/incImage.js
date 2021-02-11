export default class Image {
    constructor(selectorTrig, selectorImg, selectorItem, parentSelector) {
        this.trig = document.querySelectorAll(selectorTrig);
        this.img = document.querySelectorAll(selectorImg);
        this.item = document.querySelectorAll(selectorItem);
        this.parent = document.querySelector(parentSelector);
    }

    bindTriggers() {
        this.trig.forEach((item, i) => {
            item.addEventListener('click', (e) => {
                this.removeScroll();
                this.overlay = document.createElement('div');
                this.overlay.classList.add('overlay');
                this.overlay.style.cssText = `
                    width: 100%;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, .5);
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 1000;
                `;
                let newImg = document.createElement('img');
                let src = this.img[i].getAttribute('src');
                let alt = this.img[i].getAttribute('alt');
                newImg.setAttribute('src', src);
                newImg.setAttribute('alt', alt);
                newImg.style.cssText = `
                    width: 50%;
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 1000;
                `;
                this.parent.append(this.overlay);
                this.parent.style.overflow = 'hidden';
                this.overlay.append(newImg);
            });
        });
    }

    closeImage() {
        window.addEventListener('click', (e) => {
            if(e.target.classList.contains('overlay')) {
                this.overlay.remove();
                this.parent.style.overflow = 'unset';
                this.parent.style.marginRight = 0;
            } 
        });
    }

    removeScroll() {
        let div = document.createElement('div');
        div.style.width = '30px';
        div.style.height = '30px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        this.parent.append(div);
        this.scrollLength = +div.offsetWidth - +div.clientWidth;
        console.log(this.scrollLength, +div.offsetWidth, +div.clientWidth);
        this.parent.style.marginRight = `${this.scrollLength}px`;
        this.parent.removeChild(div);
    }

    init() {
        this.bindTriggers();
        this.closeImage();
    }
}