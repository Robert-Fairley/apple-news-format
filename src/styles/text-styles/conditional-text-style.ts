import {
    Condition,
} from "../primitives";
import { TextStyleBase } from "./text-style-base";

/**
 * Signature/interface for a `ConditionalTextStyle` object
 * @extends {TextStyleBase}
 * @see https://developer.apple.com/documentation/apple_news/conditionaltextstyle
 */
export interface ConditionalTextStyle extends TextStyleBase {
    conditions: Condition[];
}
