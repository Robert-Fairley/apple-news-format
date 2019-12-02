/**
 * The object for defining information about an issue.
 * @see https://developer.apple.com/documentation/apple_news/issue
 */
export interface Issue {
    identifier: string;
    order?: number; // Integer | Float
}
