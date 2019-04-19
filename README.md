# Apple News Format Types

This is a collection of TypeScript types for the Apple News Format fields, metadata, and components.

Included are a small selection of validation functions for certain fields that contain restrictions on the strings that are passed in.

## Validation Functions

* [Color](src/primitives/color.ts)
  * Tests for a valid color string. Ex: `"#RRGGBB"`
* [SupportedUnits](src/primitives/supported-units.ts)
  * Tests for a valid unit type. Ex: `"80vw"`
* [URI](src/primitives/uri.ts)
  * Tests for a properly formed URI, and valid media types. Ex: `"bundle://a-video.mp4"`
* [ListItemStyleCharacter](src/styles/text-styles/list-item-style.ts)
  * Tests for a single valid character for use in lists. Ex: `"•"`

## License

[MIT](LICENSE)

---

&copy; 2019 Robert Fairley
