import { Flex } from '@react-three/flex'
import { Box } from '@react-three/flex'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import { SpotLight } from 'three'

const PieChart = () => (
  <Canvas className='PieChart__threeObject' >
    <SpotLight
  distance={5}
  angle={0.15}
  attenuation={5}
  anglePower={5} // Diffuse-cone anglePower (default: 5)
/>
    <Flex >
    <Box centerAnchor flexGrow={1}>
      
    <Sphere args={[1, 16, 16]}>
            <meshLambertMaterial attach="material" color="white" />
          </Sphere>
          <Sphere args={[2, 16, 16]}>
            <meshLambertMaterial attach="material" color="white" />
          </Sphere>
          <Sphere args={[0.5, 16, 16]}>
            <meshLambertMaterial attach="material" color="white" />
          </Sphere>
    </Box>
    </Flex>
  </Canvas>
)
export default PieChart