import {
  TextComponent,
} from "./text-component";

/**
 * Signature/interface for a `PullQuote` object
 * @see https://developer.apple.com/documentation/apple_news/pullquote
 * @extends {TextComponent}
 */
export interface PullQuote extends TextComponent {
  role: "pullquote";
}
