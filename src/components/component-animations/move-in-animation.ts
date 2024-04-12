import { ComponentAnimationBase } from "./component-animation";

export type StartingPosition
  = "left"
  | "right";

/**
 * Signature/interface for a `MoveInAnimation` object
 * @see https://developer.apple.com/documentation/apple_news/moveinanimation
 * @extends {ComponentAnimationBase}
 */
export interface MoveInAnimation extends ComponentAnimationBase {
  type: "move_in";
  preferredStartingPosition?: StartingPosition;
  userControllable?: boolean;
}
