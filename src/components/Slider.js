import React from "react";
import left from "../images/chevron-left-solid.svg"
import right from "../images/chevron-right-solid.svg"
import images from "../dataFiles/ImageData"
import quotes from "../dataFiles/QuotesData"
import "./Slider.css"

export default function Slider () {

    const [quote, setQuote] = React.useState(quotes.data[Math.floor( Math.random() * quotes.data.length )])
    const [imageIndex, setImageIndex] = React.useState(0)

    function getQuote () {
        setQuote(quote => quotes.data[Math.floor( Math.random() * quotes.data.length )])
    }

    function nextIndex () {
        setImageIndex(prevIndex => (prevIndex+1)%images.data.length)
        getQuote()
    }

    function prevIndex () {
        setImageIndex(prevIndex => (prevIndex+3)%images.data.length)
        getQuote()
    }

    const dots = images.data.map(x => {
        return (
            <div className="slide--dot"></div>
        )
    })
    dots[imageIndex] = <div className="slide--large-dot"></div>

    return (
        <div classname="slide-wrapper">
            <img className="slide--img" src={require(`../images/${images.data[imageIndex].name}`)} />
            <div className="slide--img-cover"></div>
            <div className="slide--content">
                <img onClick={prevIndex} className="slide--arrow-left" src={left} />
                <div className="slide--center">
                    <h1 className="slide--text">{quote}</h1>
                    <div className="slide--dots">
                        {dots}
                    </div>
                </div>
                <img onClick={nextIndex} className="slide--arrow-right" src={right} />
            </div>
        </div>
    )
}