import { Color } from "../../primitives";

/**
 * Signature/interface for the `DropCapStyle` object
 */
export interface DropCapStyle {
    numberOfLines: number; // Integer
    backgroundColor?: Color;
    fontName?: string;
    numberOfCharacters?: number; // Integer
    numberOfRaisedLines?: number; // Integer
    padding?: number; // Integer
    textColor?: Color;
}
