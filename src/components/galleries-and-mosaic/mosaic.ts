import { GalleryComponent } from "./gallery-component";

/**
 * Signature/interface for a `Mosaic` component
 * @see https://developer.apple.com/documentation/apple_news/mosaic
 * @extends {GalleryComponent}
 */
export interface Mosaic extends GalleryComponent {
  role: "mosaic";
}
