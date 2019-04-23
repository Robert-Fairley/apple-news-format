import {
  HorizontalAlignment,
  VerticalAlignment,
} from "../../primitives";
import { ImageComponent } from "./image-component";

/**
 * Possible types for article thumbnail fill mode fields
 */
export type ArticleThumbnailFillMode
  = "cover"
  | "fit";

/**
 * Signature/interface for an `ArticleThumbnail` object
 * @see https://developer.apple.com/documentation/apple_news/articlethumbnail
 * @extends {ImageComponent}
 */
export interface ArticleThumbnail extends ImageComponent {
  role: "article_thumbnail";
  aspectRatio?: number; // Float
  fillMode?: ArticleThumbnailFillMode;
  horizontalAlignment?: HorizontalAlignment;
  verticalAlignment?: VerticalAlignment;
}
