import { Component, ComponentLink } from "..";
import { URI } from "../../primitives";

export interface ReplicaAdvertisement extends Component {
    role: "replica_advertisement";
    URL: URI;
    accessibilityCaption?: string;
    additions?: ComponentLink[];
    caption?: string;
    explicitContent?: boolean;
}
