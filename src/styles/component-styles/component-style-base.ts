import { Color } from "../../primitives";
import { Border } from "./border";
import { CornerMask } from "./corner-mask";
import { Fill } from "./fill";
import { GradientFill } from "./gradient-fill";
import { ImageFill } from "./image-fill";
import { TableStyle } from "./table-style";
import { VideoFill } from "./video-fill";

/**
 * Signature/interface for a `ComponentStyle` base object
 * @see https://developer.apple.com/documentation/apple_news/componentstyle
 * @extends {ComponentStyleBase}
 */
export interface ComponentStyleBase {
  backgroundColor?: Color;
  border?: Border;
  fill?: Fill | GradientFill | ImageFill | VideoFill;
  mask?: CornerMask;
  opacity?: number; // Float 0.0 - 1.0
  tableStyle?: TableStyle; // @todo
}
