import { Scene } from "../scene";
import { Container } from "./container";

/**
 * Signature/interface for a `Chapter` object
 * @see https://developer.apple.com/documentation/apple_news/chapter
 * @extends {Container}
 */
export interface Chapter extends Container {
  role: "chapter";
  scene?: Scene;
}
