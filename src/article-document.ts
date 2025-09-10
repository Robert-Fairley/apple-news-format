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
    /**
     * @deprecated
     */
    autoplacement?: AutoPlacement;
    colorScheme?: ColorScheme;
    componentLayouts?: ComponentLayouts;
    componentStyles?: ComponentStyles;
    documentStyle?: DocumentStyle;
    metadata?: Metadata;
     /**
     * @deprecated
     */
    subtitle?: string;
    textFormat?: TextFormat;
    textStyles?: TextStyles;
}

/**
 * Must be IANA.org compatible: https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
 * Included are regions where Apple News is available.
 * @see {@link ArticleDocument}
 */
export type ArticleDocumentLanguage
    = "en-US"
    | "en-GB"
    | "en-AU"
    | "en-CA"
    | "fr-CA";

/**
 * Validation function for testing {@link ArticleDocument} identifier values.
 */
export const ArticleDocumentIdentifier = (s: string) =>
    s.match(/^[a-zA-Z0-9\-_]{1,64}$/)
    ? s
    : void 0;
