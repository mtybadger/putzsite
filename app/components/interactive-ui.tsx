'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Text, PerspectiveCamera } from '@react-three/drei'
import { Vector3, MathUtils, TorusGeometry, MeshBasicMaterial, Mesh, Group } from 'three'

interface MousePosition {
  x: number;
  y: number;
}

const CentralLogo: React.FC<{ mousePosition: MousePosition }> = ({ mousePosition }) => {
  const ref = useRef<Mesh>(null)
  const { size } = useThree()

  useFrame(() => {
    if (ref.current) {
      ref.current.position.x = MathUtils.lerp(ref.current.position.x, (mousePosition.x - 0.5) * 0.05, 0.1)
      ref.current.position.y = MathUtils.lerp(ref.current.position.y, -(mousePosition.y - 0.5) * 0.05, 0.1)
    }
  })

  return (
    <mesh ref={ref}>
      <circleGeometry args={[0.8, 100]} />
      <meshBasicMaterial color="#f37c20" />
      <Text
        position={[0, 0, 0.01]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Putz
      </Text>
    </mesh>
  )
}

interface TorusRingProps {
  children?: React.ReactNode;
  opacity: number;
  rotationX: number;
  rotationY: number;
  color: string;
  mousePosition: MousePosition;
}

const TorusRing: React.FC<TorusRingProps> = ({ children, opacity, rotationX, rotationY, color, mousePosition }) => {
  const ref = useRef<Group>(null)
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x = rotationX + (mousePosition.y - 0.5) * 0.1
      ref.current.rotation.y = rotationY + (mousePosition.x - 0.5) * 0.1
      ref.current.position.x = (mousePosition.x - 0.5) * 0.01
      ref.current.position.y = -(mousePosition.y - 0.5) * 0.01
    }
  })

  return (
    <group ref={ref}>
      <mesh>
        <torusGeometry args={[1, 0.02, 16, 100]}/>
        <meshBasicMaterial transparent={true} opacity={opacity} color={color} />
      </mesh>
      {children}
    </group>
  )
}

const TextOnTorus: React.FC<{ text: string }> = ({ text }) => {
  const chars = text.split('')
  const [offset, setOffset] = useState(0)

  useFrame((state) => {
    setOffset((prev) => (prev + 0.001) % 1)
  })

  return chars.map((char, i) => {
    const angle = ((i / chars.length) + offset) * Math.PI * 2
    return (
      <Text
        key={i}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        position={[
          Math.sin(angle) * 1.05,
          Math.cos(angle) * 1.05,
          0
        ]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        {char}
      </Text>
    )
  })
}

const slogans = [
  "Embrace the Putz!",
  "Putz your way to success!",
  "Life's a Putz, enjoy it!",
  "Putz happens!",
]

interface PlanetLink {
  name: string;
  angle: number;
}

export function InteractiveUi() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (event.clientX - rect.left) / rect.width,
          y: (event.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const planetLinks: PlanetLink[] = [
    { name: 'About', angle: 0 },
    { name: 'Projects', angle: 60 },
    { name: 'Residents', angle: 120 },
    { name: 'Rush', angle: 180 },
    { name: 'Links', angle: 240 },
    { name: 'Photos', angle: 300 },
  ]

  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden" ref={containerRef}>
      <div className="relative w-full h-full">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <CentralLogo mousePosition={mousePosition} />
          <TorusRing opacity={0} rotationX={Math.PI / 1.8} rotationY={-Math.PI / 4} color="#ffffff" mousePosition={mousePosition}>
            <TextOnTorus text={slogans.join(' ')} />
          </TorusRing>
          <TorusRing opacity={0.2} rotationX={Math.PI / 2.4} rotationY={Math.PI / 6} color="#4f46e5" mousePosition={mousePosition}>
          </TorusRing>
        </Canvas>
        <div className="absolute inset-0 pointer-events-none">
          {planetLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="absolute w-20 h-20 bg-[#f37c20] rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300 hover:scale-110 pointer-events-auto"
              style={{
                left: `calc(50% + ${Math.cos(link.angle * Math.PI / 180) * 300}px - 48px)`,
                top: `calc(50% + ${Math.sin(link.angle * Math.PI / 180) * 300}px - 48px)`,
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}