import { Component } from "../component";

/**
 * Possible values for a bannerType field
 */
export type BannerType
  = "any"
  | "standard"
  | "double_height"
  | "large";

  /**
   * Signature/interface for a `BannerAdvertisement` object
   * @see https://developer.apple.com/documentation/apple_news/banneradvertisement
   * @extends {Component}
   */
export interface BannerAdvertisement extends Component {
  role: "banner_advertisement";
  bannerType?: BannerType;
}
