
import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildUnity/GoogleExtensionBuild.loader.js",
    dataUrl: "buildUnity/GoogleExtensionBuild.data.gz",
    frameworkUrl: "buildUnity/GoogleExtensionBuild.framework.js.gz",
    codeUrl: "buildUnity/Builds.wasm.gz",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App


//dev command : npm run dev
//test with the smaller "flagbuild" files. 