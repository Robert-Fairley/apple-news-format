import {
  TextComponent,
} from "./text-component";

/**
 * Signature/interface for a `Byline` object
 * @see https://developer.apple.com/documentation/apple_news/byline
 * @extends {TextComponent}
 */
export interface Byline extends TextComponent {
  role: "byline";
}
