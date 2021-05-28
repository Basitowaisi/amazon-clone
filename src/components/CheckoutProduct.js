import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../slices/cartSlice"

function CheckoutProduct(product) {
  const { id, title, description, price, rating, category, image, prime } =
    product

  const dispatch = useDispatch()
  const addItemToCart = () => {
    dispatch(addToCart(product))
  }

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }))
  }

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="USD" />
        {prime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://drive.google.com/u/0/uc?id=1V5c6Sb02q47fXtO9SFWTeZLSNI4iVYBp&export=view"
              alt="Prime Logo"
              loading="lazy"
              className="w-12"
            />
            <p className="text-xs text-gray-500">Free Next day delivery</p>
          </div>
        )}
      </div>
      {/* Buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToCart}>
          Add to Cart
        </button>
        <button onClick={removeItemFromCart} className="button">
          Remove from Cart
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
