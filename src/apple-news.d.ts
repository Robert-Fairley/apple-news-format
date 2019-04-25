import * as ArticleLayout from "./article-layout";
import * as Components from "./components";
import * as Metadata from "./metadata";
import * as Primitives from "./primitives";
import * as Styles from "./styles";

import { AdvertisementAutoPlacement as RootAdvertisementAutoPlacement } from "./advertisement-auto-placement";
import { ArticleDocument as RootArticleDocument } from "./article-document";
import { AutoPlacement as RootAutoPlacement } from "./auto-placement";
import { ConditionalAutoPlacement as RootConditionalAutoPlacement } from "./conditional-auto-placement";
import { DocumentStyle as RootDocumentStyle } from "./document-style";

declare namespace AppleNews {

 // Root
  export type AdvertisementAutoPlacement = RootAdvertisementAutoPlacement;
  export type ArticleDocument = RootArticleDocument;
  export type AutoPlacement = RootAutoPlacement;
  export type ConditionalAutoPlacement = RootConditionalAutoPlacement;
  export type DocumentStyle = RootDocumentStyle;

  // Article Layout
  export type Anchor = ArticleLayout.Anchor;
  export type AutoPlacementLayout = ArticleLayout.AutoPlacementLayout;
  export type ComponentLayout = ArticleLayout.ComponentLayout;
  export type ConditionalComponentLayout = ArticleLayout.ConditionalComponentLayout;
  export type Layout = ArticleLayout.Layout;

  // Components
  export type Addition = Components.Addition;
  export type Behavior = Components.Behavior;
  export type ComponentAnimation = Components.ComponentAnimation;
  export type ComponentLink = Components.ComponentLink;
  export type Component = Components.Component;
  export type Link = Components.Link;
  export type Scene = Components.Scene;
  export type BannerAdvertisement = Components.Advertisements.BannerAdvertisement;
  export type MediumRectangleAdvertisement = Components.Advertisements.MediumRectangleAdvertisement;
  export type ArticleLink = Components.ArticleStructure.ArticleLink;
  export type Aside = Components.ArticleStructure.Aside;
  export type Chapter = Components.ArticleStructure.Chapter;
  export type CollectionDisplay = Components.ArticleStructure.CollectionDisplay;
  export type ConditionalContainer = Components.ArticleStructure.ConditionalContainer;
  export type Container = Components.ArticleStructure.Container;
  export type Divider = Components.ArticleStructure.Divider;
  export type Header = Components.ArticleStructure.Header;
  export type HorizontalStackDisplay = Components.ArticleStructure.HorizontalStackDisplay;
  export type Section = Components.ArticleStructure.Section;
  export type Audio = Components.AudioAndVideo.Audio;
  export type EmbedWebVideo = Components.AudioAndVideo.EmbedWebVideo;
  export type Music = Components.AudioAndVideo.Music;
  export type Video = Components.AudioAndVideo.EmbedWebVideo;
  export type ARKit = Components.AugmentedReality.ARKit;
  export type GalleryItem = Components.GalleriesAndMosaics.GalleryItem;
  export type Gallery = Components.GalleriesAndMosaics.Gallery;
  export type Mosaic = Components.GalleriesAndMosaics.Mosaic;
  export type ArticleThumbnail = Components.Images.ArticleThumbnail;
  export type CaptionDescriptor = Components.Images.CaptionDescriptor;
  export type Figure = Components.Images.Figure;
  export type Image = Components.Images.Image;
  export type Logo = Components.Images.Logo;
  export type Photo = Components.Images.Photo;
  export type Portrait = Components.Images.Portrait;
  export type MapItem = Components.Location.MapItem;
  export type MapSpan = Components.Location.MapSpan;
  export type Map = Components.Location.Map;
  export type Place = Components.Location.Place;
  export type Instagram = Components.SocialMedia.SocialMediaComponent;
  export type Facebook = Components.SocialMedia.SocialMediaComponent;
  export type Tweet = Components.SocialMedia.SocialMediaComponent;
  export type DataDescriptor = Components.Tables.DataDescriptor;
  export type DataFormat = Components.Tables.DataFormat;
  export type DataTableSorting = Components.Tables.DataTableSorting;
  export type DataTable = Components.Tables.DataTable;
  export type FormattedText = Components.Tables.FormattedText;
  export type HTMLTable = Components.Tables.HTMLTable;
  export type HTMLTableData = Components.Tables.HTMLTableData;
  export type RecordStore = Components.Tables.RecordStore;
  export type ArticleTitle = Components.Text.ArticleTitle;
  export type Author = Components.Text.Author;
  export type Body = Components.Text.Body;
  export type Byline = Components.Text.Byline;
  export type Caption = Components.Text.Caption;
  export type ConditionalText = Components.Text.ConditionalText;
  export type Heading = Components.Text.Heading;
  export type Illustrator = Components.Text.Illustrator;
  export type Intro = Components.Text.Intro;
  export type Photographer = Components.Text.Photographer;
  export type PullQuote = Components.Text.PullQuote;
  export type Quote = Components.Text.Quote;
  export type Title = Components.Text.Title;

  // Metadata
  export type CampaignData = Metadata.CampaignData;
  export type LinkedArticle = Metadata.LinkedArticle;
  export type Metadata = Metadata.Metadata;

  // Primitives
  export type VerticalAlignment = Primitives.VerticalAlignment;
  export type HorizontalAlignment = Primitives.HorizontalAlignment;
  export type Color = Primitives.Color;
  export type Condition = Primitives.Condition;
  export type DateTime = Primitives.DateTime;
  export type IdentifierURI = Primitives.IdentifierURI;
  export type Margin = Primitives.Margin;
  export type Offset = Primitives.Offset;
  export type Padding = Primitives.Padding;
  export type Shadow = Primitives.Shadow;
  export type StrokeStyle = Primitives.StrokeStyle;
  export type SupportedUnits = Primitives.SupportedUnits;
  export type FontStyle = Primitives.FontStyle;
  export type FontWeight = Primitives.FontWeight;
  export type FontWidth = Primitives.FontWidth;
  export type TextDecoration = Primitives.TextDecoration;
  export type TextTransform = Primitives.TextTransform;
  export type TextVerticalAlignment = Primitives.TextVerticalAlignment;

  // Styles
  export type Border = Styles.ComponentStyles.Border;
  export type ColorStrop = Styles.ComponentStyles.ColorStop;
  export type ComponentStyle = Styles.ComponentStyles.ComponentStyle;
  export type ConditionalComponentStyle = Styles.ComponentStyles.ConditionalComponentStyle;
  export type ConditionalTableCellStyle = Styles.ComponentStyles.ConditionalTableCellStyle;
  export type ConditionalTableColumnStyle = Styles.ComponentStyles.ConditionalTableColumnStyle;
  export type ConditionalTableRowStyle = Styles.ComponentStyles.ConditionalTableRowStyle;
  export type CornerMask = Styles.ComponentStyles.CornerMask;
  export type Fill = Styles.ComponentStyles.Fill;
  export type GradientFill = Styles.ComponentStyles.GradientFill;
  export type ImageFill = Styles.ComponentStyles.ImageFill;
  export type TableBorder = Styles.ComponentStyles.TableBorder;
  export type TableCellSelector = Styles.ComponentStyles.TableCellSelector;
  export type TableCellStyle = Styles.ComponentStyles.TableCellStyle;
  export type TableColumnSelector = Styles.ComponentStyles.TableColumnSelector;
  export type TableColumnStyle = Styles.ComponentStyles.TableColumnStyle;
  export type TableRowSelector = Styles.ComponentStyles.TableRowSelector;
  export type TableRowStyle = Styles.ComponentStyles.TableRowStyle;
  export type TableStrokeStyle = Styles.ComponentStyles.TableStrokeStyle;
  export type TableStyle = Styles.ComponentStyles.TableRowStyle;
  export type VideoFill = Styles.ComponentStyles.VideoFill;
  export type ComponentTextStyle = Styles.TextStyles.ComponentTextStyle;
  export type ConditionalComponentTextStyle = Styles.TextStyles.ConditionalComponentTextStyle;
  export type ConditionalTextStyle = Styles.TextStyles.ConditionalTextStyle;
  export type DropCapStyle = Styles.TextStyles.DropCapStyle;
  export type InlineTextStyle = Styles.TextStyles.InlineTextStyle;
  export type ListItemStyle = Styles.TextStyles.ListItemStyle;
  export type TextStrokeStyle = Styles.TextStyles.TextStrokeStyle;
  export type TextStyle = Styles.TextStyles.TextStyle;
}
