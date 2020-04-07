import {
  IdentifierURI,
  URI,
} from "../primitives";
import { Addition } from "./addition";

/**
 * Signature/interface for a `Link` object
 * @see https://developer.apple.com/documentation/apple_news/link
 * @extends {Addition}
 */
export interface LinkAddition extends Addition {
  URL: URI | IdentifierURI;
}
