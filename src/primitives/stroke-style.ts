import { Color } from "./color";
import { SupportedUnits } from "./supported-units";

/**
 * Possible values for `StrokeStyle` style field
 */
export type StrokeStyleStyle
    = "solid"
    | "dashed"
    | "dotted";

/**
 * Signature/interface for `StrokeStyle` objects
 * @see https://developer.apple.com/documentation/apple_news/strokestyle
 */
export interface StrokeStyle {
    color?: Color;
    style?: StrokeStyleStyle;
    width?: SupportedUnits | number; // Integer
}
