import { GalleryComponent } from "./gallery-component";

/**
 * Signature/interface for a `Gallery` object
 * @see https://developer.apple.com/documentation/apple_news/gallery
 * @extends {GalleryComponent}
 */
export interface Gallery extends GalleryComponent {
  role: "gallery";
}
