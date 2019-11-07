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
    columnSpan?: number; // Integer - minimum 1
    columnStart?: number; // Unsigned Integer
    horizontalContentAlignment?: HorizontalAlignment;
    IgnoreDocumentParameters?: boolean | IgnoreDocumentParameters;
    ignoreDocumentMargin?: boolean | IgnoreDocumentParameters;
    margin?: Margin | number; // Integer
    maximumContentWidth?: SupportedUnits | number; // Integer
    minimumHeight?: SupportedUnits | number; // Integer
    minimumWidth?: SupportedUnits | number; // Integer
    maximumWidth?: SupportedUnits | number; // Integer
    padding?: SupportedUnits | Padding | number; // Integer
}
