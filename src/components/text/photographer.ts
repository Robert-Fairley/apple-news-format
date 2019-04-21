import {
  TextComponent,
} from "./text-component";

/**
 * Signature/interface for a `Photographer` object
 * @see https://developer.apple.com/documentation/apple_news/photographer
 * @extends {TextComponent}
 */
export interface Photographer extends TextComponent {
  role: "photographer";
}
