/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/cozyRoom.glb -t
*/

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Html, PivotControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useLoader } from "react-three-fiber";

type GLTFResult = GLTF & {
  nodes: {
    MainRoom: THREE.Mesh;
    Window3: THREE.Mesh;
    Window2: THREE.Mesh;
    Cube008__0: THREE.Mesh;
    Cube008__0_1: THREE.Mesh;
    CurtainRod: THREE.Mesh;
    Curtain: THREE.Mesh;
    Floor: THREE.Mesh;
    Carpet: THREE.Mesh;
    Chair_Material010_0: THREE.Mesh;
    Chair_Material010_0_1: THREE.Mesh;
    Chair_Material010_0_2: THREE.Mesh;
    Chair_Material010_0_3: THREE.Mesh;
    Cube021_Material009_0: THREE.Mesh;
    Cube021_Material009_0_1: THREE.Mesh;
    Book: THREE.Mesh;
    Verre_Fabric_Upholstery_001a001_0: THREE.Mesh;
    Verre_Fabric_Upholstery_001a001_0_1: THREE.Mesh;
    Verre_Fabric_Upholstery_001a001_0_2: THREE.Mesh;
    Verre_Fabric_Upholstery_001a001_0_3: THREE.Mesh;
    TopLamp: THREE.Mesh;
    Circle005_Leather_Fabric_01_0: THREE.Mesh;
    Circle005_Leather_Fabric_01_0_1: THREE.Mesh;
    Circle005_Leather_Fabric_01_0_2: THREE.Mesh;
    Sofa: THREE.Mesh;
    Blanket: THREE.Mesh;
    PaintingFrame: THREE.Mesh;
    Painting: THREE.Mesh;
  };
  materials: {
    MainRoom: THREE.MeshStandardMaterial;
    Window2: THREE.MeshStandardMaterial;
    Window1: THREE.MeshStandardMaterial;
    CurtainRod: THREE.MeshStandardMaterial;
    Curtain: THREE.MeshStandardMaterial;
    Floor: THREE.MeshStandardMaterial;
    Carpet: THREE.MeshStandardMaterial;
    Chair1: THREE.MeshStandardMaterial;
    Chair2: THREE.MeshStandardMaterial;
    Chair3: THREE.MeshStandardMaterial;
    Chair4: THREE.MeshStandardMaterial;
    Table: THREE.MeshStandardMaterial;
    TableRod: THREE.MeshStandardMaterial;
    Book: THREE.MeshStandardMaterial;
    Fabric: THREE.MeshStandardMaterial;
    Flame: THREE.MeshStandardMaterial;
    CandleLamp: THREE.MeshStandardMaterial;
    LampWax: THREE.MeshStandardMaterial;
    TopLamp: THREE.MeshStandardMaterial;
    LampFabric: THREE.MeshStandardMaterial;
    LampStand: THREE.MeshStandardMaterial;
    LampMetal: THREE.MeshStandardMaterial;
    Sofa: THREE.MeshStandardMaterial;
    Blanket: THREE.MeshStandardMaterial;
    PaintingFrame: THREE.MeshStandardMaterial;
    Painting: THREE.MeshStandardMaterial;
  };
};

export function CozyRoom(props: JSX.IntrinsicElements["group"] & { imagePath: string }) {
  const [topLampIntensity, setTopLampIntensity] = useState<boolean>(false);
  const [sideLampIntensity, setSideLampIntensity] = useState<boolean>(false);

  const materialProps = {
    color: "white", // The base color of the material
    emissive: "#FFE4B5", // The emissive color
    emissiveIntensity: 1, // Intensity of the emissive color
  };

  const colorMap = useLoader(THREE.TextureLoader, props.imagePath);
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(3, 3);

  const { nodes, materials } = useGLTF("/cozyRoom.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.MainRoom.geometry}
        material={materials.MainRoom}
        position={[-0.28, -0.11, -0.44]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.38}
      />
      <mesh
        geometry={nodes.Window3.geometry}
        material={materials.Window2}
        position={[-0.28, -0.11, -0.44]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.38}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Window2.geometry}
        material={materials.Window2}
        position={[-0.28, -0.11, -0.44]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.38}
        receiveShadow
        castShadow
      />
      <group
        position={[-2.63, 5.73, -1.67]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[0.52, 1.34, 0.12]}>
        <mesh
          geometry={nodes.Cube008__0.geometry}
          material={materials.Window1}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Cube008__0_1.geometry}
          material={materials.Window2}
          receiveShadow
          castShadow
        />
      </group>
      <mesh
        geometry={nodes.CurtainRod.geometry}
        material={materials.CurtainRod}
        position={[0.78, 7.16, -10.26]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={3.36}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Curtain.geometry}
        material={materials.Curtain}
        position={[0.7, 3.55, -10.25]}
        scale={[2.11, 3.36, 3.36]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Floor.geometry}
        material={materials.Floor}
        position={[-1.05, 3.6, -0.44]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[5.41, 10.83, 3.57]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Carpet.geometry}
        material={materials.Carpet}
        position={[-0.28, -0.11, -0.44]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.38}
        receiveShadow
        castShadow
      />
      <PivotControls activeAxes={[true, true, true]} rotation={[0, 0, 0]} scale={1} anchor={[0, 0, 0.4]}>
      <group position={[-1.54, 0.1, -5.6]} rotation={[-Math.PI / 2, 0, -0.77]} scale={2.38}>
        <mesh
          geometry={nodes.Chair_Material010_0.geometry}
          material={materials.Chair1}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Chair_Material010_0_1.geometry}
          material={materials.Chair2}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Chair_Material010_0_2.geometry}
          material={materials.Chair3}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Chair_Material010_0_3.geometry}
          material={materials.Chair4}
          receiveShadow
          castShadow
        />
      </group>
      </PivotControls>
      <group position={[-2.66, 0.69, -1.72]} rotation={[-Math.PI / 2, 0, 0]} scale={2.38}>
        <mesh
          geometry={nodes.Cube021_Material009_0.geometry}
          material={materials.Table}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Cube021_Material009_0_1.geometry}
          material={materials.TableRod}
          receiveShadow
          castShadow
        />
      </group>
      <mesh
        geometry={nodes.Book.geometry}
        material={materials.Book}
        position={[-2.45, 0.76, -0.72]}
        rotation={[-Math.PI, 0.82, -Math.PI]}
        scale={2.68}
        receiveShadow
        castShadow
      />
      <group position={[-2.23, 0.82, -0.91]} rotation={[-Math.PI / 2, 0, -0.06]} scale={2.38}>
        <mesh
          geometry={nodes.Verre_Fabric_Upholstery_001a001_0.geometry}
          material={materials.Fabric}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Verre_Fabric_Upholstery_001a001_0_1.geometry}
          material={materials.Flame}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Verre_Fabric_Upholstery_001a001_0_2.geometry}
          material={materials.CandleLamp}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Verre_Fabric_Upholstery_001a001_0_3.geometry}
          material={materials.LampWax}
          receiveShadow
          castShadow
        />
      </group>
      <mesh
        geometry={nodes.TopLamp.geometry}
        material={
          topLampIntensity
            ? materials.TopLamp
            : new THREE.MeshStandardMaterial({ ...materialProps })
        }
        receiveShadow
        castShadow
        position={[-1.22, 5.6, -2.58]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.75, 0.75, 0.38]}>
        <Html distanceFactor={20}>
          <button
            className="rounded bg-black opacity-45"
            onClick={(e) => {
              setTopLampIntensity(!topLampIntensity);
              e.stopPropagation();
            }}>
            O
          </button>
        </Html>
        <pointLight position={[0, 0, -0.7]} intensity={topLampIntensity ? 0 : 10} castShadow={true}>
          {/* <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color={"blue"} />
          </mesh> */}
        </pointLight>
      </mesh>
      <group position={[-6.38, 3.14, -7.41]} rotation={[-Math.PI / 2, 0, -0.83]} scale={2.38}>
        <mesh
          geometry={nodes.Circle005_Leather_Fabric_01_0.geometry}
          material={
            sideLampIntensity
              ? materials.TopLamp
              : new THREE.MeshStandardMaterial({ ...materialProps })
          }
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Circle005_Leather_Fabric_01_0_1.geometry}
          material={materials.LampStand}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Circle005_Leather_Fabric_01_0_2.geometry}
          material={materials.LampMetal}
          receiveShadow
          castShadow
        />
        <Html distanceFactor={20}>
          <button
            className="rounded bg-black opacity-45"
            onClick={(e) => {
              setSideLampIntensity(!sideLampIntensity);
              e.stopPropagation();
            }}>
            O
          </button>
        </Html>
        <pointLight position={[0, 0, 0]} intensity={sideLampIntensity ? 0 : 10} castShadow={true}>
          {/* <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial color={"blue"} />
          </mesh> */}
        </pointLight>
      </group>
      <mesh
        geometry={nodes.Sofa.geometry}
        material={materials.Sofa}
        position={[-6.21, 0.07, -2.59]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[2.84, 2.38, 2.38]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Blanket.geometry}
        material={materials.Blanket}
        position={[-4.44, 2.67, -0.87]}
        rotation={[-2.75, -0.03, 2.07]}
        scale={[1.03, 1.87, 1.87]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.PaintingFrame.geometry}
        material={materials.PaintingFrame}
        position={[-0.28, -0.11, -0.44]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.38}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Painting.geometry}
        material={materials.Painting}
        position={[-0.28, -0.11, -0.44]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.38}
        receiveShadow
        castShadow>
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/cozyRoom.glb");
