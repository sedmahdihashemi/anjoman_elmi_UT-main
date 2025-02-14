import Link from 'next/link';
import React from 'react'
import { SiImessage, SiTelegram } from "react-icons/si";
import { MdOutlineMessage } from "react-icons/md";
import { Chip } from '@nextui-org/chip';

export default function IconContact() {
  return (
    <Link href={'https://t.me/urban_studies_admin'} target='_blank'  className='group flex items-center gap-2  w-24 fixed bottom-0 right-0'>
    <section className='flex items-center gap-2 '>
    <div className='bg-primary rounded-full flex justify-center items-center w-16 h-16'>
    <MdOutlineMessage size={35} className='' />
    </div>
   
    <Chip color="primary"  className='hidden group-hover:flex duration-700' startContent={<SiTelegram size={18} />} variant="flat">
راه ارتباطی
      </Chip>
    </section>
    </Link>
  )
}
