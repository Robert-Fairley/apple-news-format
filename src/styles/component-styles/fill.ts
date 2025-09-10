import { HorizontalAlignment, SupportedUnits, VerticalAlignment } from "../../primitives";


/**
 * Possible values for `Fill` type field
 */
export type FillType
    = "linear_gradient"
    | "image"
    | "repeatable_image"
    | "video";

/**
 * Possible values for `Fill` attachment field
 */
export type FillAttachment
    = "fixed"
    | "scroll"; // Default

/**
 * Possible values for `Fill` repeat field
 */
export type FillRepeat
    = 'none'
    | 'x'
    | 'y'
    | 'both';

    /**
     * Signature/interface for a `Fill` object
     * @see https://developer.apple.com/documentation/apple_news/fill
     */
export interface Fill {
    type: FillType;
    attachment?: FillAttachment;
    URL?: string;
    repeat?: FillRepeat;
    height?: SupportedUnits;
    width?: SupportedUnits;
    verticalAlignment?: VerticalAlignment;
    horizontalAlignment?: HorizontalAlignment;
}
