'use client'
import { TextEffect } from '@/components/ui/text-effect';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export function AboutAccademy() {

    
    const [isStart, setIsStart] = useState<boolean>(() => {
        // مقدار ذخیره‌شده در sessionStorage را بررسی کن
        return Cookies.get("hasAnimated") === "true";
    });

    useEffect(() => {
        if (!isStart) {
            Cookies.set("hasAnimated", "true");
        }
    }, [isStart]);
    return (
        <div className='flex flex-col space-y-0 py-8 *:text-justify'>
            <TextEffect
                as='strong'
                per='word'
                delay={0.5}
                variants={{
                    container: {
                        hidden: {
                            opacity: 0,
                        },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.05,
                            },
                        },
                    },
                    item: {
                        hidden: {
                            opacity: 0,
                            rotateX: 90,
                            y: 10,
                        },
                        visible: {
                            opacity: 1,
                            rotateX: 0,
                            y: 0,
                            transition: {
                                duration: 0.2,
                            },
                        },
                    },
                }}
                className='text-2xl pb-5'
                isStart={isStart}
            >
                درباره‌ی انجمن
            </TextEffect>
            <TextEffect per='word' delay={1.5} isStart={isStart}>
                انجمن بین رشته‌ای مطالعات شهری با هدف پر کردن خلأهای مطالعات تخصصی شهری در فضای آکادمیک کشور
                و همچنین تقویت فعالیتهای علمی-پژوهشی در حوزه مسائل شهری تأسیس شده است. این انجمن بستری برای تبادل
                نظر و هم‌اندیشی میان دانشجویان و پژوهشگران فراهم می کند و هم‌سو با بدنه فعال دانشجویی و جامعه مدنی حرکت
                میکند و قصد دارد با بهره گیری از پتانسیل‌های موجود به بررسی و تحلیل مسائل مختلف شهری بپردازد.
            </TextEffect>
            <TextEffect
                per='word'
                delay={9}
                className='pt-5'
                isStart={isStart}
                
            >
                یکی از ویژگی های بارز این انجمن، رویکرد میان رشته‌ای آن است. این رویکرد به پژوهشگران این امکان را می دهد
                که از دیدگاه های مختلف به مسائل شهری نگاه کنند و راه‌حل‌های جامع تری برای چالش های موجود ارائه دهند.
            </TextEffect>
            <TextEffect
                per='word'
                delay={14}
                className='pt-5'
                isStart={isStart}
                
            >
                فعالیت‌های این انجمن در قالب نشست های تخصصی با فعالان و صاحب نظران این حوزه، ایجاد بستر همکار ی با
                پژوهشگران سایر حوزه ها اعم از معماری، مدیریت شهری، شهرساز ی و جغرافیا و... ، ایجاد حلقه های مطالعاتی، انتشار
                نشریه ی تخصصی، برنامه های شهرگردی و همچنین برنامه ها ی نقد و بررسی فیلم و کتاب شناسی در راستا ی پرداختن
                به امر شهری برنامه ریزی شده است
            </TextEffect>
        </div>
    );
}
