import { Color, Condition } from "./primitives";

/**
 * Signature/interface for a `DocumentStyle` object
 * @see https://developer.apple.com/documentation/apple_news/documentstyle
 */
export interface DocumentStyle {
     backgroundColor?: Color;
     conditional?: ConditionalDocumentStyle | ConditionalDocumentStyle[];
}

/**
 * Signature/interface for a `ConditionalDocumentStyle` object
 * @see https://developer.apple.com/documentation/apple_news/conditionaldocumentstyle
 */
export interface ConditionalDocumentStyle {
    conditions: Condition | Condition[];
    backgroundColor?: Color;
}
