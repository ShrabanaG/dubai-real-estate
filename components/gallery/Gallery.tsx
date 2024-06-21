"use client";

import { useState } from "react";

import { galleryImages } from "@/constatnts/index";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import "./gallery.css";

const Gallery = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <div className='gallery theme-padding'>
            <div className="gallery-btn">
                <button className="btn1 bg-btnColor text-white h-[40px] border-btnColor border-[2px] uppercase">
                    Exteriors
                </button>
                <button className="btn2 bg-white text-btnColor h-[40px] uppercase border-btnColor border-[2px]">
                    Interiors
                </button>
            </div>
            <div className="gallery-slider mt-9">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{
                        swiper:
                            thumbsSwiper ? thumbsSwiper : null
                    }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='h-96 w-full rounded-lg'
                >
                    {galleryImages.map((each, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <div className='flex h-full w-full items-center justify-center'>
                                    <Image
                                        src={each}
                                        alt="sider-image"
                                        className='each-image'
                                    />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Swiper
                    onSwiper={() => setThumbsSwiper}
                    loop={true}
                    spaceBetween={12}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='thumbs mt-3 h-32 w-full rounded-lg'
                >
                    {galleryImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <button className='flex h-full w-full items-center justify-center'>
                                <Image
                                    src={image}
                                    alt="thumbnail"
                                    className='block h-full w-full object-cover thumbnail-image rounded-2xl'
                                />
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </div>
    )
}

export default Gallery