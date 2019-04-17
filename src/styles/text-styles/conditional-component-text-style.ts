import { Condition } from "../primitives";
import { ComponentTextStyleBase } from "./component-text-style-base";

/**
 * Signature/interface for a `ConditionalComponentTextStyle` object
 * @extends {ComponentTextStyle}
 * @see https://developer.apple.com/documentation/apple_news/conditionalcomponenttextstyle
 */
export interface ConditionalComponentTextStyle extends ComponentTextStyleBase {
    condition: Condition[];
}
