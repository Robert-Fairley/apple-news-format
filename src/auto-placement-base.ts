import { AutoPlacementLayout } from "./article-layout/auto-placement-layout";

/**
 * Signature/interface for the base object for `AutoPlacement` objects
 * @see https://developer.apple.com/documentation/apple_news/advertisementautoplacement
 */
export interface AutoPlacementBase {
  enabled?: boolean;
  layout?: AutoPlacementLayout;
}
