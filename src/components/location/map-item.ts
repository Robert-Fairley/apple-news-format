/**
 * Signature/interface for a `MapItem` object
 * @see https://developer.apple.com/documentation/apple_news/mapitem
 */
export interface MapItem {
  latitude: number; // Float
  longitude: number; // Float
  caption?: string;
}
