import React, { useEffect, useState } from 'react'
import CardView from '../CardView/CardView'
import DropDownList from '../DropDownList/DropDownList'
import SanityClient from '../../client'
import './Home.css'

const get_brand_query = `*[_type=="brand"]{name}`

export default function Home() {
    const [brandList, setBrandList] = useState([])
    const [selectedBrand, setSelectedBrand] = useState("")

    useEffect(() => {
        SanityClient.fetch(get_brand_query)
            .then(data => setBrandList(data))
        //.then(console.log(selectedBrand))
    }, [selectedBrand])

    return (
        <div className="background">
            <section className="drop-down-container">
                <DropDownList list={brandList} select={setSelectedBrand} />
            </section>
            <section>
                <CardView brand={selectedBrand} />
            </section>
            <footer>
                <a href="https://www.facebook.com/an.phamhoang.1/">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/anpham2408/">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/an-ph%E1%BA%A1m-43203a199/">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/iluvyw">
                    <i class="fab fa-github"></i>
                </a>
            </footer>
        </div>
    )
}
