import { ComponentBase } from "./component-base";
import { ConditionalComponent } from "./conditional-component";

/**
 * Signature/interface for a `Component` object
 * @see https://developer.apple.com/documentation/apple_news/component
 * @extends {ComponentBase}
 */
export interface Component extends ComponentBase {
  conditional?: ConditionalComponent | ConditionalComponent[];
}
