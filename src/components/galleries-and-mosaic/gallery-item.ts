import { URI } from "../../primitives";
import { CaptionDescriptor } from "../images/caption-descriptor";

/**
 * Signature/interface for a `GalleryItem` object
 * @see https://developer.apple.com/documentation/apple_news/galleryitem
 */
export interface GalleryItem {
  URL: URI;
  accessibilityCaption?: string;
  caption?: CaptionDescriptor | string;
  explicitContent?: boolean;
}
