import { SocialMediaComponent } from "./social-media-component";

/**
 * @see https://developer.apple.com/documentation/apple_news/facebookpost
 */
export interface FacebookPost extends SocialMediaComponent {
    role: "facebook_post";
}
