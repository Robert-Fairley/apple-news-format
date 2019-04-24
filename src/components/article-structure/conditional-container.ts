import { ComponentLayout } from "../../article-layout/component-layout";
import { ComponentAnimation } from "../../component-animation";
import {
  Anchor,
  Behavior,
  Condition,
} from "../../primitives";
import { ComponentStyle } from "../../styles/component-styles/component-style";

/**
 * Signature/interface for a `ConditionalContainer` object
 * @see https://developer.apple.com/documentation/apple_news/conditionalcontainer
 */
export interface ConditionalContainer {
  conditions: Condition[];
  anchor?: Anchor;
  animation?: ComponentAnimation;
  behavior?: Behavior;
  hidden?: false;
  layout?: ComponentLayout;
  style?: ComponentStyle;
}
