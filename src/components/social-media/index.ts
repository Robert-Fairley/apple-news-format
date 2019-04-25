import { URI } from "../../primitives";
import { Component } from "../component";

/**
 * Signature/interface for a `SocialMediaComponent` object
 * @see https://developer.apple.com/documentation/apple_news/instagram
 * @see https://developer.apple.com/documentation/apple_news/facebook
 * @see https://developer.apple.com/documentation/apple_news/tweet
 * @extends {Component}
 */
export interface SocialMediaComponent extends Component {
  URL: URI;
}
