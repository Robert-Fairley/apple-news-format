import { Container } from "./container";

/**
 * Signature/interface for an `Aside` object
 * @see https://developer.apple.com/documentation/apple_news/aside
 * @extends {Container}
 */
export interface Aside extends Container {
  role: "aside";
}
