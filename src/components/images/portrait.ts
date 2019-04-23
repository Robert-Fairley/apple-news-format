import { ImageComponent } from "./image-component";

/**
 * Signature/interface for a `Portrait` object
 * @see https://developer.apple.com/documentation/apple_news/portrait
 * @extends {ImageComponent}
 */
export interface Portrait extends ImageComponent {
  role: "portrait";
}
