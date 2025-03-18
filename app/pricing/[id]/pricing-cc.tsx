"use client";

import type {CardProps} from "@heroui/react";

import React from "react";
import {Button, Card, Image, CardBody} from "@heroui/react";
import { TvalGetDataEvents } from "@/types";
// import {Icon} from "@iconify/react";

export default function PricingComponent({getOneEventQuery}:{getOneEventQuery:TvalGetDataEvents[]}) {
  return (
    <Card className="bg-[url('https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/abstract-dark-bg4.jpg')] bg-bottom max-h-[400px] overflow-hidden" dir="rtl">
  
      <CardBody className="!w-full flex flex-row flex-wrap p-0 sm:flex-nowrap ">
        <Image
          removeWrapper
          alt="Acme Creators"
          className="h-auto  flex-none object-cover lg:w-1/2"
          src={`${getOneEventQuery[0].image}`}
        />
        <div className="!w-[300px] py-5 px-4 *:text-right" dir="">
          <h3 className="text-large font-medium dark:text-default-600 text-default-300">{getOneEventQuery[0].title}</h3>
          <div className="flex flex-col gap-3 pt-2 text-small dark:text-default-600 text-default-300 leading-7">
            <p>
              {getOneEventQuery[0].desc}
            </p>
            <p> <strong>تاریخ برگزاری : </strong>{getOneEventQuery[0].date_start}</p>
            <p> <strong>محل برگزاری : </strong>{getOneEventQuery[0].space}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
