export default {
    name: "header",
    title: "Header",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            name: "mainImage",
            title: "Header Main Image",
            type: "image",
            options: {
                hotspot: true,
            },

        },
        {
            name: "secondTitle",
            title: "Second Title",
            type: "string",
        },
        {
            name: 'referenceList',
            title: 'references',
            type: 'array',
            of: [
              {
                type: 'image'
              },
              {
                title: 'URL',
                name: 'urlObject',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'urlField',
                    type: 'url'
                  }
                ]
              }
            ]
          }
    ],
}