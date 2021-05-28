import Image from "next/image"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct"
import Header from "../components/Header"
import { selectItems, selectTotal } from "../slices/cartSlice"
import Currency from "react-currency-formatter"
import { useSession } from "next-auth/client"

function Checkout() {
  const [session] = useSession()
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  console.log(total)
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          {/* ad */}
          <Image
            src="https://drive.google.com/u/0/uc?id=1B2otOCHtm_ODuHKKni9LvFOfaH3Xi0JG&export=view"
            width={1020}
            height={250}
            objectFit="contain"
          />
          {/* cart */}
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length == 0
                ? "Your shopping cart is empty"
                : "Shopping cart"}
            </h1>
            {items.map((item, index) => (
              <CheckoutProduct {...item} key={item.id} />
            ))}
          </div>
        </div>
        {/* right */}
        {items.length > 0 && (
          <div className="flex flex-col bg-white p-10 shadow-md">
            <>
              <h2 className="whitespace-nowrap">
                Subtotal {items.length} items:{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="USD" />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          </div>
        )}
      </main>
    </div>
  )
}

export default Checkout
