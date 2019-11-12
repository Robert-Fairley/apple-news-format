import AppleNews from "../../src";

const InvalidComponentDoc: AppleNews.ArticleDocument = {
  version: "1.10.1",
  identifier: "12345",
  language: "en",
  title: "Title",
  layout: {
    columns: 1,
    width: 1000
  },
  components: [
    // TODO: this should fail but it currently doesn't
    {
      role: "nope",
      foo: "bar"
    }
  ]
};
