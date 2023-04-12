import gsap from 'gsap';

export class StickyText {
    constructor(elem, container, fadePos = {start: 0, end: 0}) {
        this.elem = elem;
        this.container = container;
        this.fadePos = fadePos;
        this.init();
    }

    init() {

        const tl = gsap.timeline({paused: true});
        tl.fromTo(this.elem, {
                    opacity: 0, 
                    stagger: 0.1,
                    duration: 0.5
                },
                {
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.5
                });
        window.addEventListener('scroll', () => {
            this.containerBox = this.container.getBoundingClientRect();
            this.scroll = (scrollY - this.container.offsetTop) / this.containerBox.height;
            if (this.scroll >= this.fadePos.start && this.scroll < this.fadePos.end) {
                tl.play();
            } else {
                tl.reverse();
            }
        });
    }
}