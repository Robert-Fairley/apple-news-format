import { Component } from "..";
import { URI } from "../../primitives";
import { ComponentStyle } from "../../styles/component-styles";
import { ComponentTextStyle } from "../../styles/text-styles";

/**
 * @see https://developer.apple.com/documentation/apple_news/linkbutton
 */
export interface LinkButton extends Component {
    role: "link_button";
    URL: URI;
    accessibilityLabel?: string;
    text?: string;
    textStyle?: ComponentTextStyle | string;
}
