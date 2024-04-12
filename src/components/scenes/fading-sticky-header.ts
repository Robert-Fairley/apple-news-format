import { Color } from "../../primitives";
import { SceneBase } from "./scene";

/**
 * Signature/interface for a `FadingStickyHeader` object
 * @see https://developer.apple.com/documentation/apple_news/fadingstickyheader
 * @extends {SceneBase}
 */
export interface FadingStickyHeader extends SceneBase {
  type: "fading_sticky_header";
  fadeColor?: Color
}
