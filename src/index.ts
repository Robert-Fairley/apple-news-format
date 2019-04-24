import * as ArticleLayout from "./article-layout";
import * as Components from "./components";
import * as Metadata from "./metadata";
import * as Primitives from "./primitives";
import * as Styles from "./styles";

export namespace AppleNews {
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
  export type BannerAdvertisment = Components.Advertisements.BannerAdvertisement;
  export type MediumRectangleAdvertisment = Components.Advertisements.MediumRectangleAdvertisement;
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
  // export type Metadata = Metadata.Metadata;
  // export type Primitives = Primitives;
  // export type Styles = Styles;
}

export default AppleNews;
