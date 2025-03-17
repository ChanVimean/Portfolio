declare module "vanta/dist/vanta.clouds.min" {
  import * as THREE from "three";

  interface VantaOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    speed?: number;
    backgroundColor?: number;
    skyColor?: number;
    cloudColor?: number;
    cloudShadowColor?: number;
    sunColor?: number;
    sunGlareColor?: number;
    sunlightColor?: number;
  }

  export default function CLOUDS(options: VantaOptions): { destroy: () => void };
}