import { Color } from "./color";

/**
 * Expression of possible values for `fontStyle` fields
 */
export type FontStyle
    = "normal"
    | "italic"
    | "oblique";

/**
 * Expression of possible values for `fontWeight` fields
 */
export type FontWeight
    = 100   | 200   | 300   | 400   | 500
    | 600   | 700   | 800   | 900
    | "100" | "200" | "300" | "400" | "500"
    | "600" | "700" | "800" | "900"
    | "thin"      | "extra-light" | "extralight"  | "ultra-light" | "light"      | "regular"
    | "normal"    | "book"        | "roman"       | "medium"      | "semi-bold"  | "semibold"
    | "demi-bold" | "demibold"    | "bold"        | "extra-bold"  | "extrabold"  | "ultra-bold"
    | "ultrabold" | "black"       | "heavy"       | "lighter"     | "bolder";

/**
 * Expression of possible values for `fontWidth` fields
 */
export type FontWidth
    = "normal" // Default
    | "ultra-condensed" | "extra-condensed" | "condensed"      | "semi-condensed"
    | "semi-expanded"   | "expanded"        | "extra-expanded" | "ultra-expanded";

/**
 * Expression of possible values for `textTransform` fields
 */
export type TextTransform
    = "uppercase"
    | "lowercase"
    | "capitalize"
    | "none"; // Default

/**
 * Expression of possible values for `verticalAlignment` fields
 */
export type VerticalAlignment
    = "superscript"
    | "subscript"
    | "baseline";

/**
 * Expression of possible values for `HorizontalAlignment` fields
 */
export type HorizontalAlignment = 'left' | 'center' | 'right'

/**
 * Signature/interface for a `TextDecoration` object.
 */
export interface TextDecoration {
    color?: Color;
}
