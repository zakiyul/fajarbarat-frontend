import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Banner({banners}){

  return (
    <Carousel autoPlay showThumbs={false} showIndicators={false} infiniteLoop interval={1500}>
      {banners ? banners.map(banner => {
        return (
          <div key={banner.id}>
            <img src={banner.banner} id={banner.id} alt="banner"/>
          </div>
        )
      }) : null}
    </Carousel>
  )
}