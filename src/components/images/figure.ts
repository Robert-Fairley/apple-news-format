import { ImageComponent } from "./image-component";

/**
 * Signature/interface for a `Figure` object
 * @see https://developer.apple.com/documentation/apple_news/figure
 * @extends {ImageComponent}
 */
export interface Figure extends ImageComponent {
  role: "figure";
}
