import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero3DCanvas = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		if (!containerRef.current) return;
		const container = containerRef.current;

		// Scene, Camera, Renderer
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			60,
			container.clientWidth / container.clientHeight,
			0.1,
			1000
		);
		camera.position.z = 24;

		const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
		renderer.setSize(container.clientWidth, container.clientHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		container.appendChild(renderer.domElement);

		// Outer Icosahedron Wireframe
		const geoOuter = new THREE.IcosahedronGeometry(9, 1);
		const matOuter = new THREE.MeshBasicMaterial({
			color: 0x00f5ff,
			wireframe: true,
			transparent: true,
			opacity: 0.25,
		});
		const outerMesh = new THREE.Mesh(geoOuter, matOuter);
		scene.add(outerMesh);

		// Inner Dodecahedron Geometry
		const geoInner = new THREE.DodecahedronGeometry(5.5, 0);
		const matInner = new THREE.MeshBasicMaterial({
			color: 0x6366f1,
			wireframe: true,
			transparent: true,
			opacity: 0.45,
		});
		const innerMesh = new THREE.Mesh(geoInner, matInner);
		scene.add(innerMesh);

		// Particle Matrix System
		const particleCount = 200;
		const particlesGeo = new THREE.BufferGeometry();
		const positions = new Float32Array(particleCount * 3);
		const colors = new Float32Array(particleCount * 3);

		for (let i = 0; i < particleCount * 3; i += 3) {
			positions[i] = (Math.random() - 0.5) * 60;
			positions[i + 1] = (Math.random() - 0.5) * 60;
			positions[i + 2] = (Math.random() - 0.5) * 40;

			// Cyan and Indigo gradient points
			colors[i] = Math.random() * 0.4 + 0.2; // R
			colors[i + 1] = Math.random() * 0.8 + 0.2; // G
			colors[i + 2] = 1.0; // B
		}

		particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

		const particlesMat = new THREE.PointsMaterial({
			size: 0.35,
			vertexColors: true,
			transparent: true,
			opacity: 0.7,
		});

		const particleSystem = new THREE.Points(particlesGeo, particlesMat);
		scene.add(particleSystem);

		// Mouse Movement Interaction
		let mouseX = 0;
		let mouseY = 0;
		let targetX = 0;
		let targetY = 0;

		const handleMouseMove = (event) => {
			const windowHalfX = window.innerWidth / 2;
			const windowHalfY = window.innerHeight / 2;
			mouseX = (event.clientX - windowHalfX) * 0.001;
			mouseY = (event.clientY - windowHalfY) * 0.001;
		};

		window.addEventListener('mousemove', handleMouseMove);

		// Resize handler
		const handleResize = () => {
			if (!container) return;
			camera.aspect = container.clientWidth / container.clientHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(container.clientWidth, container.clientHeight);
		};
		window.addEventListener('resize', handleResize);

		// Animation Loop
		let animationFrameId;
		const clock = new THREE.Clock();

		const animate = () => {
			animationFrameId = requestAnimationFrame(animate);
			const elapsedTime = clock.getElapsedTime();

			targetX += (mouseX - targetX) * 0.05;
			targetY += (mouseY - targetY) * 0.05;

			outerMesh.rotation.x = elapsedTime * 0.08 + targetY * 2;
			outerMesh.rotation.y = elapsedTime * 0.12 + targetX * 2;

			innerMesh.rotation.x = -elapsedTime * 0.15 - targetY * 1.5;
			innerMesh.rotation.y = -elapsedTime * 0.18 - targetX * 1.5;

			particleSystem.rotation.y = elapsedTime * 0.03;

			renderer.render(scene, camera);
		};

		animate();

		// Cleanup
		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('resize', handleResize);
			if (container && renderer.domElement) {
				container.removeChild(renderer.domElement);
			}
			geoOuter.dispose();
			matOuter.dispose();
			geoInner.dispose();
			matInner.dispose();
			particlesGeo.dispose();
			particlesMat.dispose();
			renderer.dispose();
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
			aria-hidden="true"
		/>
	);
};

export default Hero3DCanvas;
