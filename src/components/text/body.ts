import {
  TextComponent,
  TextComponentFormat,
} from "./text-component";

/**
 * Signature/interface for a `Body` component
 * @see https://developer.apple.com/documentation/apple_news/body
 * @extends {TextComponent}
 */
export interface Body extends TextComponent {
  role: "body";
  format?: TextComponentFormat;
}
