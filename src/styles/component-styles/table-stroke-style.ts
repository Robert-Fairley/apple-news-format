import {
  Color,
  SupportedUnits,
} from "../../primitives";

/**
 * Signature/interface for a `TableStrokeStyle` object.
 * @see https://developer.apple.com/documentation/apple_news/tablestrokestyle
 */
export interface TableStrokeStyle {
  color?: Color;
  style?: "solid";
  width?: SupportedUnits | number; // Integer
}
