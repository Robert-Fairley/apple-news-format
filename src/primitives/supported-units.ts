/**
 * Expression of the string type for supported measurement units
 * @see https://developer.apple.com/documentation/apple_news/supportedunits
 */
export type SupportedUnits = string;
/**
 * Lambda for validating text used as `SupportedUnits` values. Returns undefined if
 * the string fails to validate.
 * @param {SupportedUnits} s
 * @returns {SupportedUnits} Validated string or undefined
 */
export const SupportedUnits = (s: SupportedUnits): SupportedUnits | undefined =>
    String(s).match(/^[0-9\.]+(vw|vmin|vmax|vh|dg|dm|cw|gut|pt)?$/)
        ? s
        : void 0;
