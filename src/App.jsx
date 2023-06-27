
import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildUnity/Build.loader.js",
    dataUrl: "buildUnity/Build.data.unityweb",
    frameworkUrl: "buildUnity/Build.framework.js.unityweb",
    codeUrl: "buildUnity/Build.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App


//dev command : npm run dev
//test with the smaller "flagbuild" files. 