import { Shadow } from "../../primitives/shadow";
import { TextShadowOffset } from "../../primitives/text-shadow-offset";

/**
 * Signature/interface for a `TextShadow` object
 * @see https://developer.apple.com/documentation/apple_news/textshadow
 * @extends { Shadow }
 */
export interface TextShadow extends Shadow {
    radius: number;
    offset?: TextShadowOffset;
}