/**
 * Signature/interface for a `ScaleFadeAnimation` object
 * @see https://developer.apple.com/documentation/apple_news/scalefadeanimation
 */
export interface ScaleFadeAnimation{
  type: "scale_fade";
  userControllable?: boolean;
  initialAlpha?: number; // Unsigned Float, max: 1
  initialScale?: number; // Unsigned Float, max: 1
}

