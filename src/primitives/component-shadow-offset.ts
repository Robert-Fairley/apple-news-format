import { SupportedUnits } from "./supported-units";

/**
 * Signature/interface for an `ComponentShadowOffset` object
 * @see https://developer.apple.com/documentation/apple_news/componentshadowoffset
 */
export interface ComponentShadowOffset {
    x: SupportedUnits | number;
    y: SupportedUnits | number;
}
