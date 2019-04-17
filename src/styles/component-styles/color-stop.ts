import { Color } from "../primitives";

/**
 * Signature/interface for a `ColorStop` object.
 * @see https://developer.apple.com/documentation/apple_news/colorstop
 */
export interface ColorStop {
    color: Color;
    location?: number; // Unsigned Integer - Maximum 100
}
