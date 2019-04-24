/**
 * Possible values for a ComponentAnimation type field
 */
export type ComponentAnimationType
  = "appear"
  | "fade_in"
  | "move_in"
  | "scale_fade";

export type StartingPosition
  = "left"
  | "right";

/**
 * Signature/interface for a `ComponentAnimation` object
 * @see https://developer.apple.com/documentation/apple_news/componentanimation
 */
export interface CopmonentAnimation {
  type: ComponentAnimationType;
  preferredStartingPosition?: StartingPosition;
  userControllable?: boolean;
  initialAlpha?: number; // Unsigned Float, max: 1
  initialScale?: number; // Unsigned Float, max: 1
}
