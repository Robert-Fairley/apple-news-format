import {
    ComponentLayouts,
    Layout,
} from "./article-layout";
import { AutoPlacement } from "./auto-placement";
import { AnyComponent } from "./components/any-component";
import { DocumentStyle } from "./document-style";
import { Metadata } from "./metadata";
import { ComponentStyles } from "./styles/component-styles";
import { ColorScheme } from "./color-scheme";
import {
    ComponentTextStyles,
    TextStyles,
} from "./styles/text-styles";
import { TextFormat } from "./primitives/text";

/**
 * Signature/interface for the `ArticleDocument` object
 * @see https://developer.apple.com/documentation/apple_news/articledocument
 */
export interface ArticleDocument {
    components: AnyComponent[];
    componentTextStyles?: ComponentTextStyles;
    identifier: string;
    language: string;
    layout: Layout;
    title: string;
    version: string;
    autoplacement?: AutoPlacement;
    colorScheme?: ColorScheme;
    componentLayouts?: ComponentLayouts;
    componentStyles?: ComponentStyles;
    documentStyle?: DocumentStyle;
    metadata?: Metadata;
    textFormat?: TextFormat;
    textStyles?: TextStyles;
}
