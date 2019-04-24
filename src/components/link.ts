import { Addition } from "./addition";
import { IdentifierURI } from "./primitives";

/**
 * Signature/interface for a `Link` object
 * @see https://developer.apple.com/documentation/apple_news/link
 * @extends {Addition}
 */
export interface Link extends Addition {
  URL: URI | IdentifierURI;
}
