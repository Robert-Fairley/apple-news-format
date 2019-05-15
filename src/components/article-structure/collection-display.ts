import {
  HorizontalAlignment,
  SupportedUnits,
} from "../../primitives";

/**
 * Possible values for a distribution field
 */
export type Distribution
  = "wide"
  | "narrow";

/**
 * Signature/interface for a `CollectionDisplay` object
 * @see https://developer.apple.com/documentation/apple_news/collectiondisplay
 */
export interface CollectionDisplay {
  type: "collection";
  alignment?: HorizontalAlignment;
  distribution?: Distribution;
  gutter?: SupportedUnits | number; // Integer
  maximumWidth?: SupportedUnits | number; // Integer
  minimumWidth?: SupportedUnits | number; // Integer
}
