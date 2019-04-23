import { Component } from "../component";
import { DataTableSorting } from "./data-table-sorting";
import { RecordStore } from "./record-store";

/**
 * Possible values for a data table orientation field
 */
export type DataOrientation
  = "vertical"
  | "horizontal";

/**
 * Signature/interface for a `DataTable` object
 * @see https://developer.apple.com/documentation/apple_news/datatable
 * @extends {Component}
 */
export interface DataTable extends Component {
  data: RecordStore;
  role: "datatable";
  dataOrientation?: DataOrientation;
  showDescriptorLabels?: boolean;
  sortBy?: DataTableSorting[];
}
