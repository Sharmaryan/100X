import { notFound } from "next/navigation";

export function getRandomInt(count: number) {
  return Math.floor(Math.random() * count)
}

export default async function ProductDetails({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) {
  const { reviewId, productId } = await params;

  const count = getRandomInt(2)
  if(count === 1){
    throw new Error('Error loading reveiw')
  }
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
