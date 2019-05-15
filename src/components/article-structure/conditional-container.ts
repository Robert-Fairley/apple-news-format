import { Anchor } from "../../article-layout";
import { ComponentLayout } from "../../article-layout/component-layout";
import {
  Condition,
} from "../../primitives";
import { ComponentStyle } from "../../styles/component-styles/component-style";
import { Behavior } from "../behavior";
import { ComponentAnimation } from "../component-animation";

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
