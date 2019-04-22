import { ImageComponent } from "./image-component";

/**
 * Signature/interface for a `Logo` object
 * @see https://developer.apple.com/documentation/apple_news/logo
 * @extends {ImageComponent}
 */
export interface Logo extends ImageComponent {
  role: "logo";
}
