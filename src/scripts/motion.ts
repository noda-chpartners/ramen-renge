import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const motion = gsap.matchMedia();

motion.add(
	{
		motionOK: "(prefers-reduced-motion: no-preference)",
		desktop: "(min-width: 960px)",
	},
	(context) => {
		if (!context.conditions?.motionOK) return;

		const lenis = new Lenis({
			autoRaf: false,
			anchors: false,
			stopInertiaOnNavigate: true,
		});

		lenis.on("scroll", ScrollTrigger.update);

		const onTick = (time: number) => {
			lenis.raf(time * 1000);
		};

		gsap.ticker.add(onTick);
		gsap.ticker.lagSmoothing(0);

		const onAnchorClick = (event: MouseEvent) => {
			const link = (event.target as Element | null)?.closest("a");
			if (!link || link.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
				return;
			}

			const url = new URL(link.href, window.location.href);
			if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) {
				return;
			}

			const id = decodeURIComponent(url.hash.slice(1));
			const target = document.getElementById(id);
			if (!target) return;

			event.preventDefault();
			lenis.scrollTo(target);
			history.pushState(null, "", `#${id}`);
		};

		document.addEventListener("click", onAnchorClick);

		const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
		intro
			.from(".hero__photo", { scale: 1.08, duration: 1.6, ease: "power2.out" }, 0)
			.from(".hero__name", { y: 28, autoAlpha: 0, duration: 0.7 }, 0.12);

		const onMenu = (event: Event) => {
			const input = event.target;
			if (!(input instanceof HTMLInputElement) || input.name !== "menu-panel") return;
			const id = input.id === "menu-drink" ? "drink" : "food";
			const panel = document.querySelector(`.panel--${id}`);
			if (!panel) return;
			gsap.fromTo(
				panel,
				{ y: 18, autoAlpha: 0 },
				{ y: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out", overwrite: "auto" },
			);
		};

		document.addEventListener("change", onMenu);

		let detachRefresh = () => {};

		if (context.conditions.desktop) {
			gsap.to(".rail__name", {
				y: -36,
				ease: "none",
				scrollTrigger: {
					trigger: document.documentElement,
					start: "top top",
					end: "bottom bottom",
					scrub: true,
				},
			});

			const row = document.querySelector<HTMLElement>("[data-counter-row]");
			const viewport = row?.parentElement;
			if (row && viewport) {
				const distance = () => Math.max(0, row.scrollWidth - viewport.clientWidth);
				gsap.to(row, {
					x: () => -distance(),
					ease: "none",
					scrollTrigger: {
						trigger: ".counter",
						start: "top top",
						end: () => `+=${Math.max(distance(), 1)}`,
						pin: true,
						scrub: 0.8,
						invalidateOnRefresh: true,
						anticipatePin: 1,
					},
				});

				const refresh = () => ScrollTrigger.refresh();
				window.addEventListener("load", refresh);
				row.querySelectorAll("img").forEach((img) => {
					if (!img.complete) img.addEventListener("load", refresh, { once: true });
				});

				detachRefresh = () => window.removeEventListener("load", refresh);
			}
		}

		return () => {
			detachRefresh();
			document.removeEventListener("click", onAnchorClick);
			document.removeEventListener("change", onMenu);
			gsap.ticker.remove(onTick);
			lenis.destroy();
		};
	},
);
