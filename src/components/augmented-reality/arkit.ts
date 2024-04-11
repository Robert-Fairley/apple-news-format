import { URI } from "../../primitives";
import { Component } from "../component";

/**
 * Signature/interface for an `ARKit` object
 * @see https://developer.apple.com/documentation/apple_news/arkit
 * @extends {Component}
 */
export interface ARKit extends Component {
  caption: string;
  role: "arkit";
  URL: URI;
  accessibilityCaption?: string;
  explicitContent?: boolean;
}
