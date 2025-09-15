/**
 * HYMN | initProjectSubnavScroll v5.6
 * @build 19.11.24 @updated 23:55 PHT
 * Switches between two subnav groups with smooth fade and slide animations based on scroll direction.
 */

export function initProjectSubnavScroll() {
    const groupA = document.querySelectorAll('[data-id="group-a"]');
    const groupB = document.querySelectorAll('[data-id="group-b"]');

    if (!groupA.length) return;

    groupB.forEach(el => {
        el.style.display = "none";
        gsap.set(el, { opacity: 0, y: 15 });
    });

    let lastDirection = 0;
    let lastTime = 0;

    ScrollTrigger.create({
        start: "top -20px",
        end: "bottom bottom",
        onUpdate(self) {
            const now = Date.now();
            const directionChanged = self.direction !== lastDirection && now - lastTime >= 1000;

            if (directionChanged) {
                if (self.direction === 1) {
                    // scrolling down
                    groupA.forEach(el => {
                        gsap.to(el, {
                            opacity: 0,
                            y: -15,
                            duration: 0.25,
                            onComplete: () => (el.style.display = "none")
                        });
                    });
                    groupB.forEach(el => {
                        el.style.display = "flex";
                        gsap.to(el, { opacity: 1, y: 0, duration: 0.25 });
                    });
                } else if (self.direction === -1) {
                    // scrolling up
                    groupB.forEach(el => {
                        gsap.to(el, {
                            opacity: 0,
                            y: 15,
                            duration: 0.25,
                            onComplete: () => (el.style.display = "none")
                        });
                    });
                    groupA.forEach(el => {
                        el.style.display = "flex";
                        gsap.to(el, { opacity: 1, y: 0, duration: 0.25 });
                    });
                }

                lastDirection = self.direction;
                lastTime = now;
            }
        }
    });
}