import { AppearAnimation } from "./appear-animation";
import { FadeInAnimation } from "./fade-in-animation";
import { MoveInAnimation } from "./move-in-animation";
import { ScaleFadeAnimation } from "./scale-fade-animation";

/**
 * Signature/interface for a `ComponentAnimation` object
 * @see https://developer.apple.com/documentation/apple_news/componentanimation
 */
export type ComponentAnimation = AppearAnimation | FadeInAnimation | MoveInAnimation | ScaleFadeAnimation