import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function ThreeComponent() {
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    
    const ref = useRef()
  return (<div>
      Green: Positive Cases<br>
      </br>
      Red: Deaths 
      <br></br>
      Blue: Negative Cases
    <Canvas className='threeDimensionalFrame'>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <mesh ref={ref} position={[-2.2,0,0]}>
          
        <sphereBufferGeometry
          visible
          position={[-4.2, -1, 1]}
          args={[2, 20, 250]}
        />
        <meshStandardMaterial attach="material" color="#00F5D4" roughness={0} />
      </mesh>
      <mesh position={[1.2,2,-4]}>
        <sphereBufferGeometry
          visible
          position={[-1.2, 3, 1]}
          args={[2, 20, 250]}
        />
        <meshStandardMaterial attach="material" color="green" roughness={0} />
      </mesh>
      <mesh position={[2.2,0,0]}>
        <sphereBufferGeometry
          visible
          position={[-1.2, 0, 0]}
          args={[1, 250, 250]}
          scale={clicked ? 1.5 : 1}
          onClick={(event) => click(!clicked)}
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}
          


        />
       
        <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'red'} roughness={1} />
      </mesh>
 
    </Canvas></div>
  )
}
