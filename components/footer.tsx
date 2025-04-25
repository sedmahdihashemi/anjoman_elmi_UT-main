"use client";

import { InstagramIcon, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SiAparat, SiTelegram } from "react-icons/si";

export default function Footer() {
  return (
    <>
      <footer className="footer-1 w-full h-full  py-8 sm:py-24 bg-fixed  bg-[url('/op.jpg')] bg-cover">
        <div className="container mx-auto px-4 py-12">
          {/* <Image height={120} width={120} alt='slm' src={'/op.jpg'} /> */}
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 *:!text-white">
              <h5 className="text-xl font-bold mb-6">دسترسی آسان</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <Link
                    href="#"
                    className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                  >
                    صفحه اصلی
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                  >
                    دوره آمورشی{" "}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                  >
                    رویدادها
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                  >
                    رسانه
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                  >
                    درباره انجمن
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="#"
                    className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                  >
                    عضویت در انجمن
                  </Link>
                </li>
              </ul>
            </div>

            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-2/6 mt-8 md:mt-0 *:!text-white">
              <h5 className="text-xl font-bold mb-6">ارتباط با ما</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <h6 className="font-bold mb-2 text-primary">آدرس</h6>
                  <address className="text-white mb-4 text-sm">
                    تهران، بزرگراه جلال آل احمد، جنب بیمارستان دکتر شریعتی،
                    دانشکده علوم اجتماعی دانشگاه تهران
                  </address>
                </li>
                <li className="mb-2">
                  <p className="text-primary">کد پستی :</p>
                  <p> 141171318</p>
                </li>
                <li className="mb-2">
                  <p className="text-primary">ایمیل</p>
                  <a
                    href="mailto:urbanstudiesassociation.ut@gmail.com"
                    className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                  >
                    urbanstudiesassociation.ut@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto *:text-white">
              <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
                صفحات مجازی
              </h5>
              <div className="flex justify-center xl:justify-start">
                <Link
                  target="_blank"
                  href="https://instagram.com/urbanstudiesassociation_ut"
                  className="w-12 h-12 flex justify-center items-center rounded-full \]"
                >
                  <InstagramIcon />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@urbanstudiesassociation_ut"
                  className="w-12 h-12 flex justify-center items-center rounded-full \]"
                >
                  <Youtube />
                </Link>
                <Link
                  target="_blank"
                  href="https://t.me/urbanstudiesassociation_ut"
                  className="w-12 h-12 flex justify-center items-center rounded-full \]"
                >
                  <SiTelegram size={20} />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.aparat.com/urbanstudiesassociation_ut"
                  className="w-12 h-12 flex justify-center items-center rounded-full \]"
                >
                  <SiAparat size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
