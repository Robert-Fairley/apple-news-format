import { SupportedUnits } from "../../primitives";

/**
 * Possible values for `CornerMask` type field
 */
export type CornerMaskType = "corners";

/**
 * Signature/interface for a `CornerMask` object
 * @see https://developer.apple.com/documentation/apple_news/cornermask
 */
export interface CornerMask {
    bottomLeft?: boolean;
    bottomRight?: boolean;
    radius?: SupportedUnits | number; // Integer
    topLeft?: boolean;
    topRight?: boolean;
    type?: CornerMaskType;
}
