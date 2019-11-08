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
    /**
     * A number that indicates how many columns the component spans, based on the number of columns in the document.
     * Minimum: 1
     * @type Unsigned Integer
     */
    columnSpan?: number; // Unisigned Integer - minimum 1
    /**
     * A number that indicates which column the component‘s start position is in,
     * based on the number of columns in the document or parent container.
     * Minimum: 0
     * @type Unsigned Integer
     */
    columnStart?: number; // Unsigned Integer
    /**
     * A string value that sets the alignment of the content within the component.
     * This property applies only when the width of the content is less than the width of the component.
     * @type boolean | HorizontalAlignment
     */
    horizontalContentAlignment?: HorizontalAlignment;
    /**
     * A value that indicates whether the gutters (if any) to the left and right of the component should be ignored.
     * The gutter size is defined in the Layout object at the root level of the document.
     * @type boolean | IgnoreDocumentParameters
     */
    ignoreDocumentGutter?: boolean | IgnoreDocumentParameters;
    /**
     * A value that indicates whether the component should respect or ignore the document’s margins.
     * Ignoring document margins positions the component based on the document's width and margin.
     * @type boolean | IgnoreDocumentParameters
     */
    ignoreDocumentMargin?: boolean | IgnoreDocumentParameters;
    /**
     * A value that indicates whether the component should respect or ignore the viewport padding.
     * Ignoring viewport padding positions the component at the edge of the display screen.
     * This property affects the layout only if the component is in the first or last column.
     * @type boolean | IgnoreDocumentParameters
     */
    ignoreViewportPadding?: boolean | IgnoreDocumentParameters;
    /**
     * A value that sets the margins for the top and bottom of the component, as a single integer
     * that gets applied to the top and bottom margins, or as an object containing separate properties for top and bottom.
     * @type Margin | Integer
     */
    margin?: Margin | number; // Integer
    /**
     * A value that sets the maximum width of the content within the component.
     * Specify this value as a number in points or using one of the available units of measure for components.
     * @type SupportedUnits | Integer
     */
    maximumContentWidth?: SupportedUnits | number; // Integer
    /**
     * A value that sets the minimum height of the component. A component is taller than its
     * defined minimumHeight when the contents require the component to be taller.
     * The minimum height can be defined as a number in points or using one of the
     * available units of measure for components.
     * @type SupportedUnits | Integer
     */
    minimumHeight?: SupportedUnits | number; // Integer
    /**
     * A value that defines the minimum width of the layout when used within a Container
     * with HorizontalStackDisplay as the specified contentDisplay type. The minimum width
     * can be defined as a number in points or using one of the available units of measure for components.
     * @type SupportedUnits | Integer
     */
    minimumWidth?: SupportedUnits | number; // Integer
    /**
     * A value that defines the maximum width of the layout when used within a Container
     * with HorizontalStackDisplay as the specified contentDisplay type. The maximum width can be
     * defined as a number in points or using one of the available units of measure for components.
     * @type SupportedUnits | Integer
     */
    maximumWidth?: SupportedUnits | number; // Integer
    /**
     * A value that defines the padding between the content of the component and the edges of the component.
     * Padding can be defined as a number in points or using one of the available units of measure for components.
     * @type SupportedUnits | Padding | Integer
     */
    padding?: SupportedUnits | Padding | number; // Integer
}
