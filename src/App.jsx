import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./App.css";
import KenoGame from "./components/KenoGame";
import SlotGame from "./components/SlotGame";
import DinoKenoGame from "./components/DinoKenoGame";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildUnity/Game1.loader.js",
    dataUrl: "buildUnity/Game1.data.unityweb",
    frameworkUrl: "buildUnity/Game1.framework.js.unityweb",
    codeUrl: "buildUnity/Game1.wasm.unityweb",
  });

  return (
    <div className="bg">
      <SlotGame />
      <KenoGame />
      <DinoKenoGame />
    </div>
  );
}

export default App;

//dev command : npm run dev
//test with the smaller "flagbuild" files.
