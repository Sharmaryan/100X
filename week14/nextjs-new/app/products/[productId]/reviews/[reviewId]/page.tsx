export default async function ProductDetails({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) {
  const { reviewId, productId } = await params;
  return (
    <>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </>
  );
}
