import {
  TextComponent,
  TextComponentFormat,
} from "./text-component";

/**
 * Signature/interface for an `ArticleTitle` object
 * @see https://developer.apple.com/documentation/apple_news/articletitle
 * @extends {TextComponent}
 */
export interface ArticleTitle extends TextComponent {
  role: "article_title";
  format?: TextComponentFormat;
}
