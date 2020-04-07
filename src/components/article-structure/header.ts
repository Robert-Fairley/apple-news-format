import { ContainerComponent } from "./container-component";

/**
 * Signature/interface for a `Header` object
 * @see https://developer.apple.com/documentation/apple_news/header
 * @extends {ContainerComponent}
 */
export interface Header extends ContainerComponent {
  role: "header";
}
