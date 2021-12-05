import { AnyComponent } from "../../src/components/any-component";
import AppleNews from "../../src/index";

const document: AppleNews.ArticleDocument = {
  version: "1.10.1",
  identifier: "12345",
  language: "en",
  title: "Title",
  layout: {
    columns: 1,
    width: 1000,
  },
  components: [
    {
      role: "foo",
      text: "fail",
    },
    {
      role: "title",
      foo: "fail",
    },
    {
      role: "title",
      components: [
        {
          role: "title",
          text: "A title in a container",
        },
      ],
    },
  ],
};
