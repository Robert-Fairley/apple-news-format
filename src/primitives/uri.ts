/**
 * Expression of `URI` type `string`
 * @see https://developer.apple.com/documentation/apple_news/apple_news_format/guidelines_for_using_images_videos_and_audio_files
 */
export type URI = string;

export const SupportedFileExtensions = [
    "png",
    "jpg",
    "jpeg",
    "gif",
    "alac",
    "heac",
    "m3u8",
    "mov",
    "aac",
    "mp3",
    "mp4",
    "ac3",
    "usdz",
] as const;

export type SupportedUrlFileExtension = typeof SupportedFileExtensions[number];

/**
 * Lambda for validating string as ANF `URI` type. Returns undefined if validation fails.
 * @param {URI} s
 * @returns {URI|undefined} Validated URI string or undefined if invalid
 */
export const URI = (s: string): URI | undefined => {
    const isInvalidFileType = (ext?: SupportedUrlFileExtension) => ext && !SupportedFileExtensions.includes(ext);

    try {
        const deconstructedUrl = new URL(s);
        let extension;

        if (deconstructedUrl.protocol === "bundle:") {
            extension = deconstructedUrl.hostname.split(".")[1] as SupportedUrlFileExtension;
            if (isInvalidFileType(extension)) { return; }
        } else {
            extension = deconstructedUrl.pathname.split(".")[1] as SupportedUrlFileExtension;
            if (isInvalidFileType(extension)) { return; }
        }

        return s;
    } catch (typeError) { return; }
};
