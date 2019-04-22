import { ImageComponent } from "./image-component";

/**
 * Signature/interface for a `Photo` component
 * @see https://developer.apple.com/documentation/apple_news/photo
 * @extends {ImageComponent}
 */
export interface Photo extends ImageComponent {
  role: "photo";
}
