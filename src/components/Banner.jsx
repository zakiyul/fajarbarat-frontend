import {useState, useEffect} from 'react'
import axios from 'axios';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner(){
  const [banners,setBanners] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/banner/`)
     .then(results => setBanners(results.data))
  })
  return (
    <Carousel autoPlay showThumbs={false} showIndicators={false} infiniteLoop interval={1500}>
      {banners.map(banner => {
        return (
          <div>
            <img src={banner.banner} id={banner.id} alt="banner"/>
          </div>
        )
      })}
    </Carousel>
  )
}