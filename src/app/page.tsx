
import { Suspense } from "react"
import { NewsInfo } from "../components/layout/NewsInfo"
import { NewsInfoSkeleton } from "../components/layout/NewsInfo/NewsInfoSkeleton/NewsInfoSkeleton"
import { getProduct } from "../data/prismic";
import { Menu } from "../components/layout/Menu";

export default async function Home() {
  const { product } = await getProduct();

  return (
    <div className='h-screen w-full p-2 sm:p-10 bg-gray-400 font-Roboto font-bold text-white overflow-x-hidden'>
      <h1 className='text-white'>Hello World!</h1>
      <Suspense fallback={<NewsInfoSkeleton />}>
        <NewsInfo product={product} />
      </Suspense>
    </div>
  )
}
