import { SupportedUnits } from "./supported-units";

/**
 * Signature/interface for a `Margin` object
 * @see https://developer.apple.com/documentation/apple_news/margin
 */
export interface Margin {
    bottom?: SupportedUnits | number; // Integer
    top?: SupportedUnits | number; // Integer
}
