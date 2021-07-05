export default {
    name: "secondSection",
    title: "Second Section",
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
            name: "image",
            title: "image",
            type: "image",
            options: {
                hotspot: true,
            },

        },

        {
            title: 'Text',
            name: 'text',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ],
}