import { AnyComponent } from "../any-component";
import { Component } from "../component";
import { ComponentLink } from "../component-link";
import { CollectionDisplay } from "./collection-display";
import { ConditionalContainer } from "./conditional-container";
import { HorizontalStackDisplay } from "./horizontal-stack-display";

/**
 * Base for container-like components
 * @extends {Component}
 */
export interface ContainerComponent extends Component {
  additions?: ComponentLink[];
  conditional?: ConditionalContainer | ConditionalContainer[];
  contentDisplay?: CollectionDisplay | HorizontalStackDisplay;
  components?: AnyComponent[];
}
