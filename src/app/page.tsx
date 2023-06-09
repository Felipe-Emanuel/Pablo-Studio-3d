import { Suspense } from "react"
import { NewsInfo } from "../components/layout/NewsInfo"
import { NewsInfoSkeleton } from "@layout/NewsInfo/NewsInfoSkeleton"

export default async function Home() {


  return (
    <div className='h-screen w-full p-2 sm:p-10 bg-gray-400 font-Roboto font-bold text-white overflow-x-hidden'>
      <h1 className='text-white'>Hello World!</h1>
      <Suspense fallback={<NewsInfoSkeleton />}>
        {/* @ts-expect-error */}
        <NewsInfo  />
      </Suspense>
    </div>
  )
}
