import { Fill } from "./fill";
import {
    HorizontalAlignment,
    URI,
    VerticalAlignment,
} from "../primitives";

/**
 * Possible values for an `ImageFill` fillMode field
 */
export type ImageFillMode
    = "fit"
    | "cover";

/**
 * Signature/interface for an `ImageFill` object
 * @see https://developer.apple.com/documentation/apple_news/imagefill
 * @extends {Fill}
 */
export interface ImageFill extends Fill {
    type: "image";
    URL: URI;
    fillMode?: ImageFillMode;
    horizontalAlignment?: HorizontalAlignment;
    verticalAlignment?: VerticalAlignment;
}
