import React from "react";
import Slider from "react-slick";
import Logo1 from "../../img/logo_kubsu.png"
import Logo2 from  "../../img/logo_ros_atom.png"
import Logo3 from "../../img/logo_gazprom.png"
import Logo4 from "../../img/logo_vtb.png"
import '../slick/slick.css'
import '../slick/slick-theme.css'
import "./workers_slider.css"

const Workers_slider2 = () =>{
    const settings = {
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {slidesToShow: 4,centerPadding: '1%',
                }

            },
            {
                breakpoint:600,
                settings: {slidesToShow: 2}
            }
        ]
    };
    return(
        <div className="sld">
    <Slider {...settings}>
        <div className="Elem">
            <img src={Logo1}/>
        </div>
        <div className="Elem">
            <img src={Logo2}/>
        </div>
        <div className="Elem">
            <img src={Logo4}/>
        </div>
        <div className="Elem">
            <img src={Logo3}/>
        </div>
        <div className="Elem">
            <img src={Logo1}/>
        </div>
        <div className="Elem">
            <img src={Logo2}/>
        </div>
    </Slider>
    </div>
    );
}

export default Workers_slider2;