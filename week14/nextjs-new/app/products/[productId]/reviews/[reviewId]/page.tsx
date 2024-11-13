import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) {
  const { reviewId, productId } = await params;
  if(parseInt(reviewId) > 1000){
    notFound()
  }
  return (
    <>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </>
  );
}
