'use client'
import createGlobe from "cobe";
import {useContext, useEffect, useRef, useState} from "react";
import { useSpring } from 'react-spring';
import { useTheme } from 'next-themes'
const HPGlobe = () => {

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const pointerInteracting = useRef<number | null>(null);
	const pointerInteractionMovement = useRef<number>(0);
	const [isInViewport, setIsInViewport] = useState(false);
	const globeRef = useRef<any>(null);
	const { resolvedTheme } = useTheme()

	const [{ r }, api] = useSpring<{ r: number }>(() => ({
		r: 0,
		config: {
			mass: 1,
			tension: 280,
			friction: 40,
			precision: 0.001,
		},
	}));

	let phi = 3.2;

	useEffect(() => {
		let screenWidth = window.innerWidth;
		let width = 0;
		const onResize = () => {
			if (canvasRef.current && isInViewport) {
				width = canvasRef.current.offsetWidth;
			}
		};
		const onScroll = () => {
			if (canvasRef.current) {
				const rect = canvasRef.current.getBoundingClientRect();
				const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
				setIsInViewport(inViewport);
			}
		};
		window.addEventListener('resize', onResize);
		window.addEventListener('scroll', onScroll);
		onScroll();
		onResize();

		let a = resolvedTheme === 'dark';
		globeRef.current = createGlobe(canvasRef.current!, {
			phi: 0,
			theta: 0,
			mapSamples: 16000,
			mapBrightness: a ? 20 : 4,
			mapBaseBrightness: 0,
			diffuse: 1.1,
			dark: a ? 1 : 0,
			baseColor: a ? [.1, .1, .1] : [1, 1, 1],
			markerColor: [0, 0.4, 1],
			glowColor: a ? [0.09, 0.1, 0.1] : [0.85, 0.85, 0.85],
			devicePixelRatio: 1,
			width: 600,
			height: 600,
			opacity: 1,
			scale: 1,
			markers: [
				{ location: [55.75655, 37.62316], size: 0.1 },
				{ location: [49.80780, 73.08878], size: 0.1 }
			],
			onRender: (state) => {
				if (!pointerInteracting.current) {
					phi += 0.002
				}

				state.phi = phi + r.get();
				if (screenWidth > 640) {
					state.width = width;
					state.height = width;
				}
			}
		});
		setTimeout(() => {
			if (canvasRef.current) {
				canvasRef.current.style.opacity = '1';
			}
		});
		return () => {
			window.removeEventListener('resize', onResize);
			window.removeEventListener('scroll', onScroll);
			if (globeRef.current) {
				globeRef.current.destroy();
			}
		};
	}, [r, isInViewport, resolvedTheme]);

	useEffect(() => {
		// Call the toggle method of the globe instance when component becomes visible
		if (isInViewport && globeRef.current) {
			globeRef.current.toggle(true);
		} else {
			globeRef.current.toggle(false);
		}
	}, [isInViewport]);

	return (
		<canvas
			className="absolute sm:relative left-1/2 -translate-x-1/2 w-[600px] h-[600px] max-w-none sm:max-w-full sm:w-[600px] sm:h-auto aspect-square"
			ref={canvasRef}
			onPointerDown={(e) => {
				pointerInteracting.current =
					e.clientX - pointerInteractionMovement.current;
				canvasRef.current!.style.cursor = 'grabbing';
			}}
			onPointerUp={() => {
				pointerInteracting.current = null;
				canvasRef.current!.style.cursor = 'grab';
			}}
			onPointerOut={() => {
				pointerInteracting.current = null;
				canvasRef.current!.style.cursor = 'grab';
			}}
			onMouseMove={(e) => {
				if (pointerInteracting.current !== null) {
					const delta = e.clientX - pointerInteracting.current;
					pointerInteractionMovement.current = delta;
					api.start({
						r: delta / 200,
					});
				}
			}}
			onTouchMove={(e) => {
				if (pointerInteracting.current !== null && e.touches[0]) {
					const delta = e.touches[0].clientX - pointerInteracting.current;
					pointerInteractionMovement.current = delta;
					api.start({
						r: delta / 100,
					});
				}
			}}
		/>
	)
}

export default HPGlobe;
