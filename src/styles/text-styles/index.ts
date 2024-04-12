export { ComponentTextStyle } from "./component-text-style";
export { ConditionalComponentTextStyle } from "./conditional-component-text-style";
export { ConditionalTextStyle } from "./conditional-text-style";
export { DropCapStyle } from "./drop-cap-style";
export { InlineTextStyle } from "./inline-text-style";
export { ListItemStyle } from "./list-item-style";
export { TextShadow } from "./text-shadow"
export { TextStrokeStyle } from "./text-stroke-style";
export { TextStyle } from "./text-style";

import { ComponentTextStyle } from "./component-text-style";
import { TextStyle } from "./text-style";

export interface ComponentTextStyles {
  [key: string]: ComponentTextStyle;
}

export interface TextStyles {
  [key: string]: TextStyle;
}
