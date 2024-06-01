import { Bounds, ContactShadows, OrbitControls, useBounds } from "@react-three/drei";
import React, { Suspense } from "react";

interface SelectToZoomProps {
  children: React.ReactNode;
}
interface OutputProps {
  children: React.ReactNode;
}

const Select = ({ children }: SelectToZoomProps) => {
  const api = useBounds();
  const handleClick = (e: any) => {
    e.stopPropagation();
    if (e.delta <= 2) {
      api.refresh(e.object).fit();
    }
  };

  const handlePointerMissed = (e: any) => {
    if (e.button === 0) {
      api.refresh().fit();
    }
  };

  return (
    <group onClick={handleClick} onPointerMissed={handlePointerMissed}>
      {children}
    </group>
  );
};

const SelectToZoom = ({ children }: OutputProps) => {
  return (
    <>
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.2}>
          <Select>{children}</Select>
        </Bounds>
      </Suspense>
      <OrbitControls  makeDefault  />
    </>
  );
};

export default SelectToZoom;
//minPolarAngle={0} maxPolarAngle={Math.PI / 1.75} maxDistance={10}