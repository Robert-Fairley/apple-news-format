import { Color } from "./color";
import { Offset } from "./offset";

/**
 * Signature/interface for a `Shadow` object
 * @see https://developer.apple.com/documentation/apple_news/shadow
 */
export interface Shadow {
    color: Color;
    radius: number;
    offset?: Offset;
    opacity: number; // Float 0..1
}
