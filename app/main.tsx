"use client";
import CollapsibleSidebar from "@/Components/collapsable-sidebar";
import {Environment, OrbitControls} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { CozyRoom } from "./CozyRoom";
import SelectToZoom from "@/Components/SelectToZoom";
import { Vector3 } from "three";

const MainScene = () => {
  const [defaultSky, setDefaultSky] = useState("sky/sky1.hdr");
  const handleSkyOne = () => {
    setDefaultSky("sky/sky1.hdr");
  };

  const handleSkyTwo = () => {
    setDefaultSky("sky/sky2.hdr");
  };
  const [targetLightPos, setTargetLightPos] = useState<Vector3>(new Vector3(10, 5, 10));
  const [targetLightIntensity, setTargetLightIntensity] = useState(2);

  const setDayTime = () => {
    setTargetLightPos(new Vector3(10, 5, 10));
    setTargetLightIntensity(1);
  };
  const setEveningTime = () => {
    setTargetLightPos(new Vector3(10, 3, 1));
    setTargetLightIntensity(0.5);
  };
  const setNightTime = () => {
    setTargetLightPos(new Vector3(0, 0, -1));
    setTargetLightIntensity(0.25);
  };

  const [paintingTexture, setPaintingTexture] = useState("paintings/seamless1.jpg");

  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ fov: 50, position: [0, 0, 20] }} shadows={true}>
        <Environment
          files={defaultSky}
          ground={{ height: 10, radius: 200, scale: 100 }}
          environmentIntensity={0.05}
        />
        <Suspense fallback={null}>
          <LightTransition targetPos={targetLightPos} intensity={targetLightIntensity} />
          <SelectToZoom>
            <CozyRoom imagePath={paintingTexture}/>
          </SelectToZoom>
        </Suspense>
      </Canvas>
      <CollapsibleSidebar>
        <div className="flex w-full py-2">
          <button
            onClick={handleSkyOne}
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-l-md hover:bg-blue-600 focus:outline-none">
            Mountain
          </button>
          <button
            onClick={handleSkyTwo}
            className="flex-1 px-4 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600 focus:outline-none">
            Ocean
          </button>
        </div>
        <div className="flex w-full py-2">
          <button
            className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-l-md hover:bg-blue-600 focus:outline-none"
            onClick={setDayTime}>
            Day
          </button>
          <button
            className="flex-1 px-4 py-2 bg-green-500 text-white hover:bg-green-600 focus:outline-none"
            onClick={setEveningTime}>
            Evening
          </button>
          <button
            className="flex-1 px-4 py-2 bg-slate-500 text-white rounded-r-md hover:bg-slate-600 focus:outline-none"
            onClick={setNightTime}>
            Night
          </button>
        </div>
        <div className="flex w-full py-2 ">
          <div className="flex justify-center items-center rounded-lg mx-auto">
            <button
              className={`bg-cover bg-center`}
              style={{
                backgroundImage: `url(${"/paintings/seamless1.jpg"})`,
                width: 100,
                height: 100,
              }}
              onClick={() => setPaintingTexture("paintings/seamless1.jpg")}></button>
          </div>
          <div className="flex justify-center items-center rounded-lg mx-auto">
            <button
              className={`bg-cover bg-center`}
              style={{
                backgroundImage: `url(${"/paintings/seamless2.jpg"})`,
                width: 100,
                height: 100,
              }}
              onClick={() =>  setPaintingTexture("paintings/seamless2.jpg")}></button>
          </div>
          <div className="flex justify-center items-center rounded-lg mx-auto">
            <button
              className={`bg-cover bg-center`}
              style={{
                backgroundImage: `url(${"/paintings/flower.jpg"})`,
                width: 100,
                height: 100,
              }}
              onClick={() =>  setPaintingTexture("paintings/flower.jpg")}></button>
          </div>
        </div>
        <div className="flex w-full py-2 ">
          <div className="flex justify-center items-center rounded-lg mx-auto">
            <button
              className={`bg-cover bg-center`}
              style={{
                backgroundImage: `url(${"/paintings/avocado.jpg"})`,
                width: 100,
                height: 100,
              }}
              onClick={() => setPaintingTexture("paintings/avocado.jpg")}></button>
          </div>
          <div className="flex justify-center items-center rounded-lg mx-auto">
            <button
              className={`bg-cover bg-center`}
              style={{
                backgroundImage: `url(${"/paintings/cosmos.png"})`,
                width: 100,
                height: 100,
              }}
              onClick={() =>  setPaintingTexture("paintings/cosmos.png")}></button>
          </div>
          <div className="flex justify-center items-center rounded-lg mx-auto">
            <button
              className={`bg-cover bg-center`}
              style={{
                backgroundImage: `url(${"/paintings/pattern.png"})`,
                width: 100,
                height: 100,
              }}
              onClick={() =>  setPaintingTexture("paintings/pattern.png")}></button>
          </div>
        </div>
      </CollapsibleSidebar>
    </div>
  );
};

interface LightTransitionProps {
  targetPos: Vector3;
  intensity: number;
}

const LightTransition = ({ targetPos, intensity }: LightTransitionProps) => {
  const lightRef = useRef<any>();
  const [lightPos] = useState(new Vector3(0, 0, 10));

  useFrame(() => {
    if (lightRef.current) {
      // Lerp the light position towards the target position
      lightPos.lerp(targetPos, 0.025);
      lightRef.current.position.copy(lightPos);
    }
  });

  return (
    <>
      <directionalLight ref={lightRef} position={lightPos} intensity={intensity} />
      <ambientLight intensity={intensity / 2} />
    </>
  );
};


export default MainScene;
