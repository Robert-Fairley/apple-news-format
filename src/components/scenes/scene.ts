import { FadingStickyHeader } from "./fading-sticky-header";
import { ParallaxScaleHeader } from "./parallax-scale-header";

/**
 * Possible values for an Scene object type field
 */
export type SceneType
  = "fading_sticky_header"
  | "parallax_scale";

/**
 * Signature/interface for a `Scene` object
 * @see https://developer.apple.com/documentation/apple_news/scene
 */
export interface SceneBase {
  type: SceneType;
}

export type Scene = FadingStickyHeader | ParallaxScaleHeader