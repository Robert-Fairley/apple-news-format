/**
 * Possible values for an Addition object type field
 */
export type AdditionType
  = "link"
  | "calendar_event";

/**
 * Signature/interface for an `Addition` object
 *
 * This is an abstract definition. Do not use this object type directly; use only the objects that extend it.
 * @see https://developer.apple.com/documentation/apple_news/addition
 */
export interface Addition {
  type: AdditionType;
  rangeLength?: number; // Integer
  rangeStart?: number; // Integer
}
