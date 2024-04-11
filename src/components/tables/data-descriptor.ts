import { DataFormat } from "./data-format";
import { FormattedText } from "./formatted-text";

/**
 * Possible values for a dataType field
 */
export type DataType
  = "string"
  | "text"
  | "image"
  | "image"
  | "number"
  | "integer"
  | "float";

/**
 * Signature/interface for `DataDescriptor` object
 * @see https://developer.apple.com/documentation/apple_news/datadescriptor
 */
export interface DataDescriptor {
  dataType: DataType;
  key: string;
  label: FormattedText | string;
  format?: DataFormat;
  identifier?: string;
}
