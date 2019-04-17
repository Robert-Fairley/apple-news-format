import { ComponentLayoutBase } from "./component-layout-base";
import { Condition } from "../primitives";

/**
 * Signature/interface for a `ConditionalComponentLayout` object
 * @see https://developer.apple.com/documentation/apple_news/conditionalcomponentlayout
 * @extends {ComponentLayoutBase}
 */
export interface ConditionalComponentLayout extends ComponentLayoutBase {
    conditions: Condition[];
}

