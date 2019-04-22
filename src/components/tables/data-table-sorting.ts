/**
 * Possible values for a sorting direction field
 */
export type DataTableSortingDirection
  = "ascending"
  | "descending";

/**
 * Signature/interface for a `DataTableSorting` object
 * @see https://developer.apple.com/documentation/apple_news/datatablesorting
 */
export interface DataTableSorting {
  descriptor: string;
  direction: DataTableSortingDirection;
}
