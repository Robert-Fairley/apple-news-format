/**
 * Signature/interface for a `TableColumnSelector` object
 * @see https://developer.apple.com/documentation/apple_news/tablecolumnselector
 */
export interface TableColumnSelector {
  columnIndex?: number; // Integer
  descriptor?: string;
  odd?: boolean;
  even?: boolean;
}
