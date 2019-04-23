/**
 * Signature/interface for a `TableRowSelector` object
 * @see https://developer.apple.com/documentation/apple_news/tablerowselector
 */
export interface TableRowSelector {
  descriptor?: string;
  rowIndex?: number; // Integer
  odd?: boolean;
  even?: boolean;
}
