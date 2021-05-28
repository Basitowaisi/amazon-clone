import Image from "next/image"
import { useState } from "react"
import { StarIcon } from "@heroicons/react/solid"
import Currency from "react-currency-formatter"

const MAX_RATING = 5
const MIN_RATING = 1

function Product({ id, title, price, description, category, image }) {
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  )

  const [prime, setPrime] = useState(Math.random() < 0.5)

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category
          .split(" ")
          .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
          .join(" ")}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
      {prime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            src="https://drive.google.com/u/0/uc?id=1V5c6Sb02q47fXtO9SFWTeZLSNI4iVYBp&export=view"
            alt=""
            className="w-12"
          />
          <p className="text-xs text-gray-500">Free Next Day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Cart</button>
    </div>
  )
}

export default Product