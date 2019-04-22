/**
 * Signature/interface for a `MapSpan` object
 * @see https://developer.apple.com/documentation/apple_news/mapspan
 */
export interface MapSpan {
  latitudeDelta: number; // Unsigned Integer, max: 90
  longitudeDelta: number; // Unsigned Integer, max 180
}
