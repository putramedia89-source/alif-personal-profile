
// ========================================
// THREE-SCENE.JS
// Interactive Particle Background
// ========================================

import * as THREE from
"https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.module.js";

const canvas = document.getElementById("bg-canvas");

if (canvas) {

    try {

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            65,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        camera.position.z = 45;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        // PARTICLE SETTINGS
        const particleCount = 220;

        const positions = new Float32Array(
            particleCount * 3
        );

        for (let i = 0; i < particleCount; i++) {

            positions[i * 3] =
                (Math.random() - 0.5) * 100;

            positions[i * 3 + 1] =
                (Math.random() - 0.5) * 75;

            positions[i * 3 + 2] =
                (Math.random() - 0.5) * 45;

        }

        const geometry = new THREE.BufferGeometry();

        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        );

        const material = new THREE.PointsMaterial({
            color: 0xed1c24,
            size: 0.13,
            transparent: true,
            opacity: 0.65,
            sizeAttenuation: true
        });

        const particles = new THREE.Points(
            geometry,
            material
        );

        scene.add(particles);

        // MOUSE INTERACTION
        let mouseX = 0;
        let mouseY = 0;

        window.addEventListener(
            "pointermove",
            event => {

                mouseX =
                    (event.clientX / window.innerWidth - 0.5) * 2;

                mouseY =
                    (event.clientY / window.innerHeight - 0.5) * 2;

            },
            { passive: true }
        );

        // RESPONSIVE RESIZE
        window.addEventListener("resize", () => {

            camera.aspect =
                window.innerWidth / window.innerHeight;

            camera.updateProjectionMatrix();

            renderer.setSize(
                window.innerWidth,
                window.innerHeight
            );

            renderer.setPixelRatio(
                Math.min(window.devicePixelRatio, 2)
            );

        });

        // ANIMATION LOOP
        function animate() {

            requestAnimationFrame(animate);

            particles.rotation.y += 0.00045;
            particles.rotation.x += 0.0002;

            camera.position.x +=
                (mouseX * 2 - camera.position.x) * 0.015;

            camera.position.y +=
                (-mouseY * 2 - camera.position.y) * 0.015;

            renderer.render(scene, camera);

        }

        animate();

        console.log("Three.js background aktif.");

    } catch (error) {

        console.error(
            "Three.js tidak dapat dijalankan:",
            error
        );

    }

}
