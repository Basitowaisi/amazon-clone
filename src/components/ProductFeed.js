import Product from "./Product"

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products?.slice(0, 4)?.map((product) => (
        <Product id={product.id} key={product.id} {...product} />
      ))}
      <img
        src="https://drive.google.com/uc?id=1vOPf-8R-zUGnyQwgVNkTxc0o1IrY0tsa&export=view"
        className="md:col-span-full"
        alt="Ad"
      />
      <div className="md:col-span-2">
        {products?.slice(4, 5)?.map((product) => (
          <Product id={product.id} key={product.id} {...product} />
        ))}
      </div>
      {products?.slice(5, products?.length)?.map((product) => (
        <Product id={product.id} key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductFeed
