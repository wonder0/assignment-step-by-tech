"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Assignment2 = () => {
  const [playGame, setPlayGame] = useState(false);
  const { unityProvider, isLoaded, unload } = useUnityContext({
    loaderUrl: "build/Build/build.loader.js",
    dataUrl: "build/Build/build.data.gz",
    frameworkUrl: "build/Build/build.framework.js.gz",
    codeUrl: "build/Build/build.wasm.gz",
  });

  const PlayUnityGame = () => {
    setPlayGame(true);
  };

  const handleClickBack = async () => {
    console.log("Unload the game");
    await unload();
  };

  const BackButtonListener = () => {
    const [pressed, setPressed] = useState(false);
    useEffect(() => {
      window.onpopstate = async (e) => {
        await unload();
        console.log("We reach here");
        setPressed(true);
      };
    });
    return <></>;
  };

  return (
    <div className="flex justify-center bg-base-color text-white">
      <div className="justify-between">
        {playGame ? (
          <div>
            <div className="">
              <Unity
                style={{ visibility: isLoaded ? "visible" : "hidden" }}
                unityProvider={unityProvider}
                className="w-full h-[90vh] rounded-xl"
              />
            </div>
            <div className="flex flex-1 items-center justify-center p-2 text-2xl">
              <a onClick={handleClickBack}>
                <button className="bg-primary border-2 border-primary text-base-color px-4 py-1 rounded-md font-bold cursor-pointer min-h-[4vh] min-w-[50vw] md:min-w-[15vw]">
                  Quit
                </button>
              </a>
            </div>
          </div>
        ) : (
          //Change the design of the main scene before entering metaverse
          <div className="h-screen w-full flex items-center justify-center">
            {/* <a href="/">
              <button className="bg-transparent border-2 border-primary text-primary px-4 py-1 rounded-md font-medium cursor-pointer min-h-[4vh] min-w-[50vw] md:min-w-[15vw] mb-4">
                Home
              </button>
            </a> */}
            <div onClick={PlayUnityGame}>
              <button className="bg-primary border-2 border-primary text-base-color px-4 py-1 rounded-md font-bold cursor-pointer min-h-[4vh] min-w-[50vw] md:min-w-[15vw]">
                Enter
              </button>
            </div>
          </div>
        )}

        {/* <PlayMySection /> */}
      </div>
      <BackButtonListener />
    </div>
  );
};

export default Assignment2;
