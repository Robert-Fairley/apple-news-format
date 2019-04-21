import {
  TextComponent,
  TextComponentFormat,
} from "./text-component";

/**
 * Signature/interface for a `Caption` object
 * @see https://developer.apple.com/documentation/apple_news/caption
 * @extends {TextComponent}
 */
export interface Caption extends TextComponent {
  role: "caption";
  format?: TextComponentFormat;
}
