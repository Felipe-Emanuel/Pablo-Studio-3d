import { Suspense } from "react"
import { NewsInfo } from "../components/layout/NewsInfo"
import { Text } from "../components/utils/Texts/Text"

export default async function Home() {


  return (
    <div className='h-screen w-full p-2 sm:p-10 bg-gray-400 flex flex-col justify-center items-center font-Roboto font-bold text-white overflow-x-hidden'>
      <h1 className='text-white'>Hello World!</h1>
      <Suspense fallback={<Text text="Carregando..." dark />}>
        {/* @ts-expect-error */}
        <NewsInfo  />
      </Suspense>
    </div>
  )
}
