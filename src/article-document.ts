import {
    ComponentLayouts,
    Layout,
} from "./article-layout";
import { AutoPlacement } from "./auto-placement";
import { DocumentStyle } from "./document-style";
import {
    ComponentTextStyles,
    TextStyles,
} from "./styles/text-styles";

/**
 * Signature/interface for the `ArticleDocument` object
 */
export interface ArticleDocument {
    components: Component[];
    componentTextStyles: ComponentTextStyles;
    identifier: string;
    language: string;
    layout: Layout;
    title: string;
    version: string;
    autoPlacement?: AutoPlacement;
    componentLayouts?: ComponentLayouts;
    componentStyles?: ComponentStyles;
    documentStyle?: DocumentStyle;
    metadata?: Metadata;
    subtitle?: string;
    textStyles?: TextStyles;
}
