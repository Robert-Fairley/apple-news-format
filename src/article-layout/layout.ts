/**
 * Signature/interface for the `Layout` object
 * @see https://developer.apple.com/documentation/apple_news/layout
 */
export interface Layout {
    columns: number; // Integer - Minimum: 1
    width: number; // Integer - Minimum 1
    gutter?: number; // Integer
    margin?: number; // Integer
}
