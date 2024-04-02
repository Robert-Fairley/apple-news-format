import {
  ComponentTextStyle,
  InlineTextStyle,
} from "../../styles/text-styles";
import { Addition } from "../addition";
import { TextComponentFormat } from "../text/text-component";

/**
 * Signature/interface for a `CaptionDescriptor` object
 * @see https://developer.apple.com/documentation/apple_news/captiondescriptor
 */
export interface CaptionDescriptor {
  text: string;
  additions?: Addition[];
  format?: TextComponentFormat;
  /**
   * Apple News Format ignores InlineTextStyles when format is set to html or markdown.
   */
  inlineTextStyles?: InlineTextStyle[];
  textStyle?: ComponentTextStyle | string;
}
