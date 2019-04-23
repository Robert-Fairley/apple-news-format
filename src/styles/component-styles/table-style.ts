import { TableCellStyle } from "./table-cell-style";
import { TableColumnStyle } from "./table-column-style";
import { TableRowStyle } from "./table-row-style";

/**
 * Signature/interface for a `TableStyle` object
 * @see https://developer.apple.com/documentation/apple_news/tablestyle
 */
export interface TableStyle {
  cells?: TableCellStyle;
  columns?: TableColumnStyle;
  headerCells?: TableCellStyle;
  headerColumns?: TableColumnStyle;
  headerRows?: TableRowStyle;
  rows?: TableRowStyle;
}
