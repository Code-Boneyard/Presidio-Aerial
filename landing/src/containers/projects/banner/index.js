import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Image from '../../../components/image'

const Banner = () => {
    const bannerQueryData = useStaticQuery(graphql `
        query ProjectBannerQuery {
            pagedataJson(id: {eq: "project_page_data"}) {
                banner_img {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 750, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }      
    `);
    const imageData = bannerQueryData.pagedataJson.banner_img.childImageSharp.fluid
    return (
        <div className="banner-area">
            <Image fluid={imageData} alt="Project Banner"/>
        </div>
    )
}

export default Banner
 