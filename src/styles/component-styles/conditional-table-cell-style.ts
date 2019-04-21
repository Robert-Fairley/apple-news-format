import { TableBorder } from "./table-border";
import { TableCellSelector } from "./table-cell-selector";
import { TableCellStyleBase } from "./table-cell-style-base";

/**
 * Signature/interface for a `ConditionalTableCellStyle` object
 * @see https://developer.apple.com/documentation/apple_news/conditionaltablecellstyle
 */
export interface ConditionalTableCellStyle extends TableCellStyleBase {
  selectors: TableCellSelector[];
}
