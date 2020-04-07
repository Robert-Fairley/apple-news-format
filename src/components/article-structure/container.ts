import { ContainerComponent } from "./container-component";

/**
 * Signature/interface for a `Container` object
 * @see https://developer.apple.com/documentation/apple_news/container
 * @extends {Component}
 */
export interface Container extends ContainerComponent {
  role: "container";
}
