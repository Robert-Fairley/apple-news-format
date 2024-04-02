import { AppearAnimation } from "./appear-animation";
import { FadeInAnimation } from "./fade-in-animation";
import { MoveInAnimation } from "./move-in-animation";
import { ScaleFadeAnimation } from "./scale-fade-animation";

/**
 * Possible values for a ComponentAnimation type field
 */
export type ComponentAnimationType
  = "appear"
  | "fade_in"
  | "move_in"
  | "scale_fade";


/**
 * Signature/interface for a `ComponentAnimation` object
 * @see https://developer.apple.com/documentation/apple_news/componentanimation
 */
export interface ComponentAnimationBase {
  type: ComponentAnimationType;
}

export type ComponentAnimation = AppearAnimation | FadeInAnimation | MoveInAnimation | ScaleFadeAnimation