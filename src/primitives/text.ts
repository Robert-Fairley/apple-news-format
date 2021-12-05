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
 * Expression of possible values for `fontFamily` fields
 */
export type FontFamily =
  | "Academy Engraved LET"
  | "Al Nile"
  | "American Typewriter"
  | "Apple Color Emoji"
  | "Apple SD Gothic Neo"
  | "Arial"
  | "Arial Hebrew"
  | "Arial Rounded MT Bold"
  | "Avenir"
  | "Avenir Next"
  | "Avenir Next Condensed"
  | "Baskerville"
  | "Bodoni 72"
  | "Bodoni 72 Oldstyle"
  | "Bodoni 72 Smallcaps"
  | "Bodoni Ornaments"
  | "Bradley Hand"
  | "Chalkboard SE"
  | "Cochin"
  | "Copperplate"
  | "Courier"
  | "Courier New"
  | "DIN Alternate"
  | "DIN Condensed"
  | "Didot"
  | "Euphemia UCAS"
  | "Farah"
  | "Futura"
  | "Georgia"
  | "Gill Sans"
  | "Heiti SC"
  | "Heiti TC"
  | "Helvetica"
  | "Helvetica Neue"
  | "Hiragino Maru Gothic ProN"
  | "Hiragino Mincho ProN"
  | "Hiragino Sans"
  | "Hoefler Text"
  | "ITC Franklin Gothic Std"
  | "Iowan Old Style"
  | "Marion"
  | "Marker Felt"
  | "Menlo"
  | "Noteworthy"
  | "Optima"
  | "Palatino"
  | "Papyrus"
  | "Party LET"
  | "PingFang HK"
  | "PingFang SC"
  | "PingFang TC"
  | "Savoye LET"
  | "Snell Roundhand"
  | "Superclarendon"
  | "Thonburi"
  | "Times New Roman"
  | "Trebuchet MS"
  | "Verdana"
  | "Zapf Dingbats"
  | "Zapfino";

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
 * Signature/interface for a `TextDecoration` object.
 */
export interface TextDecoration {
    color?: Color;
}

/**
 * Signature/interface for a `textFormat` field
 */
export type TextFormat
    = "html"
    | "markdown"
    | "none";
