import React, { useEffect, useState } from 'react'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) throw new Error('Failed to fetch products')
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="mb-6 text-center text-4xl font-normal text-zinc-900">
        Products
      </h1>

      {loading && (
        <p className="text-center text-zinc-500">Loading products...</p>
      )}
      {error && (
        <p className="text-center text-red-500">Error: {error}</p>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-5 shadow-xs"
          >
            <h2 className="text-sm font-medium text-zinc-800">
              {product.title}
            </h2>
            <div className="my-4 flex h-48 items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-44 object-contain"
              />
            </div>
            <div>
              <p className="mb-2 text-sm text-zinc-700">
                ${Number(product.price).toFixed(2)}
              </p>
              <button
                type="button"
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-zinc-700"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="max-w-md rounded-xl bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-2 text-lg font-semibold text-zinc-900">
              {selectedProduct.title}
            </h3>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="mx-auto my-4 max-h-48 object-contain"
            />
            <p className="mb-2 text-sm text-zinc-600">
              {selectedProduct.description}
            </p>
            <p className="mb-4 font-semibold text-zinc-900">
              ${Number(selectedProduct.price).toFixed(2)}
            </p>
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="cursor-pointer rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-zinc-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
