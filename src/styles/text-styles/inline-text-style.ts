import { TextStyle } from "./text-style";

/**
 * Signature/interface for an `InlineTextStyle` object
 * @see https://developer.apple.com/documentation/apple_news/inlinetextstyle
 */
export interface InlineTextStyle {
    rangeLength: number; // Integer
    rangeStart: number; // Integer
    textStyle: TextStyle;
}
