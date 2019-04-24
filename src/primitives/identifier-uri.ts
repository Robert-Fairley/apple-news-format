/**
 * Expression of a link local to an article.
 */
export type IdentifierURI = string;

/**
 * Validation function for testing local links to identifiers inside
 * an article.
 * @param {IdentifierURI} s
 * @returns {IdentifierURI|undefined}
 */
export const IdentifierURI = (s: string): string | undefined =>
  !!(String(s).match(/^[#](\w|-|_)+$/))
    ? s
    : void 0;
