import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export class AnimatedTitle {
    constructor(container) {
        this.container = container;
        this.className = 'c-animated-title';
        this.init();
    }

    init() {
        this.textContent = this.container.textContent;
        this.container.textContent = '';

        // parse the textContent into an array of words, put it into spans and delete spaces
        this.words = this.textContent.split(' ').map(word => {
            const span = document.createElement('span');
            span.classList.add(this.className + '__word');
            span.textContent = word;
            this.container.appendChild(span);
            this.container.appendChild(document.createTextNode(' '));
            return span;
        }
        ).filter(word => word.textContent !== '');

        // parse the words into an array of letters, put it into spans and delete spaces
        this.letters = this.words.map(word => {
            const textcontent = word.textContent;
            word.textContent = '';
            const letters = textcontent.split('').map(letter => {
                const span = document.createElement('span');
                span.classList.add(this.className + '__letter');
                span.textContent = letter;
                word.appendChild(span);
                return span;
            });
            return letters;
        });


        gsap.registerPlugin(ScrollTrigger);
        this.timeline = gsap.timeline({
            // paused: true
        });
        this.timeline
            .fromTo(this.words, {
                autoAlpha: 0, y: 20 },
                {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.5
                })
            .fromTo(this.letters, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, stagger: 0.1, duration: 0.5 }, '-=0.2');
        ScrollTrigger.create({
            trigger: this.container,
            start: 'top bottom',
            end: 'bottom top',
            onEnter: () => this.timeline.restart(),
            onLeave: () => this.timeline.reverse(),
            onEnterBack: () => this.timeline.restart(),
            onLeaveBack: () => this.timeline.reverse(),
          })

    }
}