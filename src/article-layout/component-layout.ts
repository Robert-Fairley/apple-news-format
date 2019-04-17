import { ComponentLayoutBase } from "./component-layout-base";
import { ConditionalComponentLayout } from "./conditional-component-layout";

/**
 * Signature/interface for a `ComponentLayout` object
 * @see https://developer.apple.com/documentation/apple_news/componentlayout
 * @extends {ComponentLayoutBase}
 */
export interface ComponentLayout extends ComponentLayoutBase {
    conditional?: ConditionalComponentLayout[];
}
