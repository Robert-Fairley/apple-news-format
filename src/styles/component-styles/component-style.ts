import { Condition } from "../../primitives";
import { ComponentStyleBase } from "./component-style-base";
import { ConditionalComponentStyle } from "./conditional-component-style";

/**
 * Signature/interface for a `ComponentStyle` object
 * @see https://developer.apple.com/documentation/apple_news/componentstyle
 */
export interface ComponentStyle extends ComponentStyleBase {
  conditional?: ConditionalComponentStyle[];
}
