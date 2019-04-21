import { TableStrokeStyle } from "./table-stroke-style";

/**
 * Signature/interface for a `TableBorder` object
 * @see https://developer.apple.com/documentation/apple_news/tableborder
 */
export interface TableBorder {
  all?: TableStrokeStyle;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
}
