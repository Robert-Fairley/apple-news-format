/**
 * Expression for a `ListItemStyle` type field value. Only allows select
 * values outlined in the documentation.
 */
export type ListItemStyleType
    = "bullet"
    | "decimal"
    | "lower_alphabetical"
    | "upper_alphabetical"
    | "lower_roman"
    | "upper_roman"
    | "character"
    | "none";

/**
 * Expression for a `ListItemStyle` character field.
 */
export type ListItemStyleCharacter = string;

/**
 * Lambda for verifying `ListItemStyleCharacter` type at runtime.
 * @param {ListItemStyleCharacter} s
 * @returns {ListItemStyleCharacter} Validated field value or undefined
 */
export const ListItemStyleCharacter = (s: ListItemStyleCharacter): ListItemStyleCharacter | undefined =>
    !!(String(s).match(/^.|\s$/)[0] === s)
        ? s
        : void 0;

/**
 * Signature/expression for a `ListItemStyle` object.
 * @see https://developer.apple.com/documentation/apple_news/listitemstyle
 */
export interface ListItemStyle {
    type: ListItemStyleType;
    character?: ListItemStyleCharacter;
}
