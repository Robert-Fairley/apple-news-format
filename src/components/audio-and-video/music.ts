import { URI } from "../../primitives";
import { AudioVideoComponent } from "./audio-video-component";

/**
 * Signature/interface for a `Music` object
 * @see https://developer.apple.com/documentation/apple_news/music
 * @extends {AudioVideoComponent}
 */
export interface Music extends AudioVideoComponent {
  role: "music";
  accessibilityCaption?: string;
  caption?: string;
  imageURL: URI;
}
