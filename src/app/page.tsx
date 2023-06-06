import { getProduct } from "@Prismic/index"
import { PrismicRichText  } from "@prismicio/react"
import { Suspense } from "react"

export default async function Home() {
  const { product } = await getProduct()

  return (
    <div className='h-screen w-screen bg-gray-400 flex flex-col justify-center items-center font-Roboto font-bold text-white'>
      <h1 className='text-white'>Hello World!</h1>
        {product.map(product => (
          <Suspense fallback={<p className="text-red-500">Carregando Produto...</p>}>
            <PrismicRichText field={product.Name} />
          </Suspense>
          ))}
          <div className="w-20 h-20 shadow-easy shadow-black bg-black"></div>
    </div>
  )
}
