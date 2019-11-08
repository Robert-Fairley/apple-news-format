# Apple News Format Types

[![CircleCI](https://circleci.com/gh/Robert-Fairley/apple-news-format.svg?style=svg&circle-token=6f3e22cb14ceb409d7241efc628ccdef34b810f8)](https://circleci.com/gh/Robert-Fairley/apple-news-format)

This is a collection of TypeScript types for the Apple News Format fields, metadata, and components.

Included are a small selection of validation functions for certain fields that contain restrictions on the strings that are passed in.

## Usage

#### TypeScript

Simply import the AppleNews namespace from the package.

```typescript
import AppleNews from "apple-news-format";
// or
import { AppleNews } from "apple-news-format";
```

You can also import individual types, methods, and namespaces from the individual modules.

```typescript
import { URI } from "apple-news-format/lib/primitives";
import * as Components from "apple-news-format/lib/components";
import { Image } from "apple-news-format/lib/images";

type Body = Components.Text.Body;

function buildImageComponent(path: string): Image {
  const imagePath: URI = URI(path);

  if (!imagePath)
    throw new TypeError("Image URI was invalid!");

  const imageComponent: Image = {
    role: "image",
    URL: imagePath,
  };

  return imageComponent;
}
```

#### JavaScript

You can import the specific validation functions listed as available
below by targeting the specific modules.

```javascript
const { URI } = require("apple-news-format/lib/primitives");
// OR require("apple-news-format/lib/primitives/uri");

```

## Validation Functions

* [Color](src/primitives/color.ts)
  * Tests for a valid color string. Ex: `"#RRGGBB"`
* [SupportedUnits](src/primitives/supported-units.ts)
  * Tests for a valid unit type. Ex: `"80vw"`
* [URI](src/primitives/uri.ts)
  * Tests for a properly formed URI, and valid media types. Ex: `"bundle://a-video.mp4"`
* [Identifier URI](src/primitives/identifier-uri.ts)
  * Tests for a properly formed internal URI targeting other parts of the document. Ex: `"#info"`
* [ListItemStyleCharacter](src/styles/text-styles/list-item-style.ts)
  * Tests for a single valid character for use in lists. Ex: `"•"`
* [DateTime](src/primitives/date-time.ts)
  * Tests for a valid ISO 8601 date time string
  * TODO: Make test more explicit
* [HTMLTableData](src/components/tables/html-table.ts)
  * Tests for a valid string containing and opening and closing `<table>` tag.
  * TODO: Test for appropriate children elements: `<thead>`, `<tbody>`, `<tr>`, `<td>`, etc.

## License

[MIT](LICENSE)

---

&copy; 2019 Robert Fairley
