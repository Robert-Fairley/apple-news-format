import {
  ComponentTextStyle,
  InlineTextStyle,
} from "../../styles/text-styles";
import { Addition } from "../addition";
import { ComponentBase } from "../component-base";
import { ConditionalText } from "./conditional-text";

/**
 * Possible values for a text component format role
 */
export type TextComponentFormat
  = "markdown"
  | "html"
  | "none";

/**
 * Possible values for a text component role field
 */
export type TextComponentRole
  = "body"          | "title"    | "heading"
  | "heading1"      | "heading2" | "heading3"
  | "heading4"      | "heading5" | "heading6"
  | "article_title" | "intro"    | "caption"
  | "author"        | "byline"   | "illustrator"
  | "photographer"  | "quote"    | "pullquote";

/**
 * Signature/interface for fields common to text components
 */
export interface TextComponent extends ComponentBase {
  role: TextComponentRole;
  text: string;
  additions?: Addition[];
  conditional?: ConditionalText[];
  inlineTextStyles?: InlineTextStyle[];
  textStyle?: ComponentTextStyle | string;
}
