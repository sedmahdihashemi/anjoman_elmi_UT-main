import React from 'react'
import {QueryClient} from 'react-query'
import { getEvents } from '@/services/api/events'
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const queryClient = new QueryClient()
const data = await queryClient.fetchQuery({
  queryKey : ['getEvents'],
  queryFn : getEvents
})
console.log(data);



  return <div>My Post: {data[0].desc}</div>
}
