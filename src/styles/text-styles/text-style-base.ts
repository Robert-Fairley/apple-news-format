import {
    Color,
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
    backgroundColor?: Color;
    fontFamily?: string;
    fontName?: string;
    fontSize?: number; // Integer
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    fontWidth?: FontWidth;
    orderedListItem?: ListItemStyle;
    strikethrough?: TextDecoration | boolean;
    stroke?: TextStrokeStyle;
    textColor?: Color;
    textShadow?: Shadow;
    textTransform?: TextTransform;
    tracking?: number; // Integer | Float
    underline?: TextDecoration | boolean;
    unorderedListItems?: ListItemStyle;
    verticalAlignment?: TextVerticalAlignment;
}
