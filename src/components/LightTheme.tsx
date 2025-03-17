import * as THREE from "three"
import CLOUDS from "vanta/dist/vanta.clouds.min"
import { useEffect, useRef, useState } from "react"

const isWeakDevice = () => {
  
  // ! Optimize: Disable less CPU Core < 4
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return true

  // ! Optimize: Disable Weak Device
  if (window.matchMedia("(max-width: 768px)").matches) return true

  // ! Optimize: Check WebGl capabilities
  const canvas = document.createElement("canvas")
  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
  if (!gl) return true

  const debugInfo = gl.getExtension("WEBGL_debug_renderer_info") as any
  if (debugInfo) {
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) as String
    if (renderer.includes("SwiftShader") || renderer.includes("llvmpipe") || renderer.includes("Mesa")) {
      return true
    }
  }
  return false
}


const LightTheme = () => {

  const vantaRef = useRef<HTMLDivElement | null>(null)
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof CLOUDS> | null>(null) 


  useEffect(() => {

    if (!vantaRef.current) return
    const weak = isWeakDevice()

    // ?⚡ Weak Device = No Animation
    if (weak) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 300.0,
          minWidth: 300.0,
          speed: 0,
          backgroundColor: 0xffffff, // Glacier blue sky theme
          skyColor: 0x68b8d7,
          cloudColor: 0xadc1de,
          cloudShadowColor: 0x183550,
          sunColor: 0xff9919,
          sunGlareColor: 0xff6633,
          sunlightColor: 0xff9933,
        })
      )
      return
    }

    // ? 🔥 Strong Device = Animation
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 300.0,
          minWidth: 300.0,
          speed: 0.5,
          backgroundColor: 0xffffff, // Glacier blue sky theme
          skyColor: 0x68b8d7,
          cloudColor: 0xadc1de,
          cloudShadowColor: 0x183550,
          sunColor: 0xff9919,
          sunGlareColor: 0xff6633,
          sunlightColor: 0xff9933,
        })
      )
    }


    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return <div ref={vantaRef} className="fixed inset-0 -z-50 w-full h-full" />
};

export default LightTheme