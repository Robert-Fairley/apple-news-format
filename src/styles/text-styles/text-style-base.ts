import {
    Color,
    FontFamily,
    FontStyle,
    FontWeight,
    FontWidth,
    Shadow,
    TextDecoration,
    TextTransform,
    TextVerticalAlignment,
} from "../../primitives";
import { ListItemStyle } from "./list-item-style";
import { TextStrokeStyle } from "./text-stroke-style";

/**
 * Base text style interface
 * @see https://developer.apple.com/documentation/apple_news/textstyle
 */
export interface TextStyleBase {
    backgroundColor?: Color | "none";
    fontFamily?: FontFamily | "system";
    fontName?: string;
    fontSize?: number; // Integer
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    fontWidth?: FontWidth;
    orderedListItem?: ListItemStyle | "none";
    strikethrough?: TextDecoration | boolean;
    stroke?: TextStrokeStyle | "none";
    textColor?: Color;
    textShadow?: Shadow | "none";
    textTransform?: TextTransform;
    tracking?: number; // Integer | Float
    underline?: TextDecoration | boolean;
    unorderedListItems?: ListItemStyle | "none";
    verticalAlignment?: TextVerticalAlignment;
}
