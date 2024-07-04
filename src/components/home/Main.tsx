import { Button } from "flowbite-react";
import Products from "./Products";
import { useEffect, useState } from "react";
import { Product } from "../../types";
import { data } from './data'

export default function Main() {

  const [filtered, setFiltered] = useState<Product[]>([])

  useEffect(() => setFiltered(data), [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 dark:bg-gray-800">
      <div className="flex items-center gap-14">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, error.
          </h1>
          <h4 className="w-96">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptatibus similique tempore inventore dignissimos minima sequi nihil accusamus ipsam modi.
          </h4>
          <Button>Learn more</Button>
        </div>

        <img className="size-72 rounded-full" src="https://flowbite.com/docs/images/examples/image-4@2x.jpg" alt="image description" />
      </div>
      <Products prods={filtered} />
    </main>
  )
}
