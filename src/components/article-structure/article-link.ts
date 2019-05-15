import { Container } from "./container";

/**
 * Signature/interface for an `ArticleLink` object
 * @see https://developer.apple.com/documentation/apple_news/articlelink
 * @extends {Container}
 */
export interface ArticleLink extends Container {
  role: "article_link";
}
