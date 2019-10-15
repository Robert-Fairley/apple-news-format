import { AnyComponent } from "../any-component";
import { Component } from "../component";
import { ComponentLink } from "../component-link";
import { CollectionDisplay } from "./collection-display";
import { ConditionalContainer } from "./conditional-container";
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
 * Possible values for a container component role
 */
export type ContainerRoles
  = "container"
  | "article_link"
  | "header"
  | "chapter"
  | "aside"
  | "section";

/**
 * Signature/interface for a `Container` object
 * @see https://developer.apple.com/documentation/apple_news/container
 * @extends {Component}
 */
export interface Container extends Component {
  role: ContainerRoles;
  additions?: ComponentLink[];
  conditional?: ConditionalContainer | ConditionalContainer[];
  contentDisplay?: CollectionDisplay | HorizontalStackDisplay;
  components?: AnyComponent[];
}
