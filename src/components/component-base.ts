import { ComponentLayout } from "../article-layout";
import { Anchor } from "../article-layout";
import { ComponentStyle } from "../styles/component-styles";
import { Behavior } from "./behavior";
import { ComponentAnimation } from "./component-animation";

/**
 * Signature/interface for common fields to component objects
 */
export interface ComponentBase {
  role?: string; // ComponentTypes
  anchor?: Anchor;
  animation?: ComponentAnimation;
  behavior?: Behavior;
  allowAutoplacedAds?: boolean;
  hidden?: boolean;
  identifier?: string;
  layout?: ComponentLayout | string;
  style?: ComponentStyle | string;
}
