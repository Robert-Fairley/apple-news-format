import { Color } from "./color";
import { ComponentShadowOffset } from "./component-shadow-offset";
import { SupportedUnits } from "./supported-units";
import { TextShadowOffset } from "./text-shadow-offset";

/**
 * Signature/interface for a `Shadow` base object
 */
export interface Shadow {
    color: Color;
    radius: number | SupportedUnits;
    offset?: TextShadowOffset | ComponentShadowOffset;
    opacity?: number; // Float 0..1
}
