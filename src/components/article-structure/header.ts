import { Container } from "./container";

/**
 * Signature/interface for a `Header` object
 * @see https://developer.apple.com/documentation/apple_news/header
 * @extends {Container}
 */
export interface Header extends Container {
  role: "header";
}
