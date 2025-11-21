import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface Container3DProps {
  type: '20' | '40';
  isReefer?: boolean;
}

function ContainerModel({ type, isReefer = false }: Container3DProps) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  const length = type === '20' ? 6 : 12;
  const width = 2.4;
  const height = 2.6;
  
  const containerColor = isReefer ? '#3b82f6' : '#f97316';
  const accentColor = isReefer ? '#60a5fa' : '#fb923c';

  return (
    <group ref={meshRef}>
      {/* Main container body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[length, height, width]} />
        <meshStandardMaterial 
          color={containerColor} 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Corrugated sides effect */}
      {[...Array(type === '20' ? 6 : 12)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            -length/2 + (i + 0.5) * (length / (type === '20' ? 6 : 12)), 
            0, 
            width/2 + 0.01
          ]}
        >
          <boxGeometry args={[0.1, height - 0.2, 0.05]} />
          <meshStandardMaterial color={accentColor} metalness={0.6} roughness={0.3} />
        </mesh>
      ))}

      {/* Door details */}
      <mesh position={[length/2 - 0.05, 0, 0]}>
        <boxGeometry args={[0.1, height - 0.3, width - 0.3]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Door handles */}
      {[-0.3, 0.3].map((z, i) => (
        <mesh key={i} position={[length/2, 0, z * width]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 8]} />
          <meshStandardMaterial color="#64748b" metalness={1} roughness={0.2} />
        </mesh>
      ))}

      {/* Reefer unit (only for reefer containers) */}
      {isReefer && (
        <group position={[-length/2 - 0.3, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.6, height * 0.8, width * 0.9]} />
            <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
          </mesh>
          {/* Reefer vents */}
          {[...Array(4)].map((_, i) => (
            <mesh key={i} position={[-0.3, height * 0.2 - i * 0.4, 0]}>
              <boxGeometry args={[0.05, 0.3, width * 0.7]} />
              <meshStandardMaterial color="#64748b" />
            </mesh>
          ))}
        </group>
      )}

      {/* Logo/Label area */}
      <mesh position={[0, height/2 - 0.3, width/2 + 0.02]}>
        <boxGeometry args={[length * 0.4, 0.6, 0.02]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

export const Container3D = ({ type, isReefer = false }: Container3DProps) => {
  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      <Canvas>
        <PerspectiveCamera makeDefault position={[15, 8, 15]} />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minDistance={10}
          maxDistance={30}
        />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <pointLight position={[0, 5, 0]} intensity={0.5} />
        
        <ContainerModel type={type} isReefer={isReefer} />
        
        <gridHelper args={[40, 40, '#334155', '#1e293b']} position={[0, -1.5, 0]} />
      </Canvas>
    </div>
  );
};
