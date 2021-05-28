import Image from "next/image"
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"
function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://drive.google.com/u/0/uc?id=1FQoR_1SQ5WSJuKEjeAxxdblBJIQSpYYG&export=view"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search Bar */}
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer ">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right section */}
        <div className="text-white flex items-center space-x-6 mx-6 whitespace-nowrap">
          <div className="nav-link">
            <p>Hello Basit Owaisi</p>
            <p className="font-extrabold md:text-sm">Account &amp; Lists</p>
          </div>
          <div className="nav-link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">&amp; Orders</p>
          </div>
          <div className="nav-link relative flex items-center">
            <span className="bg-yellow-400 text-sm flex items-center justify-center rounded-full text-black font-bold absolute top-0 right-0 sm:right-10 h-4 w-4">
              0
            </span>
            <ShoppingCartIcon className="h-10" />

            <p className="font-extrabold md:text-sm mt-2 hidden sm:inline">
              Cart
            </p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex items-center bg-amazon_blue-light p-2 pl-6 text-white text-sm space-x-3">
        <p className="flex items-center nav-link">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="nav-link">Prime video</p>
        <p className="nav-link">Amazon Business</p>
        <p className="nav-link">Today's Deals</p>
        <p className="hidden nav-link lg:inline-flex">Electronics</p>
        <p className="hidden nav-link lg:inline-flex">Food &amp; Grocery</p>
        <p className="hidden nav-link lg:inline-flex">Prime</p>
        <p className="hidden nav-link lg:inline-flex">Buy Again</p>
        <p className="hidden nav-link lg:inline-flex">Shopper Toolkit</p>
        <p className="hidden nav-link lg:inline-flex">
          Health &amp; Personal Care
        </p>
      </div>
    </header>
  )
}

export default Header
