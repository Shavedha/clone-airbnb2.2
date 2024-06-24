import React from 'react'
import './style.css'
//import hotel from './components/Cards/hotel-4.jpeg'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination,Navigation } from 'swiper/modules';

function Card({card}) {
  return (
    <div className='card-box'>
        <Swiper
            slidesPerView={1}
            spaceBetween={15}
            loop={false}
            mousewheel={true}
            cssMode={true}
            pagination
            // navigation={true}
            modules={[Pagination,Navigation]}
            className='swiper-container'
            // style={{height:"300px",width:"300px",color:"#fff"}}
            // bulletClass={"background-color:#fff;"}
            >
                {card.imgSrc.map((src,i)=>(

                <SwiperSlide key={i}>
                    <img 
                    src={src}
                    className='card-img'/>
                </SwiperSlide>
                ))}

                
            </Swiper>

        {/* <img src='src\components\Cards\hotel-2.jpeg' className='card-img'/> */}
        <div className='card-info-flex'>
            <h3 className='card-title'>{card.title}</h3>
            <div className='card-rating'>
                <StarRateRoundedIcon/>
                <p>{card.rating}</p>
            </div>
        </div>
         <p className='card-details'>{card.desc}</p>
        <p className='card-details'>{card.date}</p>
        <p className='card-details2'>
            <span style={{fontWeight: "600"}}>{card.price}</span>Night</p>
        
    </div>

    
    
  )
}

export default Card