import { SupportedUnits } from "./supported-units";

/**
 * Signature/interface for a `Padding` object
 * @see https://developer.apple.com/documentation/apple_news/padding
 */
export interface Padding {
    bottom?: SupportedUnits | number; // Integer
    left?: SupportedUnits | number; // Integer
    right?: SupportedUnits | number; // Integer
    top?: SupportedUnits | number; // Integer
}
