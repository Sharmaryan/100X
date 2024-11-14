import Link from "next/link";

export default function ProductListing() {
  const productId = 200
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product Listing</h1>
      <h2><Link href='/products/1'>Product 1</Link></h2>
      <h2><Link href='/products/2' replace>Product 2</Link></h2>
      <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2>
    </>
  );
}
