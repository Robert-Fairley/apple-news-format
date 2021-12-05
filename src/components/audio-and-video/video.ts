import { URI } from "../../primitives";
import { AudioVideoComponent } from "./audio-video-component";

/**
 * Signature/interface for a `Video` object
 * @see https://developer.apple.com/documentation/apple_news/video
 * @extends {AudioVideoComponent}
 */
export interface Video extends AudioVideoComponent {
  role: "video";
  accessibilityCaption?: string;
  aspectRatio: number; // Float
  caption?: string;
  stillURL?: URI;
}
