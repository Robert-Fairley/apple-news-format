import { Scene } from "../scene";
import { ContainerComponent } from "./container-component";

/**
 * Signature/interface for a `Chapter` object
 * @see https://developer.apple.com/documentation/apple_news/chapter
 * @extends {ContainerComponent}
 */
export interface Chapter extends ContainerComponent {
  role: "chapter";
  scene?: Scene;
}
