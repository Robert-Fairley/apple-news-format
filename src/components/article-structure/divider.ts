import { StrokeStyle } from "../../primitives";
import { Component } from "../component";

/**
 * Signature/interface for a `Divider` object
 * @see https://developer.apple.com/documentation/apple_news/divider
 * @extends {Component}
 */
export interface Divider extends Component {
  role: "divider";
  stroke?: StrokeStyle;
}
