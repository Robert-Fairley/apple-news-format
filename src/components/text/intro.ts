import {
  TextComponent,
  TextComponentFormat,
} from "./text-component";

/**
 * Signature/interface for an `Intro` component
 * @see https://developer.apple.com/documentation/apple_news/intro
 * @extends {TextComponent}
 */
export interface Intro extends TextComponent {
  role: "intro";
  format?: TextComponentFormat;
}
