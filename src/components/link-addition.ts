import {
  IdentifierURI,
  URI,
} from "../primitives";
import { Addition } from "./addition";

/**
 * Signature/interface for a `Link` object
 * @see https://developer.apple.com/documentation/apple_news/linkaddition
 * @extends {Addition}
 */
export interface LinkAddition extends Addition {
  type: "link";
  URL: URI | IdentifierURI;
  rangeLength: number; // Integer
  rangeStart: number; // Integer
}
