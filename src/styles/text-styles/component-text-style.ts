import { ComponentTextStyleBase } from "./component-text-style-base";
import { ConditionalComponentTextStyle } from "./conditional-component-text-style";

/**
 * Signature/interface for a `ComponentTextSTtyle` object.
 * @extends {TextStyle}
 * @see https://developer.apple.com/documentation/apple_news/componenttextstyle
 * @extends {ComponentTextStyleBase}
 */
export interface ComponentTextStyle extends ComponentTextStyleBase {
    conditional?: ConditionalComponentTextStyle | ConditionalComponentTextStyle[];
}
