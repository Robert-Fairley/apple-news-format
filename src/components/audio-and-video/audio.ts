import { URI } from "../../primitives";
import { AudioVideoComponent } from "./audio-video-component";

/**
 * Signature/interface for an `Audio` object
 * @see https://developer.apple.com/documentation/apple_news/audio
 * @extends {AudioVideoComponent}
 */
export interface Audio extends AudioVideoComponent {
  role: "audio";
  accessibilityCaption?: string;
  imageURL?: URI;
}
