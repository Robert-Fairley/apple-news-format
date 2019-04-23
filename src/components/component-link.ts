import { URI } from "../primitives";

/**
 * Signature/interface for a `ComponentLink` object
 * @see https://developer.apple.com/documentation/apple_news/componentlink
 */
export interface ComponentLink {
  type: "link";
  URL: URI;
}
