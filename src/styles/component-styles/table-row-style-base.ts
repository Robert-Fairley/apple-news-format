import {
  Color,
  SupportedUnits,
} from "../../primitives";
import { TableStrokeStyle } from "./table-stroke-style";

/**
 * Signature/interface for a `TableRowStyle` base object
 * @see https://developer.apple.com/documentation/apple_news/tablerowstyle
 */
export interface TableRowStyleBase {
  backgroundColor?: Color;
  divider?: TableStrokeStyle;
  height?: SupportedUnits | number; // Integer
}
