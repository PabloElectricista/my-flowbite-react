import { Product } from "../../types"
import ProductCard from "./ProductCard"

interface Props {
  prods: Product[]
}

export default function Products({ prods }: Props) {

  return (
    <div className='grid grid-cols-2 justify-stretch gap-4'>
      {
        prods?.length > 0 ? 
        prods.map(prod => <ProductCard prod={prod} key={prod.id}/>)
        : null
      }
    </div>
  )
}
