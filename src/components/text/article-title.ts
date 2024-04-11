import {
  TextComponent,
} from "./text-component";

/**
 * Signature/interface for an `ArticleTitle` object
 * @see https://developer.apple.com/documentation/apple_news/articletitle
 * @extends {TextComponent}
 */
export interface ArticleTitle extends Omit<TextComponent, "text"> {
  role: "article_title";
  text?: string;
}
