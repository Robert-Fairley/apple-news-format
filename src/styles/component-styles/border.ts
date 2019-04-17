import { StrokeStyle } from "../../primitives/stroke-style";

/**
 * Signature/interface for a `Border` object
 * @see https://developer.apple.com/documentation/apple_news/border
 */
export interface Border {
    all?: StrokeStyle;
    bottom?: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
}
