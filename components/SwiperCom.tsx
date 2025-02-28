'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './../app/home/style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { getEvents } from '@/services/api/events';
import { TvalGetDataEvents } from '@/types';
import LoadingComp from './loadingcomp';

export default function SwiperCom() {

  const getDataEvents = useQuery({
    queryKey: 'events',
    queryFn: getEvents
  })

  if(getDataEvents.isLoading){
    return <LoadingComp />
  }
 
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper lg:!h-[90%]"
        >
          {
   getDataEvents?.data?.map((val:TvalGetDataEvents)=>{
    return(
      <SwiperSlide key={val.id} className='!flex !justify-center'>
          <Link href={`/pricing/${val.id}`} className='!flex !justify-center w-full'>
            <Image className='w-full lg:!w-4/12 lg:!h-fit' height={600} width={200} src={val.image} alt='swiper' />
          </Link>
        </SwiperSlide>
    )

  })
}      
      </Swiper>
    </>

  );
};