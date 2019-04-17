import { URI } from "../primitives";

/**
 * Possible values for article relationships
 */
export type LinkedArticleRelationship
    = "related"
    | "promoted";

/**
 * Signature/interface for a `LinkedArticle` component
 * @see https://developer.apple.com/documentation/apple_news/linkedarticle
 */
export interface LinkedArticle {
    relationship: LinkedArticleRelationship;
    URL: URI;
}
