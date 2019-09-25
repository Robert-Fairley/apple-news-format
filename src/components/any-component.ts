import {
  Advertisements,
  ArticleStructure,
  AudioAndVideo,
  AugmentedReality,
  GalleriesAndMosaics,
  Images,
  Location,
  SocialMedia,
  Tables,
  Text,
} from ".";

export type AnyComponent =
  | typeof Advertisements
  | typeof ArticleStructure
  | typeof AudioAndVideo
  | typeof AugmentedReality
  | typeof GalleriesAndMosaics
  | typeof Images
  | typeof Location
  | typeof SocialMedia
  | typeof Tables
  | typeof Text;
