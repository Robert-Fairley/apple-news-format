import {
  TextComponent,
  TextComponentFormat,
} from "./text-component";

export type TextComponentHeadingRole
  = "heading"
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6";

export interface Heading extends TextComponent {
  role: TextComponentHeadingRole;
  format?: TextComponentFormat;
}
