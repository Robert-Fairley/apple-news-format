export type StartingPosition
  = "left"
  | "right";

/**
 * Signature/interface for a `MoveInAnimation` object
 * @see https://developer.apple.com/documentation/apple_news/moveinanimation
 */
export interface MoveInAnimation {
  type: "move_in";
  preferredStartingPosition?: StartingPosition;
  userControllable?: boolean;
}
