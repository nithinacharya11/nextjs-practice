import { useRouter } from "next/router"

const ProductId = () => {
    const router = useRouter();
    const product = router.query.productId
  return (
    <div>
      <h1>product description page for {product} </h1>
    </div>
  )
}

export default ProductId
