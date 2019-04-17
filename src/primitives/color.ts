
/**
 * Type annotation for `Color` prop
 * @see https://developer.apple.com/documentation/apple_news/color
 */
export type Color = string;
/**
 * `Color` prop validation lambda function. Adheres to official document spec
 * @param {AppleNews.Color} s 
 * @returns {AppleNews.Color|undefined} The color string, if it's valid. Undefined if not.
 * @see https://developer.apple.com/documentation/apple_news/color
 */
export const Color =
    (s: Color): Color | undefined =>
        String(s).match(/^(\#\w{3})|(\#\w{6})|(\#\w{8})|([a-z]{0,20})$/)
            ? s
            : void 0;
