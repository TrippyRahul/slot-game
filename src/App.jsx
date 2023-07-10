import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./App.css";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildUnity/Game1.loader.js",
    dataUrl: "buildUnity/Game1.data.unityweb",
    frameworkUrl: "buildUnity/Game1.framework.js.unityweb",
    codeUrl: "buildUnity/Game1.wasm.unityweb",
  });

  return (
    <div className="app">
      <div className="container">
        <Unity unityProvider={unityProvider} />
      </div>
    </div>
  );
}

export default App;

//dev command : npm run dev
//test with the smaller "flagbuild" files.
