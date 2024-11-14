export default function ProductListingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <h2>feature products</h2>
    </>
  );
}
