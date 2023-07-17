import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const KenoGame = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "kenoBuildUnity/Kenogames.loader.js",
    dataUrl: "kenoBuildUnity/Kenogames.data.unityweb",
    frameworkUrl: "kenoBuildUnity/Kenogames.framework.js.unityweb",
    codeUrl: "kenoBuildUnity/Kenogames.wasm.unityweb",
  });
  return (
    <div className="game1">
      <h2>Keno Game (Prototype 1)</h2>
      <div className="game1-container">
        <Unity
          unityProvider={unityProvider}
          style={{ width: "980px", height: "1000px" }}
        />
      </div>
    </div>
  );
};

export default KenoGame;
