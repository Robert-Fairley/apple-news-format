/**
 * Possible values for a Behavior object type field
 */
export type BehaviorType
  = "background_motion"
  | "background_parallax"
  | "motion"
  | "parallax"
  | "springy";

/**
 * Signature/interface for a `Behavior` object
 * @see https://developer.apple.com/documentation/apple_news/behavior
 */
export interface Behavior {
  type: BehaviorType;
}
