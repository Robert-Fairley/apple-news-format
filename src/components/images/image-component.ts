import { URI } from "../../primitives";
import { Component } from "../component";
import { ComponentLink } from "../component-link";
import { CaptionDescriptor } from "./caption-descriptor";

/**
 * Possible values for image component `role` fields
 */
export type ImageComponentRole
  = "image"
  | "photo"
  | "figure"
  | "portrait"
  | "logo"
  | "article_thumbnail";

/**
 * Signature/interface for a base image component object
 */
export interface ImageComponent extends Component {
  role: ImageComponentRole;
  URL: URI;
  accessibilityCaption?: string;
  caption?: CaptionDescriptor | string;
  additions?: ComponentLink[];
  explicitContent?: boolean;
}
