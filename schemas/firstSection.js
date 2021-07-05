export default {
    name: "firstSection",
    title: "First Section",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
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
            name: "userImage",
            title: "User Image",
            type: "image",
            options: {
                hotspot: true,
            },

        },
        {
            name: "userTitle",
            title: "User Title",
            type: "string",
        },
        {
            name: "userName",
            title: "User Name",
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