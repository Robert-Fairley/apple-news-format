import { SocialMediaComponent } from "./social-media-component";

/**
 * @see https://developer.apple.com/documentation/apple_news/tweet
 */
export interface Tweet extends SocialMediaComponent {
    role: "tweet";
}
