export class ScrollProgression {
    constructor (container, counter) {
        this.container = {
            elem : container,
            box: null
        };
        this.counter = counter;
        this.init();
    }

    init() {
        const body = document.body;
        const html = document.documentElement;
        this.height = body.getBoundingClientRect().height - window.innerHeight;
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', () => {
            const persentage = Math.round(window.scrollY / this.height * 100);
            this.container.elem.style.width = persentage +'%';
            this.counter.innerHTML = persentage;
        });
        window.addEventListener('resize', () => {
            const body = document.body;
            const html = document.documentElement;
            this.height =  body.getBoundingClientRect().height - window.innerHeight;
        });
    }
}