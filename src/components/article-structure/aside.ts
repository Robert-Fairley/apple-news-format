import { ContainerComponent } from "./container-component";

/**
 * Signature/interface for an `Aside` object
 * @see https://developer.apple.com/documentation/apple_news/aside
 * @extends {ContainerComponent}
 */
export interface Aside extends ContainerComponent {
  role: "aside";
}
