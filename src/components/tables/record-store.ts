import { DataDescriptor } from "./data-descriptor";

/**
 * Signature/interface for a `RecordStore` object
 * @see https://developer.apple.com/documentation/apple_news/recordstore
 */
export interface RecordStore {
  descriptors: DataDescriptor[];
  records: any[];
}
