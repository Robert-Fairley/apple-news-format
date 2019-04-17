import { Fill } from "./fill";
import { ImageFillMode } from "./image-fill";
import {
    HorizontalAlignment,
    URI,
    VerticalAlignment,
} from "../primitives";

/**
 * Signature/intervace for a `VideoFill` object
 * @see https://developer.apple.com/documentation/apple_news/videofill
 * @extends {Fill}
 */
export interface VideoFill extends Fill {
    stillURL: URI;
    type: "video";
    URL: URI;
    fillMode?: ImageFillMode;
    horizontalAlignment?: HorizontalAlignment;
    loop?: boolean;
    verticalAlignment?: VerticalAlignment;
}
