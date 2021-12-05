import { AudioVideoComponent } from "./audio-video-component";

export type PodcastOrientation
    = "horizontal"
    | "automatic";

export type PodcastTheme
    = "light"
    | "dark"
    | "automatic";

export interface Podcast extends AudioVideoComponent {
    orientation: PodcastOrientation;
    theme: PodcastTheme;
}
