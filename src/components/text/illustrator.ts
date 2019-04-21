import {
  TextComponent,
} from "./text-component";

/**
 * Signature/interface for an `Illustrator` object
 * @see https://developer.apple.com/documentation/apple_news/illustrator
 * @extends {TextComponent}
 */
export interface Illustrator extends TextComponent {
  role: "illustrator";
}
