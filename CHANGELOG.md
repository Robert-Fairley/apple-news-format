# Changelog

## 2.0.2

### Patch Changes

- [#5](https://github.com/sevenwestmedia-labs/apple-news-format/pull/5) [`dfa4570`](https://github.com/sevenwestmedia-labs/apple-news-format/commit/dfa45704e16cebef1231b0eaaf6b259bab75957a) Thanks [@bennettp123](https://github.com/bennettp123)! - testing the release process

## 2.0.1

### Patch Changes

- [#2](https://github.com/sevenwestmedia-labs/apple-news-format/pull/2) [`30e7f87`](https://github.com/sevenwestmedia-labs/apple-news-format/commit/30e7f87fd5dcbb8795079b2c2ddff858a5fd2e04) Thanks [@bennettp123](https://github.com/bennettp123)! - test publish

## v1.1.0 - April 4, 2024

This should bring the typings up to date with ANF 1.26.0 in regards to the documentation supplied by Apple

#### Changes:

- Added new `territory` property to `Condition` typing
- Updated `MochaDone` to `Mocha.Done` due to deprecation
- Marked `autoPlacement` and `subtitle` on `ArticleDoucment` as deprecated
- Added `fontScaling` to `ComponentTextStyleBase` - Available in iOS 13, iPadOS 13, and macOS 10.15.
- Added `hyphenationMinimumCharactersAfter` to `ComponentTextStyleBase` - Available in iOS 17, iPadOS 17, and macOS 14 beta release.
- Added `hyphenationMinimumCharactersBefore` to `ComponentTextStyleBase` - Available in iOS 17, iPadOS 17, and macOS 14 beta release.
- Added `hyphenationMinimumWordLength` to `ComponentTextStyleBase` - Available in iOS 17, iPadOS 17, and macOS 14 beta release.
- Added `hyphenationZone` to `ComponentTextStyleBase` - Available in iOS 17, iPadOS 17, and macOS 14 beta release.
- Updated `articleIdentifier` on `ArticleLink` to optional - If articleIdentifier is not provided, the identifier of the article is used.
- Added "allow" as a valid value for `widows` on `CollectionDisplay`
- Added optional `caption` property to `Audio`
- Added optional `caption` property to `EmbedWebVideo`
- Removed `stillURL` property from `EmbedWebVideo`
- Added required `URL` property to `ARKit`
- Added the following new values to `SupportedFileExtensions`
  - "usdz" for `ARKit` support
  - "webp" for images - Animated image format with the animation removed when used
- Updated `ArticleThumbnail` extension to omit `URL` property to re-declare as deprecated
- Updated `ArticleTitle` extension to omit `text` property to re-declare as optional
- Marked `URL`, `aspectRatio`, `fillMode`, `horizontalAlignment` and `verticalAlignment` on `ArticleThumbnail` as deprecated
- Updated `URL` property on `ArticleThumbnail` to optional due to deprecation
- Added optional `inlineTextStyles` property to `CaptionDescriptor`
- Updated `Divider` to extend from `Component` instead of `ContainerComponent`
- Moved optional `allowAutoplacedAds` from `Component` to `ContainerComponent`
- Fixed `type` property value for `FormattedText` to "formatted_text" instead of previous "formatted_test"
- Updated `inlineTextStyles` and `textStyles` properties to optional for `FormattedText`
- Updated `conditional` property on `TextComponent` to support ConditionalText or ConditionalText[] - previously just ConditionalText[]
- Split `ComponentAnimation` into seperate interfaces
  - Created `AppearAnimation`
  - Created `FadeInAnimation`
  - Created `MoveInAnimation`
  - Created `ScaleFadeAnimation`
  - Exported new components
  - Export new union type for `ComponentAnimation`
- Added new value for `type` property on `Addition` - "calendar_event"
- Added new required properties `type`, `rangeLength` and `rangeStart` to `LinkAddition`
- Updated @see reference for `LinkAddition` to point at new documentation
- Split `Scene` into seperate interfaces
  - Created `FadingStickyHeader`
  - Created `ParallaxScaleHeader`
  - Exported new components
  - Export new union type for `Scene`
- Added optional `tocByline` property to `Issue`
- Added optional `contentGenerationType` property to `Metadata`
- Split `Shadow` into seperate interfaces - Component shadows have greater value unit support
  - Created `TextShadow`
  - Created `ComponentShadow`
  - Exported new components
  - Added optional `shadow` property to `ComponentStyleBase`
  - Updated `textShadow` property on `TextStyleBase` to use `TextShadow` - previously just `Shadow`
  - Split `Offset` into seperate interfaces - Component shadow offsets have greater value unit support
    - Created `TextShadowOffset`
    - Created `ComponentShadowOffset`
- Update `ComponentStyle` jsdoc to add `@extends {ComponentStyleBase}` - previously on `ComponentStyleBase` itself which seemed incorrect
- Marked the following as deprecated
  - `AdvertisementAutoPlacement`
  - `AutoPlacementBase`
  - `AutoPlacement`
  - `ConditionalAutoPlacement`
  - `AutoPlacementLayout`

## v0.3.0 - December 4, 2021

This should bring the individual components more or less up to date, but what's lacking is a more thorough audit to be certain.

Some components may still not be exposed at the root level except through the global namespace `Component`.

#### Changes:

- Globally exposed component renamed `Facebook` -> `FacebookPost` to match Apple's spec
- Updated URI validation method. Now wraps around native URL class and checks against a list of valid file extensions - these may need updating. Couldn't find a canonical list of all valid file types
- Added `ColorSchema` interface.
- Removed unsupported advertisement classes: `MediumRectangleAdvertisement` and `BannerAdvertisment`
- Add missing fields to several A/V components
- Other minor housecleaning changes
