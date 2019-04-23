import { ImageComponent } from "./image-component";

/**
 * Signature/interface for an `Image` object
 * @see https://developer.apple.com/documentation/apple_news/image
 * @extends {ImageComponent}
 */
export interface Image extends ImageComponent {
  role: "image";
}
