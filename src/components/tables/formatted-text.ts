import { Addition } from "../../primitives";
import {
  ComponentTextStyle,
  InlineTextStyle,
} from "../../styles/text-styles";

/**
 * Possible values for a Formatted Text format field 
 */
export type FormattedTextFormat
  = "html"
  | "none";

/**
 * Signature/interface for a `FormattedText` object
 * @see https://developer.apple.com/documentation/apple_news/formattedtext
 */
export interface FormattedText {
  text: string;
  type: "formatted_test";
  additions?: Addition[];
  format?: FormattedTextFormat;
  inlineTextStyles: InlineTextStyle[];
  textStyle: ComponentTextStyle | string;
}
