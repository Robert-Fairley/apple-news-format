import { StrokeStyle } from "../../primitives";
import { ContainerComponent } from "./container-component";

/**
 * Signature/interface for a `Divider` object
 * @see https://developer.apple.com/documentation/apple_news/divider
 * @extends {ContainerComponent}
 */
export interface Divider extends ContainerComponent {
  role: "divider";
  stroke?: StrokeStyle;
}
