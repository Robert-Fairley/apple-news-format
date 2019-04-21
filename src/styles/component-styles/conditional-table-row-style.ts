import { TableRowSelector } from "./table-row-selector";
import { TableRowStyleBase } from "./table-row-style-base";

/**
 * Signature/interface for a `ConditionalTableRowStyle` object
 * @see https://developer.apple.com/documentation/apple_news/conditionaltablerowstyle
 * @extends {TableRowStyleBase}
 */
export interface ConditionalTableRowStyle extends TableRowStyleBase {
  selectors?: TableRowSelector[];
}
