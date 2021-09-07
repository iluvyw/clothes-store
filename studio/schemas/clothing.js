export default {
    name: "clothing",
    title: "Clothing",
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
                maxLength: 96
            }
        },
        {
            name: "front_image",
            title: "Front Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "back_image",
            title: "Back Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "brand",
            title: "Brand",
            type: "reference",
            to: [{ type: "brand" }]
        },
        {
            name: "remainNumber",
            title: "Ramaining Number",
            type: "number"
        },
        {
            name: "madeIn",
            title: "Made In",
            type: "string"
        }
    ]
}