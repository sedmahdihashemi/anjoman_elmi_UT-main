import React from 'react'
import {QueryClient} from 'react-query'
import { getEvents, getOneEvent } from '@/services/api/events'
import { TvalGetDataEvents } from '@/types'
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const queryClient = new QueryClient()
  const data:TvalGetDataEvents[] = await queryClient.fetchQuery({
    queryKey: ['getOneEvent', id], // ارسال id در queryKey
    queryFn: () => getOneEvent(id), // پاس دادن id به getOneEvent
  })
console.log(data[0].image);



  return <div>My Post: {data[0].id}</div>
}
