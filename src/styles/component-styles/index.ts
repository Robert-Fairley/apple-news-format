export { Border } from "./border";
export { ColorStop } from "./color-stop";
export { ComponentStyle } from "./component-style";
export { ConditionalComponentStyle } from "./conditional-component-style";
export { ConditionalTableCellStyle } from "./conditional-table-cell-style";
export { ConditionalTableColumnStyle } from "./conditional-table-column-style";
export { ConditionalTableRowStyle } from "./conditional-table-row-style";
export { CornerMask } from "./corner-mask";
export { Fill } from "./fill";
export { GradientFill } from "./gradient-fill";
export { ImageFill } from "./image-fill";
export { VideoFill } from "./video-fill";
export { TableBorder } from "./table-border";
export { TableCellSelector } from "./table-cell-selector";
export { TableCellStyle } from "./table-cell-style";
export { TableColumnSelector } from "./table-column-selector";
export { TableColumnStyle } from "./table-column-style";
export { TableRowSelector } from "./table-row-selector";
export { TableRowStyle } from "./table-row-style";
export { TableStrokeStyle } from "./table-stroke-style";
export { TableStyle } from "./table-style";

import { ComponentStyle } from "./component-style";

/**
 * Signature/interface for the object containing named
 * `ComponentStyle` properties
 * @see https://developer.apple.com/documentation/apple_news/articledocument/componentstyles
 */
export interface ComponentStyles {
  [key: string]: ComponentStyle;
}
