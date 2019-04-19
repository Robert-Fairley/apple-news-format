import { ConditionalTextStyle } from "./conditional-text-style";
import { TextStyleBase } from "./text-style-base";

/**
 * Signature/expression for a `TextStyle` object
 * @see https://developer.apple.com/documentation/apple_news/textstyle
 * @extends {TextStyleBase}
 */
export interface TextStyle extends TextStyleBase {
    conditional: ConditionalTextStyle[];
}
