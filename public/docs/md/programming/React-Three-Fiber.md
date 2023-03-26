## React Three fiber

- A react renderer for three.js
- Three.js works in react and is more verbose
- React three fiber abstracts all the boilerplate code into components that can be imported and used on the fly

## React-free/drei

- Provides additional useful components such as access to the camera as a component ,..
- React three fiber comes as a basic version with basic functionality and components

## Basic Components

In Three.js every thing must have:

1. Scene: where you put objects, lights and cameras
1. Camera
1. Renderer

## Terms

1. `mesh`: A Mesh is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space.
   ```jsx
   <mesh
     scale={1}
     onClick={(event) => click(!clicked)}
     onPointerOver={(event) => hover(true)}
     onPointerOut={(event) => hover(false)}
   >
     <boxGeometry args={[1, 1, 1]} />
     <meshStandardMaterial color={"blue"} />
   </mesh>
   ```
1. `meshStandardMaterial`

1. `Geometry`:

1. `Canvas`: creates scene and canvas for children graphics
   - inherits size of parent componenet and fits it
1. ambientLight: light source that illuminates all objects in the scene equally

   ```jsx
   <ambientLight intensity={0.1} color={0xfffff} />
   ```

   - cant be used to cast shadows as it doesnt have direction

1. `pointLight`: light that is emitted from a single point in all directions. Replicates light from a lightbulb

1. toneMapping:

1. setPixelRation

1. `useFrame`: a hook that allows you to run code on an object on every frame. things like animation, controls ,..

## Cameras

1. Perspective camera

- as object is futher so does the distance become smaller
- method used to draw cubes on paper.

1. CubeCamera

- use 6 cameras that render to a webGLRender targer
