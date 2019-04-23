import { Component } from "../component";
import { MapItem } from "./map-item";
import { MapSpan } from "./map-span";

/**
 * Possible values for map type fields
 */
export type MapType
  = "standard" // Default
  | "hybrid"
  | "satellite";

/**
 * Signature/interface for a base location component object
 * @extends {Component}
 */
export interface LocationComponent extends Component {
  latitude: number; // Float
  longitude: number; // Float
  accessibilityCaption?: string;
  caption?: string;
  items?: MapItem[];
  mapType?: MapType;
  span?: MapSpan;
}
