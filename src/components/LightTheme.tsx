import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

const isWeakDevice = () => {
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return true;
  if (window.matchMedia("(max-width: 768px)").matches) return true;
  return false;
};

const LightTheme = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);
  const [isWeak, setIsWeak] = useState<boolean>(false);

  useEffect(() => {
    if (!vantaRef.current) return;
    setIsWeak(isWeakDevice());

    import("vanta/dist/vanta.clouds.min").then((CLOUDS) => {
      if (vantaEffect.current) vantaEffect.current.destroy();

      vantaEffect.current = CLOUDS.default({
        el: vantaRef.current,
        THREE,
        mouseControls: !isWeak,
        touchControls: !isWeak,
        gyroControls: false,
        minHeight: 300.0,
        minWidth: 300.0,
        speed: isWeak ? 0 : 0.5,
        backgroundColor: 0xffffff,
        skyColor: 0x68b8d7,
        cloudColor: 0xadc1de,
        cloudShadowColor: 0x183550,
        sunColor: 0xff9919,
        sunGlareColor: 0xff6633,
        sunlightColor: 0xff9933,
      });
    });

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 -z-50 w-full h-full" />;
};

export default LightTheme;
