import { URI } from "../../primitives";
import { Component } from "../component";

/**
 * Possible values for an audio/video component role field
 */
export type AudioVideoComponentRole
  = "audio"
  | "music"
  | "video"
  | "embedwebvideo"
  | "embedvideo";

/**
 * Signature/interface for an Audio/Video component common fields
 * @extends {Component}
 */
export interface AudioVideoComponent extends Component {
  role: AudioVideoComponentRole;
  URL: URI;
  explicitContent?: boolean;
}
