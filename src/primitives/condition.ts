/**
 * Expression for possible values for Condition `sizeClass` fields
 */
export type ConditionSizeClass
    = "any"
    | "regular"
    | "compact";

/**
 * Expression for possible values for Condition `sizeCategory` fields
 */
export type ConditionContentSizeCategory
    = "XS"
    | "S"
    | "M"
    | "L"
    | "XL"
    | "XXL"
    | "XXXL"
    | "AX-M"
    | "AX-L"
    | "AX-XL"
    | "AX-XXL"
    | "AX-XXXL";

/**
 * Expression for possible values for Condition `platform` field
 */
export type ConditionPlatform
    = "any"
    | "ios"
    | "macos";

/**
 * Expression for possible values for Condition `subscriptionStatus` field
 */
export type ConditionSubscriptionStatus
    = "bundle"
    | "subscribed";

/**
 * Expression of possible values for condition `viewLocation` field
 */
export type ConditionViewLocation
    = "any"
    | "article"
    | "issue_table_of_contents"
    | "issue";

/**
 * Expression of possible values for condition `preferredColorScheme` field
 */
export type ConditionPreferredColorScheme
    = "any"
    | "light"
    | "dark";

/**
 * Signature/interface for a `Condition` object
 * @see https://developer.apple.com/documentation/apple_news/condition
 */
export interface Condition {
    horizontalSizeClass: ConditionSizeClass;
    maxColumns?: number; // Integer - Minimum: 1
    maxContentSizeCategory?: ConditionContentSizeCategory;
    maxSpecVersion?: string; // Apple News Version
    maxViewportAspectRation?: number; // Unsigned Float
    minColumns?: number; // Unsigned Integer
    minContentSizeCategory?: ConditionContentSizeCategory;
    minSpecVersion?: string; // Apple News Version
    minViewportAspectRatio?: number; // Unsigned Float
    minViewportWidth?: number; // Integer
    platform?: ConditionPlatform;
    preferredColorScheme?: ConditionPreferredColorScheme;
    subscriptionStatus?: ConditionSubscriptionStatus;
    verticalSizeClass?: ConditionSizeClass;
    viewLocation?: ConditionViewLocation;
}
