import { ConditionalTableCellStyle } from "./conditional-table-cell-style";
import { TableCellStyleBase } from "./table-cell-style-base";

/**
 * Signature/interface for a `TableCellStyle` object
 * @see https://developer.apple.com/documentation/apple_news/tablecellstyle
 */
export interface TabelCellStyle extends TableCellStyleBase {
  conditional?: ConditionalTableCellStyle[];
}
