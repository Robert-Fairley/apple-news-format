import {
  Color,
  SupportedUnits,
} from "../primitives";
import { TableStrokeStyle } from "./table-stroke-style";

/**
 * Signature/interface for the base of `TableColumnStyle` objects
 * @see https://developer.apple.com/documentation/apple_news/tablecolumnstyle
 */
export interface TableColumnStyleBase {
  backgroundColor?: Color;
  divider?: TableStrokeStyle;
  minimumWidth?: SupportedUnits | number; // Integer
  width?: number; // Integer
}
