import React from 'react'
import {QueryClient} from 'react-query'
// import {getOneEvent} from '@/services/api/events'
import { TvalGetDataEvents } from '@/types'
import PricingComponent from './pricing-cc'
import { getOneEvent } from '@/services/api/events'
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const queryClient = new QueryClient()
  const getOneEventQuery:TvalGetDataEvents[] = await queryClient.fetchQuery({
    queryKey: ['getOneEvent', id], // ارسال id در queryKey
    queryFn: () => getOneEvent(id), // پاس دادن id به getOneEvent
  })
// console.log(getOneEvent[0].image);



  return <PricingComponent getOneEventQuery={getOneEventQuery} />
}
