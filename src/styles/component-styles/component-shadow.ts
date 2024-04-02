import { ComponentShadowOffset } from "../../primitives";
import { Shadow } from "../../primitives/shadow";

/**
 * Signature/interface for a `ComponentShadow` object
 * @see https://developer.apple.com/documentation/apple_news/componentshadow
 * @extends {Shadow}
 */
export interface ComponentShadow extends Shadow {
    offset?: ComponentShadowOffset;
}
