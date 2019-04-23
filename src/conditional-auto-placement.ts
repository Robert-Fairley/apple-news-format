import { AutoPlacementBase } from "./auto-placement-base";
import { Condition } from "./primitives/condition";

/**
 * Signature/interface for a `ConditionalAutoPlacement` object
 * @see https://developer.apple.com/documentation/apple_news/conditionalautoplacement
 * @extends {AutoPlacementBase}
 */
export interface ConditionalAutoPlacement extends AutoPlacementBase {
conditions: Condition[];
}
