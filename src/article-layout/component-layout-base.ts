import {
    HorizontalAlignment,
    Margin,
    Padding,
    SupportedUnits,
} from "../primitives";

/**
 * Possible values for ignoring any given document parameters
 * for gutters or margins, etc.
 */
export type IgnoreDocumentParameters
    = "none"
    | "left"
    | "right"
    | "both";

/**
 * Signature/interface for the shared properties of component layout objects
 * @see https://developer.apple.com/documentation/apple_news/componentlayout
 */
export interface ComponentLayoutBase {
    columnSpan?: number; // Unisigned Integer - minimum 1
    columnStart?: number; // Unsigned Integer
    horizontalContentAlignment?: HorizontalAlignment;
    ignoreDocumentGutter?: boolean | IgnoreDocumentParameters;
    ignoreDocumentMargin?: boolean | IgnoreDocumentParameters;
    ignoreViewportPadding?: boolean | IgnoreDocumentParameters;
    margin?: Margin | number; // Integer
    maximumContentWidth?: SupportedUnits | number;
    minimumHeight?: SupportedUnits | number;
    minimumWidth?: SupportedUnits | number;
    maximumWidth?: SupportedUnits | number;
    padding?: SupportedUnits | Padding | number;
}
