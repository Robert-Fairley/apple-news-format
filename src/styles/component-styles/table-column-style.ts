import { ConditionalTableColumnStyle } from "./conditional-table-column-style";
import { TableColumnStyleBase } from "./table-column-style-base";

/**
 * Signature/interface for a `TableColumnStyle` object
 * @see https://developer.apple.com/documentation/apple_news/tablecolumnstyle
 */
export interface TableColumnStyle extends TableColumnStyleBase {
  conditional?: ConditionalTableColumnStyle[];
}
