import { Color } from "../../primitives";

/**
 * Signature/interface for a `TextStrokeStyle` object
 * @see https://developer.apple.com/documentation/apple_news/textstrokestyle
 */
export interface TextStrokeStyle {
    color?: Color;
    width?: number; // Unsigned Integer
}
