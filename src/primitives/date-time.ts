/**
 * Expression for UTC ISO 8601 DateTime type
 */
export type DateTime = string;

/**
 * Validation function for UTC ISO 8601 DateTime string. Returns string if valid,
 * undefined if invalid.
 * @param {DateTime} s
 * @returns {DateTime|undefined}
 * @todo Adjust matching regex to more explicitly match ISO spec for UTC timezone designation. Or
 * completely block it so that string is always valid with ANF and the API
 */
export const DateTime = (s: DateTime): DateTime | undefined =>
  (String(s).match(/^(\d{4}-\d{2}-\d{2}T\d{2}(:\d{2}?):\d{2}).+?$/))
    ? s
    : void 0;
