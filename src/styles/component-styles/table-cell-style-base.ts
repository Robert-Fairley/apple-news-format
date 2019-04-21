import {
  Color,
  HorizontalAlignment,
  SupportedUnits,
  VerticalAlignment,
} from "../../primitives";
import { ComponentTextStyle } from "../text-styles/component-text-style";
import { TableBorder } from "./table-border";

/**
 * Signature/interface for the base object for `TableCellStyle`
 * @see https://developer.apple.com/documentation/apple_news/tablecellstyle
 */
export interface TableCellStyleBase {
  backgroundColor?: Color;
  border?: TableBorder;
  height?: SupportedUnits | number; // Integer
  horizontalAlignment?: HorizontalAlignment;
  minimumWidth?: SupportedUnits | number; // Integer
  padding?: SupportedUnits | number; // Integer
  textStyle?: ComponentTextStyle;
  verticalAlignment?: VerticalAlignment;
  width?: number; // Integer
}
