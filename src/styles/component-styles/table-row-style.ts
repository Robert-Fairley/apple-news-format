import { ConditionalTableRowStyle } from "./conditional-table-row-style";
import { TableRowStyleBase } from "./table-row-style-base";

/**
 * Signature/interface for a `TableRowStyle` object
 * @see https://developer.apple.com/documentation/apple_news/tablerowstyle
 * @extends {TableRowStyleBase}
 */
export interface TableRowStyle extends TableRowStyleBase {
  conditional?: ConditionalTableRowStyle[];
}
