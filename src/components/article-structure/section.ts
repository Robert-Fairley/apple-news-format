import { Scene } from "../scene";
import { ContainerComponent } from "./container-component";

/**
 * Signature/interface for a `Section` object
 * @see https://developer.apple.com/documentation/apple_news/section-ka8
 * @extends {ContainerComponent}
 */
export interface Section extends ContainerComponent {
  role: "section";
  scene?: Scene;
}
