import { Component } from "../component";
import { ComponentLink } from "../component-link";
import { CollectionDisplay  } from "./collection-display";
import { ConditionalContainer } from "./conditional-display";
import { HorizontalStackDisplay } from "./horizontal-stack-display";

/**
 * Expression for a possible range of types belonging to a given
 * component's property
 */
export type ComponentFieldValue
  = string
  | number
  | boolean
  | string[];

/**
 * Expression for a field containing a range of components
 */
export type MemberComponent
  = Component
  & { [key: string]: ComponentFieldValue };

/**
 * Signature/interface for a `Container` object
 * @see https://developer.apple.com/documentation/apple_news/container
 * @extends {Component}
 */
export interface Container extends Component {
  role: "container";
  additions?: ComponentLink[];
  conditional?: ConditionalContainer[];
  contentDisplay?: CollectionDisplay | HorizontalStackDisplay;
  components?: MemberComponent[];
}
