import { getRandomInt } from "./reviews/[reviewId]/page";

export default function ProductListingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const random = getRandomInt(2)

  if(random === 1){
    throw new Error("Error loading product")
  }
  return (
    <>
      {children}
      <h2>feature products</h2>
    </>
  );
}
