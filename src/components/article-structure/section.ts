import { Scene } from "../scene";
import { Container } from "./container";

/**
 * Signature/interface for a `Section` object
 * @see https://developer.apple.com/documentation/apple_news/section-ka8
 * @extends {Container}
 */
export interface Section extends Container {
  role: "section";
  scene?: Scene;
}
