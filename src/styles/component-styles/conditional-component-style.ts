import { Condition } from "../../primitives";
import { ComponentStyleBase } from "./component-style-base";

/**
 * Signature/interface for a `ConditionalComponentStyle` object
 * @see https://developer.apple.com/documentation/apple_news/conditionalcomponentstyle
 * @extends {ComponentStyleBase}
 */
export interface ConditionalComponentStyle extends ComponentStyleBase {
  condition: Condition[];
}
