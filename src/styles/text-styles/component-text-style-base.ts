import { DropCapStyle } from "./drop-cap-style";
import { TextStyle } from "./text-style";
import { TextStyleBase } from "./text-style-base";

/**
 * Signature/interface for a `ComponentTextSTtyle` object.
 * @extends {TextStyle}
 * @see https://developer.apple.com/documentation/apple_news/componenttextstyle
 */
export interface ComponentTextStyleBase extends TextStyleBase {
    dropCapStyle?: DropCapStyle;
    firstLineIndent?: number; // Integer
    hangingPunctuation?: boolean;
    hyphenation?: boolean;
    lineHeight?: number; // Integer
    linkStyle?: TextStyle;
    paragraphSpacingAfter?: number; // Integer
    paragraphSpacingBefore?: number; // Integer
}
