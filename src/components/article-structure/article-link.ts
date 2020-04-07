import { ContainerComponent } from "./container-component";

/**
 * Signature/interface for an `ArticleLink` object
 * @see https://developer.apple.com/documentation/apple_news/articlelink
 * @extends {ContainerComponent}
 */
export interface ArticleLink extends ContainerComponent {
  role: "article_link";
}
