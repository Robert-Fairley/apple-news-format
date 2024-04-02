import {
  HorizontalAlignment,
  URI,
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
export interface ArticleThumbnail extends Omit<ImageComponent, 'URL'> {
  role: "article_thumbnail";
  /**
   * @deprecated The thumbnail of the article referenced in the ArticleLink component is used.
   */
  URL: URI;
  /**
   * @deprecated 
   */
  aspectRatio?: number; // Float
   /**
   * @deprecated
   */
  fillMode?: ArticleThumbnailFillMode;
   /**
   * @deprecated
   */
  horizontalAlignment?: HorizontalAlignment;
   /**
   * @deprecated
   */
  verticalAlignment?: VerticalAlignment;
}
