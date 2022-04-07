import { ConditionalComponent } from "../conditional-component";
import { CollectionDisplay } from "./collection-display";
import { HorizontalStackDisplay } from "./horizontal-stack-display";

/**
 * Signature/interface for a `ConditionalContainer` object
 * @see https://developer.apple.com/documentation/apple_news/conditionalcontainer
 */
export interface ConditionalContainer extends ConditionalComponent {
  contentDisplay?: CollectionDisplay | HorizontalStackDisplay;
}
