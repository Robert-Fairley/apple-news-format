/**
 * Expression of `URI` type `string`
 * @see https://developer.apple.com/documentation/apple_news/apple_news_format/guidelines_for_using_images_videos_and_audio_files
 */
export type URI = string;
/**
 * Lambda for validating string as ANF `URI` type. Returns undefined if validation fails.
 * @param {URI} s
 * @returns {URI|undefined} Validated URI string or undefined if invalid
 */
export const URI = (s: string): URI | undefined =>
    !!(String(s).match(/^(https|http|bundle):\/\/.+\.(png|jpg|jpeg|gif|m3u8|mov|aac|mp3|mp4|ac3)$/))
        ? s
        : void 0;
