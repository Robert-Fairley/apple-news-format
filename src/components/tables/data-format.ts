/**
 * Possible values for a data format type field
 */
export type DataFormatType
  = "float"
  | "image";

/**
 * Signature/interface for a `DataFormat` object
 * @see https://developer.apple.com/documentation/apple_news/dataformat
 * @todo Update to include more specific data format specs according to linked docs
 */
export interface DataFormat {
  type: DataFormatType;
}
