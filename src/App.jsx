
import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildUnity/Builds.loader.js",
    dataUrl: "buildUnity/Builds.data",
    frameworkUrl: "buildUnity/Builds.framework.js",
    codeUrl: "buildUnity/Builds.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App


//dev command : npm run dev
//test with the smaller "flagbuild" files. 