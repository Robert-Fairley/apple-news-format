import { Component } from "../component";

/**
 * Expression of basic HTML field type
 */
export type HTMLTableData = string;

/**
 * Validation function for html table fields.
 * @param {HTMLTableData} s
 * @returns {HTMLTableData|undefined}
 */
export const HTMLTableData = (s: HTMLTableData): HTMLTableData | undefined =>
  !!(String(s).match(/^<table>.+?<\/table>$/ms))
    ? s
    : void 0;

/**
 * Signature/interface for an `HTMLTable` object
 * @see https://developer.apple.com/documentation/apple_news/htmltable
 * @extends {Component}
 */
export interface HTMLTable extends Component {
  html: HTMLTableData;
  role: "htmltable";
}
