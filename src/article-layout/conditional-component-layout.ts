import { Condition } from "../primitives";
import { ComponentLayoutBase } from "./component-layout-base";

/**
 * Signature/interface for a `ConditionalComponentLayout` object
 * @see https://developer.apple.com/documentation/apple_news/conditionalcomponentlayout
 * @extends {ComponentLayoutBase}
 */
export interface ConditionalComponentLayout extends ComponentLayoutBase {
    conditions: Condition | Condition[];
}
