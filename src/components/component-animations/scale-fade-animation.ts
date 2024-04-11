import { ComponentAnimationBase } from "./component-animation";

/**
 * Signature/interface for a `ScaleFadeAnimation` object
 * @see https://developer.apple.com/documentation/apple_news/scalefadeanimation
 * @extends {ComponentAnimationBase}
 */
export interface ScaleFadeAnimation extends ComponentAnimationBase {
  type: "scale_fade";
  userControllable?: boolean;
  initialAlpha?: number; // Unsigned Float, max: 1
  initialScale?: number; // Unsigned Float, max: 1
}

