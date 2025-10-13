import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

// --- SHADER DEFINITION ---
// This is custom code that runs on the GPU to create the trail effect.
const LineTrailMaterial = shaderMaterial(
  // Uniforms: These are like variables you can control from your JavaScript code.
  {
    u_progress: 0, // The current position of the trail's head (from 0.0 to 1.5+)
    u_trailLength: 0.35, // The length of the trail. 0.35 = 35% of the curve's total length.
    u_masterOpacity: 1, // Overall opacity for the final fade-out.
    u_color: new THREE.Color(0.5, 2, 0.5), // The color of the beam. Values > 1 create a glow with the Bloom effect.
  },
  // Vertex Shader: Positions the vertices in 3D space.
  `
    varying float v_progress;
    attribute float a_progress;
    void main() {
      v_progress = a_progress; // Pass the vertex's progress along the tube to the fragment shader.
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader: Colors the pixels.
  `
    uniform float u_progress;
    uniform float u_trailLength;
    uniform float u_masterOpacity;
    uniform vec3 u_color;
    varying float v_progress; // The progress of the current pixel (from 0.0 at the start to 1.0 at the end).
    void main() {
      // Calculate the distance of the pixel from the head of the trail.
      float dist = u_progress - v_progress;

      // If the pixel is "ahead" of the trail's head or "behind" its tail, discard it (make it invisible).
      if (dist < 0.0 || dist > u_trailLength) {
        discard;
      }
      
      // Create a smooth fade-out at the tail of the trail for a softer edge.
      float trailAlpha = smoothstep(u_trailLength, u_trailLength - 0.1, dist);

      // Set the final color and apply the master opacity for the final fade-out.
      gl_FragColor = vec4(u_color, trailAlpha * u_masterOpacity);
    }
  `
);

// Makes our custom shader available to use as a component: <lineTrailMaterial />
extend({ LineTrailMaterial });

function AnimatedLines({
  onAnimationComplete,
  onRevealStart,
  setImageOpacity,
}) {
  const lineGroupRef = useRef();

  const curve = useMemo(() => {
    // --- PATH CONTROL ---
    const points = [];
    // 1. INCREASED RADIUS: Made the orbit wider to encompass the logo.
    const xRadius = 80;
    const zRadius = 1.3; // A smaller zRadius creates a more pronounced elliptical shape.
    const yAmplitude = 32;

    // 2. Z-OFFSET: This pushes the entire orbit "behind" the logo (into negative z-space).
    const zOffset = 10;
    const divisions = 128;

    // 3. ADJUSTED ENTRY/EXIT: Start and end points are now in negative z-space for a smooth path.
    points.push(new THREE.Vector3(-160, -30, -zOffset));
    points.push(new THREE.Vector3(120, -40, -zOffset));

    // Generate the points for the larger, offset ellipse
    for (let i = 0; i <= divisions; i++) {
      const angle = (i / divisions) * Math.PI * 2;

      const x = xRadius * Math.cos(angle);
      const y = yAmplitude * Math.sin(angle); // Swapped sin/cos for y/z for a different rotation
      const z = zRadius * Math.cos(angle) - zOffset; // Subtracting zOffset pushes it back

      points.push(new THREE.Vector3(x, y, z));
    }

    return new THREE.CatmullRomCurve3(points);
  }, []);

  const baseTubeGeometry = useMemo(() => {
    // Defines the shape of the line.
    const geometry = new THREE.TubeGeometry(curve, 512, 0.025, 10, false);

    const pointCount = geometry.attributes.position.count;
    const progress = new Float32Array(pointCount);
    for (let j = 0; j < pointCount; j++) {
      progress[j] = j / pointCount;
    }
    geometry.setAttribute("a_progress", new THREE.BufferAttribute(progress, 1));
    return geometry;
  }, [curve]);

  const randomOffsets = useMemo(() => {
    const offsets = [];
    for (let i = 0; i < 150; i++) {
      offsets.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 18
        )
      );
    }
    return offsets;
  }, []);

  // --- TIMING AND ANIMATION CONTROL ---
  useFrame(({ clock }) => {
    if (!lineGroupRef.current) return;

    const elapsedTime = clock.getElapsedTime();
    const duration = 8; // Slightly slower duration

    const trailLength = 0.3;
    const totalDistance = 1.0 + trailLength;
    const progress = (elapsedTime / duration) * totalDistance - trailLength;

    // REVEAL TRIGGER
    const revealTime = duration * (1 / totalDistance);
    if (elapsedTime > revealTime) {
      if (onRevealStart) onRevealStart();
    }

    // --- FADE-OUT LOGIC ---

    // 1. BEAM FADE-OUT: Fades out at the very end of the animation
    const beamFadeStartTime = duration * (0.7 / totalDistance);
    if (elapsedTime > beamFadeStartTime) {
      const fadeDuration = duration - beamFadeStartTime;
      const beamOpacity = Math.max(
        0,
        1 - (elapsedTime - beamFadeStartTime) / fadeDuration
      );
      lineGroupRef.current.children.forEach((line) => {
        line.material.uniforms.u_masterOpacity.value = beamOpacity;
      });
    }

    // This sends the updated progress to the shader every frame.
    lineGroupRef.current.children.forEach((line) => {
      line.material.uniforms.u_progress.value = progress;
    });

    // 2. LOGO FADE-OUT: Fades out earlier than the beam
    const logoFadeInStartTime = duration * (0.15 / totalDistance);
    const logoFadeInEndTime = duration * (0.45 / totalDistance);
    const logoFadeOutStartTime = duration * (0.6 / totalDistance); // CHANGE: Starts fading much earlier

    if (elapsedTime > logoFadeOutStartTime) {
      const fadeDuration = duration - logoFadeOutStartTime;
      const logoOpacity = Math.max(
        0,
        1 - (elapsedTime - logoFadeOutStartTime) / fadeDuration
      );
      setImageOpacity(logoOpacity);
    } else if (
      elapsedTime > logoFadeInStartTime &&
      elapsedTime < logoFadeInEndTime
    ) {
      const fadeInProgress =
        (elapsedTime - logoFadeInStartTime) /
        (logoFadeInEndTime - logoFadeInStartTime);
      setImageOpacity(Math.min(fadeInProgress, 1));
    } else if (elapsedTime >= logoFadeInEndTime) {
      setImageOpacity(1);
    }

    // End the entire animation
    if (elapsedTime >= duration) {
      if (onAnimationComplete) onAnimationComplete();
      clock.stop();
    }
  });

  return (
    <>
      <group ref={lineGroupRef} rotation={[0.4, 0, -Math.PI / 16]}>
        {randomOffsets.map((offset, i) => (
          <mesh key={i} geometry={baseTubeGeometry} position={offset}>
            <lineTrailMaterial transparent depthWrite={false} />
          </mesh>
        ))}
      </group>
    </>
  );
}

// The SplashScreen component now manages the image outside the Canvas
const SplashScreen = ({ onAnimationComplete, onRevealStart }) => {
  const [imageOpacity, setImageOpacity] = React.useState(0);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "transparent",
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      <motion.img
        animate={{ opacity: imageOpacity }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        src="/siam-white.webp"
        alt=""
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 11,
          pointerEvents: "none",
        }}
      />
      <Canvas camera={{ position: [0, 0, 25], fov: 75 }}>
        <AnimatedLines
          onAnimationComplete={onAnimationComplete}
          onRevealStart={onRevealStart}
          setImageOpacity={setImageOpacity}
        />
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} intensity={0.9} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default SplashScreen;
