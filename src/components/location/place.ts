import { LocationComponent } from "./location-component";

/**
 * Signature/interface for a `Place` object
 * @see https://developer.apple.com/documentation/apple_news/place
 * @extends {LocationComponent}
 */
export interface Place extends LocationComponent {
  role: "place";
}
