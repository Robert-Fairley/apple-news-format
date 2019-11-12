import AppleNews from "../../src";

const ValidDoc: AppleNews.ArticleDocument = {
  version: "1.10.1",
  identifier: "12345",
  language: "en",
  title: "Title",
  subtitle: "Non occidere quae cumque vi ventia",
  metadata: {
    excerpt: "Title on Scrim",
    thumbnailURL:
      "https://developer.apple.com/news-publisher/download/Apple-News-Example-Articles/images/Iceland01.jpg"
  },
  layout: {
    columns: 20,
    width: 1024,
    margin: 60,
    gutter: 20
  },
  documentStyle: {
    backgroundColor: "#fff",
    conditional: [
      {
        conditions: { preferredColorScheme: "dark" },
        backgroundColor: "#000"
      }
    ]
  },
  components: [
    {
      role: "section",
      layout: {
        columnStart: 0,
        columnSpan: 20,
        ignoreDocumentMargin: true
      },
      scene: {
        type: "parallax_scale"
      },
      components: [
        {
          role: "header",
          layout: "headerImageLayout",
          style: {
            fill: {
              type: "image",
              URL:
                "https://developer.apple.com/news-publisher/download/Apple-News-Example-Articles/images/Iceland01.jpg",
              fillMode: "cover",
              verticalAlignment: "center",
              horizontalAlignment: "right"
            }
          },
          components: [
            {
              role: "container",
              layout: "tabLayout",
              style: {
                fill: {
                  type: "linear_gradient",
                  angle: 180,
                  colorStops: [
                    {
                      color: "#00000000"
                    },
                    {
                      color: "#000"
                    }
                  ]
                }
              },
              anchor: {
                targetAnchorPosition: "bottom"
              },
              components: [
                {
                  role: "title",
                  layout: "titleLayout",
                  text: "Title on Scrim",
                  textStyle: "titleStyle"
                },
                {
                  role: "intro",
                  layout: "introLayout",
                  text: "Sed ut perspiciatis unde omnis iste.",
                  textStyle: "introStyle"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      role: "section",
      layout: "bodyContainerLayout",
      style: "bodyContainerStyle",
      anchor: {
        targetAnchorPosition: "bottom"
      },
      components: [
        {
          role: "author",
          layout: "authorLayout",
          text: "Byline | Publisher | Date",
          textStyle: "authorStyle"
        },
        {
          role: "body",
          text:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?\n\nQuis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.\n\nTemporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          layout: "bodyLayout",
          textStyle: "bodyStyle"
        },
        {
          role: "heading1",
          layout: "heading1Layout",
          text: "Lorem Ipsum Sic Dolor",
          textStyle: "heading1Style"
        },
        {
          role: "body",
          text:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
          layout: "bodyLayout",
          textStyle: "bodyStyle"
        },
        {
          role: "pullquote",
          layout: "pullquoteLayout",
          text:
            "“Sed ut perspi ciatis unde omnis iste natus error sit volupta accusa sic dolor emque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritas et quasi architecto.”",
          textStyle: "pullquoteStyle"
        },
        {
          role: "body",
          text:
            "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis.\n\n",
          layout: "bodyLayout",
          textStyle: "bodyStyle"
        }
      ]
    }
  ],
  componentStyles: {
    bodyContainerStyle: {
      backgroundColor: "#000"
    }
  },
  componentTextStyles: {
    "default-title": {
      fontName: "HelveticaNeue-Thin",
      fontSize: 36,
      textColor: "#2F2F2F",
      textAlignment: "center",
      lineHeight: 44
    },
    "default-subtitle": {
      fontName: "HelveticaNeue-Thin",
      fontSize: 20,
      textColor: "#2F2F2F",
      textAlignment: "center",
      lineHeight: 24
    },
    titleStyle: {
      textAlignment: "center",
      fontName: "HelveticaNeue-Bold",
      fontSize: 42,
      lineHeight: 50,
      textColor: "#EFEFEF"
    },
    introStyle: {
      textAlignment: "center",
      fontName: "HelveticaNeue-Medium",
      fontSize: 24,
      textColor: "#EFEFEF"
    },
    authorStyle: {
      textAlignment: "center",
      fontName: "HelveticaNeue-Bold",
      fontSize: 16,
      textColor: "#fff"
    },
    bodyStyle: {
      textAlignment: "left",
      fontName: "Georgia",
      fontSize: 18,
      lineHeight: 26,
      textColor: "#fff"
    },
    captionStyle: {
      textAlignment: "left",
      fontName: "HelveticaNeue-Medium",
      fontSize: 12,
      lineHeight: 17,
      textColor: "#fff"
    },
    heading1Style: {
      textAlignment: "left",
      fontName: "HelveticaNeue-Medium",
      fontSize: 28,
      lineHeight: 41,
      textColor: "#fff"
    },
    pullquoteStyle: {
      textAlignment: "left",
      fontName: "HelveticaNeue-Bold",
      fontSize: 28,
      lineHeight: 41,
      textColor: "#fff"
    }
  },
  componentLayouts: {
    headerImageLayout: {
      columnStart: 0,
      columnSpan: 20,
      ignoreDocumentMargin: true,
      minimumHeight: "42vh"
    },
    bodyContainerLayout: {
      columnStart: 0,
      columnSpan: 20,
      ignoreDocumentMargin: true
    },
    tabLayout: {
      columnStart: 0,
      columnSpan: 20,
      minimumHeight: "10vh",
      ignoreDocumentMargin: true
    },
    titleLayout: {
      columnStart: 0,
      columnSpan: 20,
      margin: {
        top: 50,
        bottom: 5
      }
    },
    introLayout: {
      columnStart: 0,
      columnSpan: 20,
      margin: {
        top: 5,
        bottom: 20
      }
    },
    authorLayout: {
      columnStart: 0,
      columnSpan: 20,
      margin: {
        top: 15,
        bottom: 15
      }
    },
    bodyLayout: {
      columnStart: 0,
      columnSpan: 20,
      margin: {
        top: 15,
        bottom: 15
      }
    },
    captionLayout: {
      columnStart: 5,
      columnSpan: 2,
      margin: {
        top: 15,
        bottom: 30
      }
    },
    heading1Layout: {
      columnStart: 0,
      columnSpan: 20,
      margin: {
        top: 15
      }
    },
    pullquoteLayout: {
      columnStart: 0,
      columnSpan: 20,
      margin: {
        top: 15,
        bottom: 15
      }
    }
  }
};
