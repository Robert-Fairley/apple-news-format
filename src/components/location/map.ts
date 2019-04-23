import { LocationComponent } from "./location-component";

/**
 * Signature/interface for a `Map` object
 * @see https://developer.apple.com/documentation/apple_news/map
 * @extends {LocationComponent}
 */
export interface Map extends LocationComponent {
  role: "map";
}
