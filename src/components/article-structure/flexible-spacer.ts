import { Component } from "../component";

/**
 * Signature/interface for a `FlexibleSpacer` object
 * @see https://developer.apple.com/documentation/apple_news/flexiblespacer
 * @extends {Component}
 */

export interface FlexibleSpacer extends Component {
  role: "spacer";
}
