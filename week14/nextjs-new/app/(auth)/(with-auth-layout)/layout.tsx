export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <h2>Inner Layout</h2>
        {children}
      </>
    );
  }
  