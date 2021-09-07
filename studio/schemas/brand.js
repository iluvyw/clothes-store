export default {
    name: "brand",
    title: "Brand",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Brand's name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            }
        },
        {
            name: "logo",
            title: "Logo",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "origin",
            title: "Origin",
            type: "text"
        }
    ]
}