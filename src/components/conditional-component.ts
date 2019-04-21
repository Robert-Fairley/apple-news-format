import { Condition } from "../primitives";
import { ComponentBase } from "./component-base";

/**
 * Signature/interface for a `ConditionalComponent` object
 * @see https://developer.apple.com/documentation/apple_news/conditionalcomponent
 * @extends {ComponentBase}
 */
export interface ConditionalComponent extends ComponentBase {
  conditions?: Condition[];
}
