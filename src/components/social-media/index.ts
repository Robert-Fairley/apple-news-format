import { URI } from "../../primitives";
import { Component } from "../component";

type SocialMediaRole
  = "instagram"
  | "facebook_post"
  | "tiktok"
  | "tweet";

/**
 * Signature/interface for a `SocialMediaComponent` object
 * @see https://developer.apple.com/documentation/apple_news/instagram
 * @see https://developer.apple.com/documentation/apple_news/facebookpost
 * @see https://developer.apple.com/documentation/apple_news/tiktok
 * @see https://developer.apple.com/documentation/apple_news/tweet
 * @extends {Component}
 */
export interface SocialMediaComponent extends Component {
  role: SocialMediaRole;
  URL: URI;
}
