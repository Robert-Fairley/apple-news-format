import { Margin } from "../primitives";

/**
 * Signature/interface for an `AutoPlacementLayout` object
 * @see https://developer.apple.com/documentation/apple_news/autoplacementlayout
 * @deprecated
 */
export interface AutoPlacementLayout {
    margin?: Margin | number; // Integer
}
