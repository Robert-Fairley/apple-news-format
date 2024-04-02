import { SceneBase } from "./scene";

/**
 * Signature/interface for a `ParallaxScaleHeader` object
 * @see https://developer.apple.com/documentation/apple_news/parallaxscaleheader
 * @extends {SceneBase}
 */
export interface ParallaxScaleHeader extends SceneBase {
  type: "parallax_scale";
}
