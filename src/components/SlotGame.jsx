import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const SlotGame = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildUnity/Game1.loader.js",
    dataUrl: "buildUnity/Game1.data.unityweb",
    frameworkUrl: "buildUnity/Game1.framework.js.unityweb",
    codeUrl: "buildUnity/Game1.wasm.unityweb",
  });

  return (
    <div className="game">
      <h2>
        Slot Game <span> : Prototype one</span>
      </h2>

      <div className="game-container">
        <Unity unityProvider={unityProvider} />
      </div>
    </div>
  );
};

export default SlotGame;
