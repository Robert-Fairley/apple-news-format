import {
  TextComponent,
  TextComponentFormat,
} from "./text-component";

/**
 * Signature/interface for an `Author` object
 * @see https://developer.apple.com/documentation/apple_news/author
 * @extends {TextComponent}
 */
export interface Author extends TextComponent {
  role: "author";
  format?: TextComponentFormat;
}
