import SwiperCom from '@/components/SwiperCom'
import React from 'react'
import { AboutAccademy } from './about-accademy'
import { AnimatedGroupCustomVariants } from './persons'

export default function page() {
  return (
    <>
    <AboutAccademy />
      <SwiperCom />
      <AnimatedGroupCustomVariants />
    </>
  )
}
