import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import { selectedWork, projectIndex } from "../../mock";
import { DPR } from "../../lib/device";

import { AREAS } from "./areas";

const AREA_OF = [
  [/delegnet/i, "sec"], [/codeguard|pirge/i, "sec"], [/chaos/i, "sec"],
  [/intervene|lung|eeg|meg|cog-bci|nwcf|gluco|moga|spectral early|hart/i, "neuro"],
  [/diffusion|visual robustness/i, "gen"],
  [/transferguard|quantum|qcert|archaeology|thermodynamic|telemetry|preferential/i, "graph"],
  [/copilot|cleardue|supportops|revenueops|rag|gtm|changeshield/i, "llm"],
];

function areaFor(title) {
  for (const [re, k] of AREA_OF) if (re.test(title)) return k;
  return "sys";
}

// deterministic pseudo-random so the layout is identical on every load
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function buildGraph() {
  const items = [
    ...selectedWork.map((p) => ({ id: p.id, title: p.title, category: p.category, repo: p.repo, featured: true })),
    ...projectIndex.map((p, i) => ({ id: `idx-${i}`, title: p.title, category: null, repo: p.repo, featured: false })),
  ].map((p) => ({ ...p, area: areaFor(p.title) }));

  const r = rng(7);
  const centers = {};
  AREAS.forEach((a, i) => {
    const phi = Math.acos(-1 + (2 * (i + 0.5)) / AREAS.length);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    centers[a.key] = new THREE.Vector3(Math.cos(theta) * Math.sin(phi), Math.sin(theta) * Math.sin(phi), Math.cos(phi)).multiplyScalar(1.7);
  });
  const nodes = items.map((p) => {
    const c = centers[p.area];
    const off = new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5).normalize().multiplyScalar(0.35 + r() * 0.45);
    return { ...p, pos: c.clone().add(off) };
  });
  // edges: each node to its two nearest neighbours in the same area + area hubs in a ring
  const seg = [];
  nodes.forEach((n, i) => {
    nodes
      .map((m, j) => ({ j, d: m.area === n.area && j !== i ? n.pos.distanceTo(m.pos) : Infinity }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 2)
      .forEach(({ j, d }) => d < Infinity && j > i && seg.push(n.pos, nodes[j].pos));
  });
  AREAS.forEach((a, i) => seg.push(centers[a.key], centers[AREAS[(i + 1) % AREAS.length].key]));
  nodes.forEach((n) => seg.push(n.pos, centers[n.area]));
  return { nodes, centers, segments: seg };
}

function Constellation({ active, setActive, spin, offsetX = 0 }) {
  const group = useRef();
  const mesh = useRef();
  const hit = useRef();
  const navigate = useNavigate();
  const { nodes, segments } = useMemo(buildGraph, []);
  const [hover, setHover] = useState(null);
  const colorOf = useMemo(() => Object.fromEntries(AREAS.map((a) => [a.key, new THREE.Color(a.color)])), []);

  const lineGeo = useMemo(() => new THREE.BufferGeometry().setFromPoints(segments), [segments]);

  useEffect(() => {
    const m = new THREE.Matrix4();
    nodes.forEach((n, i) => {
      const s = n.featured ? 1.35 : 0.9;
      m.compose(n.pos, new THREE.Quaternion(), new THREE.Vector3(s, s, s));
      mesh.current.setMatrixAt(i, m);
      hit.current.setMatrixAt(i, m);
      mesh.current.setColorAt(i, colorOf[n.area]);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    hit.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
    mesh.current.material.needsUpdate = true; // recompile so per-instance colours are used
  }, [nodes, colorOf]);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (spin && active === null && hover === null) group.current.rotation.y += delta * 0.07;
    const px = state.pointer.x * 0.25, py = state.pointer.y * 0.15;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -py, 0.04);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, px * 0.3, 0.04);
  });

  const shown = active !== null ? nodes[active] : hover !== null ? nodes[hover] : null;

  return (
    <group ref={group} position={[offsetX, 0, 0]}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#8a7c5c" transparent opacity={0.28} />
      </lineSegments>
      <instancedMesh ref={mesh} args={[null, null, nodes.length]} raycast={() => null}>
        <sphereGeometry args={[0.08, 20, 20]} />
        <meshStandardMaterial roughness={0.35} metalness={0.25} emissive="#2a2416" />
      </instancedMesh>
      <instancedMesh
        ref={hit}
        args={[null, null, nodes.length]}
        onPointerMove={(e) => { e.stopPropagation(); setHover(e.instanceId); document.body.style.cursor = "pointer"; }}
        onPointerOut={() => { setHover(null); document.body.style.cursor = ""; }}
        onClick={(e) => { e.stopPropagation(); setActive(e.instanceId === active ? null : e.instanceId); }}
      >
        <sphereGeometry args={[0.22, 8, 8]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </instancedMesh>
      {shown && (
        <Html position={shown.pos} center distanceFactor={7} zIndexRange={[30, 0]} style={{ transform: "translateY(-50%)" }}>
          <div style={{ transform: "translateY(calc(-50% - 22px))" }} className={`${active !== null ? "pointer-events-auto" : "pointer-events-none"} min-w-[180px] max-w-[240px] rounded-xl border border-[#3a3220] bg-[#141009]/95 backdrop-blur px-3 py-2 text-left shadow-xl`}>
            <p className="text-[9px] tracking-[0.2em] uppercase" style={{ color: AREAS.find((a) => a.key === shown.area).color }}>
              {AREAS.find((a) => a.key === shown.area).label}
            </p>
            <p className="font-serif text-[#f5efe0] text-sm leading-snug mt-1">{shown.title}</p>
            {active !== null && (
              <div className="flex gap-2 mt-2">
                {shown.featured && (
                  <button onClick={() => navigate(`/work#${shown.id}`)} className="px-2.5 py-1 rounded-full bg-[#c9a961] text-[#0e0c08] text-[11px] font-medium">
                    Details
                  </button>
                )}
                {shown.repo && (
                  <a href={shown.repo} target="_blank" rel="noopener noreferrer" className="px-2.5 py-1 rounded-full border border-[#3a3220] text-[#e6e1d6] text-[11px]">
                    Code
                  </a>
                )}
              </div>
            )}
          </div>
        </Html>
      )}
    </group>
  );
}

function Dust({ count }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const r = rng(3), a = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) a[i] = (r() - 0.5) * (i % 3 === 0 ? 14 : 9);
    return a;
  }, [count]);
  useFrame((_, d) => ref.current && (ref.current.rotation.y += d * 0.015));
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#a89b7a" transparent opacity={0.6} depthWrite={false} sizeAttenuation />
    </points>
  );
}

/**
 * Interactive 3D map of all projects. Quality scales with the device tier; the render loop
 * stops when the canvas is off-screen; motion stops for prefers-reduced-motion.
 */
export default function ProjectConstellation({ profile, inView, onReady }) {
  const [active, setActive] = useState(null);
  const dust = profile.tier === "high" ? 700 : profile.tier === "mid" ? 350 : 0;
  const zoom = profile.portrait ? 7.2 : 6.2;
  return (
    <Canvas
      camera={{ position: [0, 0, zoom], fov: 45 }}
      dpr={DPR[profile.tier]}
      frameloop={inView ? "always" : "never"}
      gl={{ antialias: profile.tier !== "low", powerPreference: "high-performance" }}
      onCreated={() => onReady && onReady()}
      onPointerMissed={() => setActive(null)}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 5]} intensity={1.1} />
      <pointLight position={[-5, -3, -4]} intensity={0.6} color="#c9a961" />
      <Constellation active={active} setActive={setActive} spin={!profile.reducedMotion} offsetX={profile.portrait ? 0 : 0.55} />
      {dust > 0 && <Dust count={dust} />}
    </Canvas>
  );
}
