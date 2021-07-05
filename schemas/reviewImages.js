export default {
    name: 'reviewImages',
    title: 'Review Images',
    type:"document",
    fields: [
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
    ]
}