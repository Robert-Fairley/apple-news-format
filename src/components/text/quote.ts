import {
  TextComponent,
  TextComponentFormat,
} from "./text-component";

/**
 * Signature/interface for a `Quote` object
 * @see https://developer.apple.com/documentation/apple_news/quote
 * @extends {TextComponent}
 */
export interface Quote extends TextComponent {
  role: "quote";
  format?: TextComponentFormat;
}
