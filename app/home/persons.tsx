"use client";
import { InView } from "@/components/ui/in-view";
import Image from "next/image";
import { motion } from "motion/react";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { Tilt } from "@/components/motion-primitives/tilt";

export function AnimatedGroupCustomVariants() {
  const imagesArr = [
    { id: 1, src: "/izadi.jpg" },
    { id: 2, src: "/gholam-zade.jpg" },
    { id: 4, src: "/mamadi.jpg" },
    { id: 3, src: "/shah-hoseini.jpg" },
    { id: 5, src: "/saeedi.jpg" },
    { id: 6, src: "/vothoghi.jpg" },
  ];
  return (
    <div className=" w-full overflow-auto">
      <div className="flex  items-end justify-center">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className="columns-2 gap-4 px-8 sm:columns-3 overflow-hidden">
            {imagesArr.map((imgSrc, index) => {
              return (
                <>
                  <Tilt rotationFactor={8} isRevese className="">
                  <Spotlight
                        className="z-10  blur-2xl"
                        size={40}
                        springOptions={{
                          stiffness: 26.7,
                          damping: 4.1,
                          mass: 0.2,
                        }}
                      />
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          scale: 0.8,
                          filter: "blur(10px)",
                        },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          filter: "blur(0px)",
                        },
                      }}
                      key={index}
                      className="mb-4"
                    >
                      
                      <Image
                        width={200}
                        height={200}
                        src={`${imgSrc.src}`}
                        alt={`Image placeholder from cosmos.so, index:${index}`}
                        className="size-full rounded-lg object-contain"
                      />
                    </motion.div>
                  </Tilt>
                </>
              );
            })}
          </div>
        </InView>
      </div>
    </div>
  );
}
