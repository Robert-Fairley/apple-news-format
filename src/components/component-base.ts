import { ComponentLayout } from "../article-layout";
import { Anchor } from "../primitives";
import { ComponentStyle } from "../styles/component-styles";
import { Behavior } from "./behavior";
import { ComponentAnimation } from "./component-animation";

export interface ComponentBase {
  role?: string; // ComponentTypes
  anchor?: Anchor;
  animation?: ComponentAnimation;
  behavior?: Behavior;
  hidden?: boolean;
  identifier?: string;
  layout?: ComponentLayout | string;
  style?: ComponentStyle | string;
}
