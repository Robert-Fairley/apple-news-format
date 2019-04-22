import { Component } from "../component";
import { GalleryItem } from "./gallery-item";

/**
 * Possible values for gallery component role fields
 */
export type GalleryComponentRole
  = "gallery"
  | "mosaic";

/**
 * Signature/interface for a base gallery component
 */
export interface GalleryComponent extends Component {
  role: GalleryComponentRole;
  items: GalleryItem[];
}
