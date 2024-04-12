import { AutoPlacementLayout } from "./article-layout/auto-placement-layout";

/**
 * Signature/interface for the base object for `AutoPlacement` objects
 * @see https://developer.apple.com/documentation/apple_news/autoplacement
 * @deprecated
 */
export interface AutoPlacementBase {
  enabled?: boolean;
  layout?: AutoPlacementLayout;
}
