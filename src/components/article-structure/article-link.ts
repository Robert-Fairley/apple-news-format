import { CollectionDisplay, HorizontalStackDisplay } from ".";
import { ContainerComponent } from "./container-component";

/**
 * Signature/interface for an `ArticleLink` object
 * @see https://developer.apple.com/documentation/apple_news/articlelink
 * @extends {ContainerComponent}
 */
export interface ArticleLink extends ContainerComponent {
  role: "article_link";
  articleIdentifier?: string; // If articleIdentifier is not provided, the identifier of the article is used.
  allowAutoplacedAds?: boolean;
  contentDisplay?: CollectionDisplay | HorizontalStackDisplay;
}
