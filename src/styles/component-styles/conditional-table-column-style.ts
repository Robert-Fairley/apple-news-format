import { TableColumnSelector } from "./table-column-selector";
import { TableColumnStyleBase } from "./table-column-style-base";

/**
 * Signature/interface for a `ConditionalTableColumnStyle` object
 * @see https://developer.apple.com/documentation/apple_news/conditionaltablecolumnstyle
 */
export interface ConditionalTableColumnStyle extends TableColumnStyleBase {
  selectors: TableColumnSelector[];
}
