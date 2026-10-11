import React, { useRef } from "react";
import { useDeviceProfile, useInView, DPR } from "../../lib/device";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, TorusKnot, MeshDistortMaterial } from "@react-three/drei";

function Knot() {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15;
      ref.current.rotation.y += delta * 0.1;
    }
  });
  return (
    <Float speed={1} rotationIntensity={0.6} floatIntensity={0.8}>
      <TorusKnot ref={ref} args={[1.1, 0.32, 180, 24]}>
        <MeshDistortMaterial
          color="#c9a961"
          roughness={0.35}
          metalness={0.4}
          distort={0.28}
          speed={1.4}
        />
      </TorusKnot>
    </Float>
  );
}

export default function TorusBackground() {
  const box = useRef(null);
  const inView = useInView(box);
  const profile = useDeviceProfile();
  // phones / no-WebGL / reduced motion get a soft static glow instead of a live 3D canvas
  if (profile.tier === "none" || profile.tier === "low" || profile.reducedMotion) {
    return <div className="absolute inset-0 pointer-events-none opacity-60 bg-[radial-gradient(circle_at_70%_40%,rgba(201,169,97,0.18),transparent_55%)]" />;
  }
  return (
    <div ref={box} className="absolute inset-0 pointer-events-none opacity-70">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }} dpr={DPR[profile.tier]} frameloop={inView ? "always" : "never"}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={1} />
        <pointLight position={[-3, -2, 2]} intensity={0.5} color="#f0e6cf" />
        <Knot />
      </Canvas>
    </div>
  );
}
