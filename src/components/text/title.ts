import {
  TextComponent,
  TextComponentFormat,
} from "./text-component";

/**
 * Signature/interface for a `Title` component
 * @see https://developer.apple.com/documentation/apple_news/title
 * @extends {TextComponent}
 */
export interface Title extends TextComponent {
  role: "title";
  format?: TextComponentFormat;
}
