import { Condition } from "../../primitives";
import {
  ComponentTextStyle,
  InlineTextStyle,
} from "../../styles/text-styles";
import { ComponentBase } from "../component-base";

/**
 * Signature/interface for a `ConditionalText` object
 * @see https://developer.apple.com/documentation/apple_news/conditionaltext
 * @extends {ComponentBase}
 */
export interface ConditionalText extends ComponentBase {
  conditions: Condition[];
  inlineTextStyles?: InlineTextStyle[];
  textStyle?: ComponentTextStyle | string;
}
