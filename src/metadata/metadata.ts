import {
  DateTime,
  URI,
} from "../primitives";
import { CampaignData } from "./campaign-data";
import { Issue } from "./issue";
import { LinkedArticle } from "./linked-article";

/**
 * Signature/interface for the article `Metadata` object
 * @see https://developer.apple.com/documentation/apple_news/metadata
 */
export interface Metadata {
  authors?: string[];
  campaignData?: CampaignData;
  canonicalURL?: URI;
  dateCreated?: DateTime;
  dateModified?: DateTime;
  datePublished?: DateTime;
  excerpt?: string;
  generatorIdentifier?: string;
  generatorName?: string;
  generatorVersion?: string;
  keywords?: string[];
  links?: LinkedArticle[];
  thumbnailURL?: string; // ThumbnailURI
  transparentToolbar?: boolean;
  videoURL?: URI;
  issue?: Issue;
}
