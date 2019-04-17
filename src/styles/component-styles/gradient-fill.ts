import { ColorStop } from "./color-stop";
import { Fill } from "./fill";

/**
 * Signature/interface for `GradientFill` objects
 * @see https://developer.apple.com/documentation/apple_news/gradientfill
 * @extends {Fill}
 */
export interface GradientFill extends Fill {
    colorStops: ColorStop[];
    type: "linear_gradient";
}
