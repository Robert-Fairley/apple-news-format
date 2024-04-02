import { ComponentAnimationBase } from "./component-animation";

/**
 * Signature/interface for a `AppearAnimation` object
 * @see https://developer.apple.com/documentation/apple_news/appearanimation
 * @extends { ComponentAnimationBase }
 */
export interface AppearAnimation extends ComponentAnimationBase {
  type: "appear";
}
