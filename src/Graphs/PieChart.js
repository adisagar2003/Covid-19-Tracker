import { Flex } from '@react-three/flex'
import { Box } from '@react-three/flex'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import { SpotLight } from 'three'
import {Stage} from '@react-three/drei'
const PieChart = (props) => (
  <div>
    Green: Negative Cases
      <br></br>
      Blue: Positive Cases 
      <br></br>
      Red: Deaths 
  <Canvas className='PieChart__threeObject' >
    
    <Flex >
    <Box centerAnchor flexGrow={1}>
      <Stage makeDefault {...props}>
    <Sphere args={[25, 16, 16]} position={[90, 90, 90]}>
            <meshLambertMaterial attach="material" color="cyan" />
          </Sphere>
          <Sphere args={[10, 16, 16]} position={[200,60,60]}>
            <meshLambertMaterial attach="material" color="red" />
          </Sphere>
          <Sphere args={[50, 16, 16]} position={[-30,4,-4]}>
            <meshLambertMaterial attach="material" color="green" />
          </Sphere>
          
          </Stage>
    </Box>
    </Flex>
  </Canvas></div>
)
export default PieChart