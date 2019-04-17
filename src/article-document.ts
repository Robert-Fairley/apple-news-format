/// <reference path="./apple-news.d.ts" />

namespace AppleNews {

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
        metadfata?: Metadata;
        subtitle?: string;
        textStyles?: TextStyles;
    }
}
