/**
 * Signature/interface for a `TableCellSelector` object
 * @see https://developer.apple.com/documentation/apple_news/tablecellselector
 */
export interface TableCellSelector {
  columnIndex?: number; // Integer
  descriptor: string;
  evenColumns?: boolean;
  evenRows?: boolean;
  oddColumns?: boolean;
  oddRows?: boolean;
  rowIndex?: number; // Unsigned Integer
}
