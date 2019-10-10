import { AutoPlacementBase } from "./auto-placement-base";
import { ConditionalAutoPlacement } from "./conditional-auto-placement";
import { SupportedUnits } from "./primitives/supported-units";

/**
 * Possible values for `BannerType` field
 */
export type BannerType
  = "any"
  | "standard"
  | "double_height"
  | "large";

/**
 * Signature/interface for an `AdvertisementAutoPlacement` object
 * @see https://developer.apple.com/documentation/apple_news/advertisementautoplacement
 * @extends {AutoPlacementBase}
 */
export interface AdvertisementAutoPlacement extends AutoPlacementBase {
  bannerType?: BannerType;
  conditional?: ConditionalAutoPlacement | ConditionalAutoPlacement[];
  distanceFromMedia?: SupportedUnits | number; // Integer
  frequency?: number; // Unsigned Integer, max: 10
}
