
import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildUnity/SlotGames.loader.js",
    dataUrl: "buildUnity/SlotGames.data.unityweb",
    frameworkUrl: "buildUnity/SlotGames.framework.js.unityweb",
    codeUrl: "buildUnity/SlotGames.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App


//dev command : npm run dev
//test with the smaller "flagbuild" files. 