import { DropCapStyle } from "./drop-cap-style";
import { TextStyle } from "./text-style";
import { TextStyleBase } from "./text-style-base";

type TextAlignment
    = "left"
    | "center"
    | "right"
    | "justified"
    | "none";

/**
 * Signature/interface for a `ComponentTextStyle` object.
 * @extends {TextStyle}
 * @see https://developer.apple.com/documentation/apple_news/componenttextstyle
 */
export interface ComponentTextStyleBase extends TextStyleBase {
    dropCapStyle?: DropCapStyle | "none";
    firstLineIndent?: number; // Integer
    /**
     *  Available in iOS 13, iPadOS 13, and macOS 10.15.
     */ 
    fontScaling?: boolean; 
    hangingPunctuation?: boolean;
    hyphenation?: boolean;
    /**
     *  Available in iOS 17, iPadOS 17, and macOS 14 beta release.
     */ 
    hyphenationMinimumCharactersAfter?: number; // Integer
    /**
     *  Available in iOS 17, iPadOS 17, and macOS 14 beta release.
     */ 
    hyphenationMinimumCharactersBefore?: number; // Integer
    /**
     *  Available in iOS 17, iPadOS 17, and macOS 14 beta release.
     */
    hyphenationMinimumWordLength?: number; // Integer
    /**
     *  Available in iOS 17, iPadOS 17, and macOS 14 beta release.
     */
    hyphenationZone?: number; // Integer
    /**
     *  Available in iOS 17, iPadOS 17, and macOS 14 beta release.
     */
    lineBalancing?: boolean; 
    lineHeight?: number; // Integer
    linkStyle?: TextStyle;
    paragraphSpacingAfter?: number; // Integer
    paragraphSpacingBefore?: number; // Integer
    textAlignment?: TextAlignment;
}
