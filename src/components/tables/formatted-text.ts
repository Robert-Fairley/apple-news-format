import {
  ComponentTextStyle,
  InlineTextStyle,
} from "../../styles/text-styles";
import { Addition } from "../addition";

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
  type: "formatted_text";
  additions?: Addition[];
  format?: FormattedTextFormat;
  inlineTextStyles?: InlineTextStyle[];
  textStyle?: ComponentTextStyle | string;
}
