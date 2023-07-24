import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const DinoKenoGame = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "dinoKenoUnity/DinoKeno.loader.js",
    dataUrl: "dinoKenoUnity/DinoKeno.data.unityweb",
    frameworkUrl: "dinoKenoUnity/DinoKeno.framework.js.unityweb",
    codeUrl: "dinoKenoUnity/DinoKeno.wasm.unityweb",
  });

  return (
    <div className="game">
      <h2>Dino Keno Game <span> : Prototype 1</span></h2>

      <div className="game-container">
        <Unity
          unityProvider={unityProvider}
          style={{ width: "980px", height: "1000px" }}
        />
      </div>
    </div>
  );
};

export default DinoKenoGame;
