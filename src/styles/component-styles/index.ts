export { Border } from "./border";
export { ColorStop } from "./color-stop";
export { ComponentStyle } from "./component-style";
export { CornerMask } from "./corner-mask";
export { Fill } from "./fill";
export { GradientFill } from "./gradient-fill";
export { ImageFill } from "./image-fill";
export { VideoFill } from "./video-fill";

/**
 * Signature/interface for the object containing named
 * `ComponentStyle` properties
 * @see https://developer.apple.com/documentation/apple_news/articledocument/componentstyles
 */
export interface ComponentStyles {
  [key: string]: ComponentStyle;
}
