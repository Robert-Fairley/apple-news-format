/**
 * Signature/interface for a `FadeInAnimation` object
 * @see https://developer.apple.com/documentation/apple_news/fadeinanimation
 */
export interface FadeInAnimation {
  type: "fade_in";
  initialAlpha?: number; // Unsigned Float, max: 1
  userControllable?: boolean; // Default: false
}
