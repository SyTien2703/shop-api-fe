import React, { useState } from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'

const dataSlider = [
    {
        id: 1,
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: "http://goristore.tokyo/cdn/shop/files/GORI_STORE_2023_LOGO_DESIGN.png?height=628&pad_color=fff&v=1674827022&width=1200"
    },
    {
        id: 2,
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: "https://toplist.vn/images/800px/gori-shop-tan-phu-751240.jpg"
    },
    {
        id: 3,
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: "https://theme.hstatic.net/200000015470/1000737480/14/slide_2_img.jpg?v=80"
    },
    {
        id: 4,
        title: "Lorem ipsum",
        subTitle: "Lorem",
        img: "https://theme.hstatic.net/200000015470/1000737480/14/slide_4_img.jpg?v=80"
    },
];


export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            { dataSlider.map((obj, index) => {
                return (
                    <div
                        key={ obj.id }
                        className={ slideIndex === index + 1 ? "slide active-anim" : "slide" }
                    >
                        <img
                            src={ obj.img }
                        />
                    </div>
                )
            }) }
            <BtnSlider moveSlide={ nextSlide } direction={ "next" } />
            <BtnSlider moveSlide={ prevSlide } direction={ "prev" } />

            <div className="container-dots">
                { Array.from({ length: 4 }).map((item, index) => (
                    <div
                        key={ index }
                        onClick={ () => moveDot(index + 1) }
                        className={ slideIndex === index + 1 ? "dot active" : "dot" }
                    ></div>
                )) }
            </div>
        </div>
    )
}