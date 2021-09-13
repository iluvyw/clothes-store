import SanityClient from "@sanity/client"

export default SanityClient({
    projectId: "gqwdproo",
    dataset: "clothes",
    apiVersion: '2021-08-31',
    token: process.env.SANITY_WRITE_TOKEN,
    useCdn: false
})