'use client'
import createGlobe from "cobe";
import {useEffect, useRef, useState} from "react";
import { useSpring } from 'react-spring';

const HPGlobe = () => {

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const pointerInteracting = useRef<number | null>(null);
	const pointerInteractionMovement = useRef<number>(0);
	const [isInViewport, setIsInViewport] = useState(false);
	const globeRef = useRef<any>(null);
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
		onResize();
		onScroll();


		globeRef.current = createGlobe(canvasRef.current!, {
			phi: 0,
			theta: 0,
			mapSamples: 16000,
			mapBrightness: 6,
			mapBaseBrightness: 0,
			diffuse: 1.1,
			dark: 1,
			baseColor: [0.2, 0.2, 0.2],
			markerColor: [0, 0.4, 1],
			glowColor: [0.09, 0.1, 0.1],
			devicePixelRatio: 1,
			width: 600,
			height: 600,
			opacity: 1,
			markers: [
				{ location: [55.75655, 37.62316], size: 0.1 },
				{ location: [49.80780, 73.08878], size: 0.1 }
			],
			onRender: (state) => {
				if (!pointerInteracting.current) {
					phi += 0.002
				}
				state.phi = phi + r.get();
				state.width = width;
				state.height = width;
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
	}, [r, isInViewport]);

	useEffect(() => {
		// Call the toggle method of the globe instance when component becomes visible
		if (isInViewport && globeRef.current) {
			globeRef.current.toggle(true);
			console.log('playu')
		} else {
			globeRef.current.toggle(false);
			console.log('pause')
		}
	}, [isInViewport]);

	return (
		<canvas
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
			style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
		/>
	)
}

export default HPGlobe;
