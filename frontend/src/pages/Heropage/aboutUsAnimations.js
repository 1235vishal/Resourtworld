import { gsap } from "gsap";

export const initAboutUsAnimation = (heroRef) => {
    if (window.innerWidth < 768) {
        const el = heroRef.current;
        if (!el) return;

        gsap.fromTo(
            el.querySelector(".hero-content"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
    }
};
