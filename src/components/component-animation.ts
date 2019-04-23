/**
 * Possible values for a ComponentAnimation type field
 */
export type ComponentAnimationType
  = "appear"
  | "fade_in"
  | "move_in"
  | "scale_fade";

/**
 * Signature/interface for a `ComponentAnimation` object
 * @see https://developer.apple.com/documentation/apple_news/componentanimation
 */
export interface CopmonentAnimation {
  type: ComponentAnimationType;
}
