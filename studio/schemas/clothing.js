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
            name: "price",
            title: "Price",
            type: "number"
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
            name: "image1",
            title: "First Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image2",
            title: "Second Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image3",
            title: "Third Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "image4",
            title: "Product Image",
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
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                  {title: 'Tops', value: 'Tops'},
                  {title: 'Bottoms', value: 'Bottoms'},
                  {title: 'Skirts & Dresses', value: "Skirts & Dresses"},
                  {title: 'Accessories', value: "Accessories"}
                ], // <-- predefined values
                layout: 'Category' // <-- defaults to 'dropdown'
            }
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
        },
        {
            name: "note",
            title: "Note",
            type: "string"
        }
    ]
}