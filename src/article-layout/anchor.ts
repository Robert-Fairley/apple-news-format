import { VerticalAlignment } from "../primitives";

/**
 * Signature/interface for an `Anchor` object
 * @see https://developer.apple.com/documentation/apple_news/anchor
 */
export interface Anchor {
    targetAnchorPosition: VerticalAlignment;
    originAnchorPosition?: VerticalAlignment;
    rangeLength?: number; // Integer
    rangeStart?: number; // Integer
    target?: string;
    targetComponentIdentifier?: string;
}
