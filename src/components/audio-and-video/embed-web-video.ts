import { URI } from "../../primitives";
import { AudioVideoComponent } from "./audio-video-component";

/**
 * Signature/interface for an `EmbedWebVideo` object
 * @see https://developer.apple.com/documentation/apple_news/embedwebvideo
 * @extends {AudioVideoComponent}
 */
export interface EmbedWebVideo extends AudioVideoComponent {
  role: "embedwebvideo" | "embedvideo";
  aspectRatio?: number; // Float
  accessibilityCaption?: string;
  caption?: string;
}
